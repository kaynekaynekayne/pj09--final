import React, {useEffect, useState} from 'react';
import {mainEvents} from '../api/kopis/kopis';
import reformatData from '../utils/reformatData';
import xmlConverter from '../utils/xmlConverter';
import Card from '../components/card';
import Loading from '../components/loading';
import Search from '../components/search';
import styled from 'styled-components';

const Home = () => {

    const [events, setEvents]=useState([]);

    useEffect(()=>{
        getEvents();
    },[]);

    const getEvents=async()=>{
        try{
            const response=await mainEvents();
            const data=await xmlConverter(response);
            const items=reformatData(data);
            setEvents(items);
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <div>
            <Search />
            {events.length===0 ? <Loading /> :
                <CardContainer>
                    {events.map(event=>
                        <Card key={event.mt20id} event={event} genre={event.genrenm}/>
                    )}
                </CardContainer>
            }
        </div>
    );
};

const CardContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
    grid-gap:2rem;
    margin:2.5rem;
`;

export default Home;