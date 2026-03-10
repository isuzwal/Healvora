export enum Qualifications {
  MBBS = "MBBS",
  MD = "MD",
  MS = "MS",
}



export enum Status {
  PENDING = "pending",
  SUCCESS = "success",
  CANCELLED="cancel"
}

export enum Gender {
  MALE = "male",
  FEMALE = "female", 
  OTHER = "other",
 
}

export enum LanguageSpoken {
  ENGLISH = "English",
  HINDI = "Hindi"
}
// User
export interface IUser{
    username:string;
    email:string;
    password:string;
}


// Dcotor From Details
export  interface IDoctor{
    _id:string;
    doctorName:string;
    doctor_image?:string
    email:string;
    gender:Gender
    age:number,
    phone:string;
    address:string,
    specialization:string;
    qualifications:Qualifications[]
    experienceYears:string;
    department:string;
    consultationFee:string;
    bio?:string;
    language_spoken:LanguageSpoken[];
    isAvailable:boolean;
    rating:string;
    total_consultaions:number
}
export type DoctorBasicInfo=Pick<IDoctor, "doctorName" | "doctor_image"  |"department" | "isAvailable" >


export interface BookingData{
  doctorId: string;
  patient_name: string;
  age: number;
  gender: Gender;
  notes: string;
  appointment_date: Date;
  appointment_time: string;
  consultationFee:number;

}
export type PatientType = {
  patientId: string;
  name: string;
  image:string,
  gender: "Male" | "Female";
  age: number;
  date: string;
  department: string;
  status: "Pending" | "Success";
};

type ComplinacesStatus = "Pending" | "Resolve";
export interface CompliancesData {
compliance_title:string;
compliance_iusses:string;
complaince_status?: ComplinacesStatus;
}

export interface Bookingdata {
  _id: string;
  userId: string;
  doctorId: {
    _id: string;
    department: string;
  };
  patient_name: string;
  age: number;
  gender: Gender;
  status: Status;
  consultationFee: number;
  bookingCharge: number;
  paymentStatus: string;
  remainingAmount: number;
  notes: string;
  appointment_date: string;
  appointment_time: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface User{
  _id:string
  image:string,
  username:string,
  email:string,
 
}
export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  bookings:Bookingdata | null ,
  fetchUser: () => Promise<void>;
  getBookingsList:()=>Promise<void>;
  logout: () => void;
}
//admin 
export interface Admin {
 _id:string,
 adminName:string,
 admin_image:string
 email:string,
}
export interface AdminState {
  admin: Admin | null;
  loading: boolean;
  error: string | null;
  fetchAdmindata: () => Promise<void>;
  logoutAdmin: () => void;
}

export interface DoctorState{
  doctor:IDoctor[]
  loading: boolean;
  error: string | null;

  fetchDoctor: () => Promise<void>;
  deletedoctor: (id:string) => void;
}
export interface DoctorIdState{
   doctor:IDoctor | null ;
   loading:boolean;
   error:string | null ,
   fetchDoctorId:(id:string)=>Promise<void>;
}

export interface IBooking {
  userId:string;
  doctorId:{
    department:string,
    _id:string
  },
  appointment_time?: Date;
  appointment_date?: Date;
  patient_name: string;
  gender: Gender;
  age: number;
  
  status?: Status;
  notes: string;
  cancellation_reason?: string;
  cancelled_at?: Date;
  cancelled_by?: string;
}
