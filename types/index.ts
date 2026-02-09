

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
}

// User
export interface IUser{
    username:string;
    email:string;
    password:string;
}

// Dcotor From Details
export  interface IDoctor{
    doctorName:string;
    email:string;
    phone:string;
    specialization:string;
    qualifications:Qualifications[]
    experienceYears:number;
    department:string;
    consultationFee:number;
    isAvailable:boolean;
}


export interface Booking{
     name:string,
     gender:Gender
     age:number,
     appointment_date?:Date,
     department:string,
     status:Status
     problem:string
}
