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
        return response;

    }catch(err){
        return err;
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
        return response;
    }catch(err){
        return err;
    }
};

export const logout=async()=>{
    try{
        const response=await instance.get('/user/logout',
            {
                withCredentials:true,
            }
        )
        return response;
    }catch(err){
        return err;
    }
};

export const isUserLoggedIn=async()=>{
    try{
        const response=await instance.get('/user/user',
            {
                withCredentials:true,
            },
        )
        return await response.data;
    }catch(err){
        throw new Error("로그인을 하십시오");
    }
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