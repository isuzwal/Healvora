import { adminAccount } from "@/lib/api";
import { AdminState } from "@/types";
import {create} from "zustand"

 export const useAdminStore=create<AdminState>((set)=>({
    admin:null,
    loading:false,
    error:null,
    fetchAdmindata:async()=>{
     try{
       set({loading:true,error:null});
       const data=await adminAccount();
      
       set({admin:data.data ,loading:false})
     }catch(error){
       const message=error  instanceof Error ?error.message : "Something went wrong ";
        set({ error: message, loading: false });
      }
    },
    logoutAdmin(){
        localStorage.removeItem("admin_token")
        set({admin:null})
    }
 }))