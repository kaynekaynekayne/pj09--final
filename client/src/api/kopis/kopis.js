import instance from "..";

export const mainEvents=async()=>{
    const response=await instance.get("/api/events");
    return response.data;
};

export const search=async(query)=>{
    const response=await instance.get("/api/search",{
        params:{query}
    });
    return response.data;
}

export const eventDetail=async(id)=>{
    const response=await instance.get("/api/detail", {
        params:{id}
    });
    return response.data;
};

export const placeDetail=async(code)=>{
    const response=await instance.get("/api/place", {
        params:{code}
    });
    return response.data;
}
