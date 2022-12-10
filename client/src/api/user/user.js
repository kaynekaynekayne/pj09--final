import instance from "..";

export const signup=async({username, email, password, confirmPassword}={})=>{
    const userInfo={username, email, password, confirmPassword};
    try{
        const response=await instance.post('/user/register',
            userInfo,
            {
                headers:{
                    Accept:'application/json',
                    "Content-Type":"application/json",
                }
            }
        ) 
        return await response.data;

    }catch(err){
        throw new Error(err.response.data.error)
    }
};

export const login=async({email, password}={})=>{
    const userInfo={email, password};
    try{
        const response=await instance.post('/user/signin',
            userInfo,
            {
                withCredentials:true,
                headers:{
                    Accept:'application/json',
                    "Content-Type":"application/json",
                }
            }
        )
        return await response.data;
    }catch(err){
        throw new Error(err.response.data.error)
    }
};

export const logout=async()=>{
    try{
        const response=await instance.get('/user/logout',
            {
                withCredentials:true,
            }
        )
        return await response.data;
    }catch(err){
        console.log(err.response.data.error);
    }
};

export const isUserLoggedIn=async()=>{
    const response=await instance.get('/user/user',
        {
            withCredentials:true,
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("ar-user")
            }
        },
    )
    return await response.data;
    // try{
    // }catch(err){
    //     throw new Error("로그인을 하십시오");
    // }
};

export const updateProfile=async({userEmail, newNickname}={})=>{
    const userInfo={userEmail, newNickname}
    try{
        const response=await instance.put("/user/update",
            userInfo,
            {
                headers:{
                    Accept:'application/json',
                    "Content-Type":"application/json",
                }
            }
        );
        return response;
    }catch(err){
        return err;
    }
}