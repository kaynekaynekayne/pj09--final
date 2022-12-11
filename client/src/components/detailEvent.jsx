import React,{useState} from 'react'
import { CardActions, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import trimFullYear from '../utils/trimFullYear';
import Loading from './loading';
import styled from 'styled-components';


const DetailEvent = ({details}) => {

    const [expanded, setExpanded]=useState(false);
    const {
        prfnm,
        genrenm,
        poster,
        fcltynm,
        prfpdfrom,
        prfpdto,
        prfruntime,
        prfcast,
        pcseguidance,
        prfstate,
        prfage,
    }=details;

    const handleExpand=()=>setExpanded(prev=>!prev);

    return (
        <Section>
            {Object.keys(details).length===0 ? <Loading /> :
            <div className='box'>
                <h4>{prfnm}</h4>
                <h6>{fcltynm}</h6>
                <div>
                    <img src={poster} alt="main poster"/>
                </div>
                <CardActions >
                    <IconButton aria-label="more information" onClick={handleExpand}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div className='info-container'>
                        <div>
                            <h6>장르</h6>
                            <span>{genrenm}</span>
                        </div>
                        <div>
                            <h6>기간</h6>
                            <span>
                                {trimFullYear(prfpdfrom)}-{trimFullYear(prfpdto)} ({prfstate})
                            </span>
                        </div>
                        <div>
                            <h6>시간</h6>
                            <span>{prfruntime}</span>
                        </div>
                        <div>
                            <h6>등급</h6>
                            <span>{prfage}</span>
                        </div>
                        <div>
                            <h6>배우</h6>
                            <span>{prfcast}</span>
                        </div>
                        <div>
                            <h6>가격</h6>
                            <span>{pcseguidance}</span>
                        </div>

                    </div>
                </Collapse>
            </div>
            }
        </Section>
    )
}

const Section=styled.section`
    flex-basis: 50%;
    margin:1.5rem;

    .box{
        padding:1.5rem;
        border:1px solid lightgray;
        border-radius:0.8rem;
        img{
            max-height:28rem;
            max-width:100%;
            object-fit:contain;
        }
        h4{
            font-weight: bold;
        }
        h6{
            margin-bottom:1rem;
        }
    }

    .info-container{
        div{
            margin-bottom:1rem;
            display:flex;
            justify-content:space-between;
        }
        h6{
            font-weight:bold; 
            margin-bottom:0;
        }

        input{
            width:80%
            
        }
        
    }
`;

export default DetailEvent;
