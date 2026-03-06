import { adminAccount, DoctorList } from "@/lib/api";
import { AdminState, DoctorState } from "@/types";
import {create} from "zustand"
import { persist } from "zustand/middleware";
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
 // doctor list
export const userDoctorList = create<DoctorState>()(
  persist(
    (set, get) => ({
      doctor: [],
      loading: false,
      error: null,
      fetched: false,

      fetchDoctor: async () => {
        const { fetched } = get();

        // Prevent duplicate API calls
        if (fetched) return;

        try {
          set({ loading: true, error: null });

          const res = await DoctorList();

          set({
            doctor: res.data,
            loading: false,
            fetched: true,
          });
        } catch (error) {
          const message =
            error instanceof Error
              ? error.message
              : "Something went wrong";

          set({
            error: message,
            loading: false,
          });
        }
      },
// delete doctor 
      deletedoctor: (id: string) => {
        set((state) => ({
          doctor: state.doctor.filter((doc) => doc.id !== id),
        }));
      },
    }),
    {
      name: "doctor-storage",
      partialize: (state) => ({
        doctor: state.doctor,
        fetched: state.fetched,
      }),
    }
  )
);