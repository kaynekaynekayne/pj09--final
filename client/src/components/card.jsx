import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import trimFullYear from '../utils/trimFullYear';

const EachCard = ({event, stdate, eddate, genre}) => {
    
    const {prfnm,poster,mt20id, prfstate}=event;

    return (
        <Card>
            {poster &&
                <Link to={`/detail/${mt20id}`}>
                    <img src={poster} alt="main poster"/>
                </Link>
            }
            <div className='title-box'>
                <h6 className='title-style'>{prfnm}</h6>
                <h6>{genre}</h6>
                {stdate && eddate && 
                <div className={prfstate==="공연완료" ? "completed" : ""}>
                    <span>
                        {`${trimFullYear(stdate)}-${trimFullYear(eddate)} (${prfstate})`} 
                    </span>
                </div>
                }
            </div>
        </Card>
    )
}
const Card=styled.div`
    border:1px solid lightgray;
    border-radius:1rem;
    img{
        width:100%;
        height:300px;
        border-radius:1rem 1rem 0 0;
    }

    .title-box{
        padding:1rem;
        height:85px;
    }

    .title-style{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight:bold;
    }
    
    .completed{
        color:lightgray;
    }

    @media screen and (max-width:768px){
        img{
            height:380px;
        }
    }
`;

export default EachCard;