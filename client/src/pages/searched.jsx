import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { search } from '../api/kopis/kopis';
import reformatData from '../utils/reformatData';
import xmlConverter from '../utils/xmlConverter';
import Card from '../components/card';
import Loading from '../components/loading';
import Search from '../components/search';
import styled from 'styled-components';

const Searched = () => {
    const [searchedEvents, setSearchedEvents]=useState([]);
    const [noResult, setNoResult]=useState(false);
    const [loading, setLoading]=useState(false);

    const params=useParams();
    const {word}=params;


    useEffect(()=>{
        const getSearchingLists=async()=>{
            try{
                setLoading(true);
                const response=await search(word);
                const data=await xmlConverter(response);
                if(data.length===0) {
                    setNoResult(true);
                    setLoading(false);
                }else{
                    const items=reformatData(data);
                    setSearchedEvents(items);
                    setNoResult(false);
                    setLoading(false);
                };
            }catch(err){
                console.log(err.message);
            }
        }
        
        getSearchingLists();
    },[word]);

    return (
        <div>
            <Search />
            {loading ? <Loading />:(
                noResult ? <h5>검색 결과가 없습니다</h5> :
                    <CardContainer>
                        {searchedEvents.map(event=>
                            <Card key={event.mt20id} event={event} stdate={event.prfpdto} eddate={event.prfpdto}/>    
                        )}
                    </CardContainer>
                )
            }
        </div>
    )
}

const CardContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
    grid-gap:2rem;
    margin:2rem;
`;

export default Searched;