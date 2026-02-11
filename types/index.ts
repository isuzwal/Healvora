

export enum Qualifications {
  MBBS = "MBBS",
  MD = "MD",
  MS = "MS",
}



export enum Status {
  PENDING = "pending",
  SUCCESS = "success",
}

export enum Gender {
  MALE = "male",
  FEMALE = "female", 
  OTHER = "other",
  PREFER_NOT_TO_SAY = "prefer_not_to_say"
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
    image?:string
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
    isAvailable:IsAvailable;
}
export type DoctorBasicInfo=Pick<IDoctor, "doctorName" | "image"  |"department" | "isAvailable" >


export interface Booking{
     name:string,
     gender:Gender
     age:number,
     appointment_date?:Date,
     department:string,
     status:Status
     problem:string
}
