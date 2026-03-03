import { BACKENDAPI } from "@/types/url";

// get user Profile

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
//  admin account 
 export const  adminAccount=async()=>{
    try{
const token=localStorage.getItem("admin_token");
        if(!token){
       throw new Error("UNAUTHORIZED");
        }
        const response=await fetch(`${BACKENDAPI}/api/v1/admin/admin-profile`,{
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
