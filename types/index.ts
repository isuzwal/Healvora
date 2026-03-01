import { IBooking } from "./demo.data";


export enum Qualifications {
  MBBS = "MBBS",
  MD = "MD",
  MS = "MS",
}



export enum Status {
  PENDING = "Pending",
  SUCCESS = "Success",
  CANCELLED="Cancel"
}

export enum Gender {
  MALE = "male",
  FEMALE = "female", 
  OTHER = "other",
  PREFER_NOT_TO_SAY = "prefer_not_to_say"
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

type  IsAvailable="Available" | "Unavailable"|"Leave"
// Dcotor From Details
export  interface IDoctor{
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
    isAvailable:IsAvailable;
}
export type DoctorBasicInfo=Pick<IDoctor, "doctorName" | "doctor_image"  |"department" | "isAvailable" >


export interface Booking{
     name:string,
     gender:Gender
     age:number,
     appointment_date?:Date,
     department:string,
     status:Status
     problem:string
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


  
export interface User{
  _id:string
  profile_image:string,
  username:string,
  email:string,
 
}
export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  logout: () => void;
}