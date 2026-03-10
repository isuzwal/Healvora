import { BACKENDAPI } from "@/types/url";




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
// get doctor list
export const DoctorList=async()=>{
       try{
        const response=await fetch(`${BACKENDAPI}/api/v1/admin/doctor-list`);
        const data=await response.json();
        if(!response.ok){
            throw new Error(data.message || "Failed to fetch user");
        }
        return data;
   }catch(error){
         throw error; 
    }
 }
// get doctor by id
export const DoctorId=async(id:string)=>{
    try{
        const response=await fetch(`${BACKENDAPI}/api/v1/admin/doctor/${id}`)
        const data=await response.json();
        if(!response.ok){
            throw new Error(data.message || "Failed to fetch user");
        }
        return data;
   }catch(error){
    console.log("Error",error)
         throw error; 
    }
}
