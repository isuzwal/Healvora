// get user Profile

import { BACKENDAPI } from "@/types/url";

export const getUser=async()=>{
    try{
        const token=localStorage.getItem("user_token");
        if(!token){
       throw new Error("UNAUTHORIZED");
        }
        const response=await fetch(`${BACKENDAPI}/api/v1/user/profile`,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        const data=await response.json();
       
        if(!response.ok){
            throw new Error(data.message || "Failed to fetch user");
        }
        return data;
    }catch(error){
         throw error; 
    }
} 
// get user booking list 
export const getUserBookings=async()=>{
    try{
        const token=localStorage.getItem("user_token");
        if(!token){
       throw new Error("UNAUTHORIZED");
        }
        const response=await fetch(`${BACKENDAPI}/api/v1/user/reserver`,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        const data=await response.json();
       
        if(!response.ok){
            throw new Error(data.message || "Failed to fetch  your resver");
        }
        return data;
    }catch(error){
         throw error; 
    }
} 