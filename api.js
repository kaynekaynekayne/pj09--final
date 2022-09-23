import axios from 'axios';

const YEAR=new Date().getFullYear();
const DATE=new Date().toISOString().slice(5,10).replaceAll("-","");
const KOPIS_URL="http://www.kopis.or.kr/openApi/restful";

export const getEvents=async()=>{
    let response;
    try{
        response=await axios.get(`${KOPIS_URL}/pblprfr`,{
            params:{
                service:process.env.OPEN_API_DATA_KEY,
                stdate:YEAR-1+DATE,
                eddate:YEAR+1+DATE,
                cpage:1,
                rows:8,
                prfstate:'02',
                signgucode:	11
            }
        })
        return response;
    }catch(e){
        console.log(e);
    }
}

export const searchEvents=async(query)=>{
    let response;
    try{
        response=await axios.get(`${KOPIS_URL}/pblprfr`,{
            params:{
                service:process.env.OPEN_API_DATA_KEY,
                stdate:YEAR-10+DATE,
                eddate:YEAR+2+DATE,
                cpage:1,
                rows:15,
                shprfnm:query,
            }
        })
        return response;
    }catch(e){
        console.log(e);
    }
};

export const detailEvents=async(id)=>{
    let response;
    try{
        response=await axios.get(`${KOPIS_URL}/pblprfr/${id}`,{
            params:{
                service:process.env.OPEN_API_DATA_KEY,
            }
        })
        return response;
    }catch(e){
        console.log(e);
    }
}

export const map=async(code)=>{
    let response;
    try{
        response=await axios.get(`${KOPIS_URL}/prfplc/${code}`,{
            params:{
                service:process.env.OPEN_API_DATA_KEY,
            }
        })
        return response;
    }catch(e){
        console.log(e);
    }
}