import { adminAccount, DoctorId, DoctorList } from "@/lib/admin-api/api";
import { AdminState, BookingList, DoctorIdState, DoctorState } from "@/types";
import {create} from "zustand"
import { getAllBookings } from "@/lib/admin-api/api";

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
export const userDoctorList = create<DoctorState>()
(
    (set) => ({
      doctor: [],
      loading: false,
      error: null,
     
      fetchDoctor: async () => {
        // Prevent duplicate API calls
        try {
          set({ loading: true, error: null });
          const res = await DoctorList();
          
          set({
            doctor: res.data,
            loading: false,
          
           
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
          doctor: state.doctor.filter((doc) => doc._id !== id),
        }));
      },
    }),
    
);
    
  // admin bookings list
  export const useAdminBookings = create<BookingList>((set) => ({
    bookings: [],
    loading: false,
    error: null,
    fetchBookings: async () => { 
      try {
        set({ loading: true, error: null });
        const res = await getAllBookings();
        set({ bookings: res.data, loading: false });
      } catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        set({ error: message, loading: false });
      }
    },
  
  }))

// get Doctor ById
export const useDoctorId=create<DoctorIdState >()((set)=>({
      doctor: null,
      loading: false,
      error: null,
      totalConsultations:0,
      fetchDoctorId:async(id:string) =>{
          try {
          set({ loading: true, error: null });
          const res = await DoctorId (id);
          
          set({
            doctor: res.data,
            totalConsultations:res.totalConsultations,
            loading: false,
           
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
})  
)