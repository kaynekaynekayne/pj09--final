import React,{useState, useEffect} from 'react';
import DetailEvent from '../components/detailEvent';
import DetailMap from '../components/detailMap';
import {useParams} from 'react-router-dom';

import {eventDetail, placeDetail} from '../api/kopis/kopis';
import xmlConverter from '../utils/xmlConverter';
import reformatDetailData from '../utils/reformatDetailData';
import Search from '../components/search';
import styled from 'styled-components';


const Detail = () => {
    const params=useParams();
    const {id}=params;

    const [details, setDetails]=useState({});
    const [location, setLocation]=useState({lat:null, lng:null, address:null});

    
    useEffect(()=>{
        const getDetails=async()=>{
            try{
                const response=await eventDetail(id);
                const data=await xmlConverter(response);
                const items=reformatDetailData(data);
                setDetails(items);
                return items.mt10id
            }catch(err){
                console.log(err.message);
            }
        };

        const getPlaces=async(code)=>{
            try{
                const response=await placeDetail(code);
                const data=await xmlConverter(response);
                const items=reformatDetailData(data);
                setLocation({
                    lat:parseFloat(items.la), 
                    lng:parseFloat(items.lo), 
                    address:items.adres
                });
            }catch(err){
                console.log(err.message);
            }
        }

        getDetails()
        .then(placeCode=>getPlaces(placeCode));
    },[id]);
    
    return (
        <div>
            <Search />
            <Box>
                <DetailEvent details={details}/>
                {!Object.values(location).some(x=>x===null) &&
                    <DetailMap location={location}/>
                }
            </Box>
        </div>
    )
}

const Box=styled.div`
    display: flex;
    flex: 1;
    margin:2.5rem;

    @media screen and (max-width:768px){
        flex-direction: column;
    }
`;

export default Detail;