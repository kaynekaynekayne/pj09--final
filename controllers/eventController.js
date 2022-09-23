import { getEvents, searchEvents, detailEvents, map } from "../api.js";

export const mainEvents=(req,res)=>{
    getEvents()
    .then((response)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.status(200).json(response.data);
    })
    .catch(err=>res.status(400).json({message:err.message}))
};

export const search=(req,res)=>{
    const {query}=req.query;

    searchEvents(query)
    .then((response)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.status(200).json(response.data);
    })
    .catch(err=>res.status(400).json({message:err.message}))
};

export const detail=(req,res)=>{
    const {id}=req.query;

    detailEvents(id)
    .then((response)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.status(200).json(response.data);
    })
    .catch(err=>res.status(400).json({message:err.message}))
}

export const place=(req,res)=>{
    const {code}=req.query;

    map(code)
    .then((response)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.status(200).json(response.data);
    })
    .catch(err=>res.status(400).json({message:err.message}))
}