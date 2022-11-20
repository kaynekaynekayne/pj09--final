import React,{useState} from 'react'
import { CardActions, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import trimFullYear from '../utils/trimFullYear';
import styled from 'styled-components';
import Loading from './loading';


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
                    <div>
                        <div className="info-container">
                            <span><strong>장르</strong></span>
                            <span>{genrenm}</span>
                        </div>
                        <div className="info-container">
                            <span><strong>공연기간</strong></span>
                            <span>
                                {trimFullYear(prfpdfrom)}-{trimFullYear(prfpdto)} ({prfstate})
                            </span>
                        </div>
                        <div className="info-container">
                            <span><strong>공연시간</strong></span>
                            <span>{prfruntime}</span>
                        </div>
                        <div className="info-container">
                            <span><strong>등급</strong></span>
                            <span>{prfage}</span>
                        </div>
                        <div className="info-container">
                            <span><strong>배우</strong></span>
                            <span>{prfcast}</span>
                        </div>
                        <div className='info-container'>
                            <span><strong>가격</strong></span>
                            <span>{pcseguidance}</span>
                        </div>
                        <div className='info-container'>
                            <span><strong>기대평</strong></span>
                            <input />
                        </div>
                    </div>
                </Collapse>
            </div>
            }
        </Section>
    )
}

const Section=styled.section`

    .box{
        padding:1rem;
        border:1px solid lightgray;
        border-radius:0.8rem;
        img{
            max-height:28rem;
            object-fit:contain;
        }
        h6{
            margin-bottom:1rem;
        }
    }

    .info-container{
        margin-bottom:1rem;
        display:flex;
        justify-content:space-between;
        input{width:80%}
    }
`;

export default DetailEvent;
