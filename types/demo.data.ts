// Backend booking types
import { Status, Gender, } from ".";


export interface IBooking {
  userId:string;
  doctor_id: string;
  appointment_time?: Date;
  appointment_date?: Date;
  patient_name: string;
  gender: Gender;
  age: number;
  department?: string;
  status?: Status;
  notes: string;
  cancellation_reason?: string;
  cancelled_at?: Date;
  cancelled_by?: string;
}

// Sample bookings for the currently logged-in user
export const userBookings: IBooking[] = [
 
  {
    userId: "65d4e1f2c1a4b2d3e4f5a6b7",
    doctor_id: "65d4e1f2c1a4b2d3e4f5a6c9",
    appointment_time: new Date("2026-02-25T14:00:00Z"),
    appointment_date: new Date("2026-02-25"),
    patient_name: "Current User",
    gender: Gender.MALE,
    age: 29,
    department:"NEUROLOGY",
    status: Status.PENDING,
    notes: "Consultation",
  },
  {
    userId: "65d4e1f2c1a4b2d3e4f5a6b7",
    doctor_id:"65d4e1f2c1a4b2d3e4f5a6d0",
    appointment_time: new Date("2026-02-26T09:00:00Z"),
    appointment_date: new Date("2026-02-26"),
    patient_name: "Current User",
    gender: Gender.MALE,
    age: 29,
    department:"ORTHOPEDICS",
    status: Status.CANCELLED,
    notes: "Follow-up",
    cancellation_reason: "Scheduling conflict",
    cancelled_at: new Date("2026-02-25T18:00:00Z"),
    cancelled_by: "user",
  },
   {
    userId: "65d4e1f2c1a4b2d3e4f5a6b7",
    doctor_id:"65d4e1f2c1a4b2d3e4f5a6d0",
    appointment_time: new Date("2026-02-26T09:00:00Z"),
    appointment_date: new Date("2026-02-27"),
    patient_name: "Current User",
    gender: Gender.MALE,
    age: 29,
    department:"ORTHOPEDICS",
    status: Status.SUCCESS,
    notes: "Follow-up",
    cancellation_reason: "Scheduling conflict",
    cancelled_at: new Date("2026-02-25T18:00:00Z"),
    cancelled_by: "user",
  },
];
import { CompliancesData, DoctorBasicInfo, PatientType } from ".";

export const patientdata: PatientType[] = [
  {
    patientId: "P1001",
    name: "Aarav Sharma",
    gender: "Male",
    age: 28,
   image: "/images/first.png",
    department: "Cardiology",
    date: "2/02/2026",
    status: "Pending",
  },
  {
    patientId: "P1002",
    name: "Saanvi Patel",
      image: "/images/lady.png",
    gender: "Female",
    age: 24,
    department: "Neurology",
    date: "2/03/2026",
    status: "Success",
  },
  {
    patientId: "P1003",
    name: "Rohan Verma",
    image: "/images/doctor-3.png",
    gender: "Male",
    age: 35,
    department: "Orthopedics",
    date: "2/04/2026",
    status: "Pending",
  },
  {
    patientId: "P1004",
    name: "Ananya Singh",
    image: "/images/first.png",
    gender: "Female",
    age: 30,
    department: "Dermatology",
    date: "2/05/2026",
    status: "Success",
  },
  {
    patientId: "P1005",
    name: "Kabir Thapa",
    image: "/images/doctor-3.png",
    gender: "Male",
    age: 41,
    department: "General Surgery",
    date: "2/06/2026",
    status: "Pending",
  },
  {
    patientId: "P1006",
    name: "Meera Joshi",
    image: "/images/lady.png",
    gender: "Female",
    age: 27,
    department: "Gynecology",
    date: "2/07/2026",
    status: "Success",
  },
  {
    patientId: "P1007",
    name: "Ishaan Adhikari",
    image: "/images/third.png",
    gender: "Male",
    age: 33,
    department: "ENT",
    date: "2/08/2026",
    status: "Pending",
  },
  {
    patientId: "P1008",
    name: "Priya Rai",
    image: "/images/first.png",
    gender: "Female",
    age: 29,
    department: "Pediatrics",
    date: "2/09/2026",
    status: "Success",
  },
  {
    patientId: "P1009",
    name: "Arjun Koirala",
    gender: "Male",
    image: "/images/third.png",
    age: 38,
    department: "Oncology",
    date: "2/10/2026",
    status: "Pending",
  },
  {
    patientId: "P1010",
    name: "Sneha Gupta",
    image: "/images/lady.png",
    gender: "Female",
    age: 26,
    department: "Psychiatry",
    date: "2/11/2026",
    status: "Success",
  },
  {
    patientId: "P1011",
    name: "Vikram Bista",
    gender: "Male",
    image: "/images/doctor-3.png",
    age: 45,
    department: "Urology",
    date: "2/12/2026",
    status: "Pending",
  },
  {
    patientId: "P1012",
    name: "Nisha Thapa",
    gender: "Female",
    image: "/images/lady.png",
    age: 31,
    department: "Endocrinology",
    date: "2/13/2026",
    status: "Success",
  },
  {
    patientId: "P1013",
    name: "Rahul Khadka",
    gender: "Male",
    image: "/images/third.png",
    age: 36,
    department: "Pulmonology",
    date: "2/14/2026",
    status: "Pending",
  },
  {
    patientId: "P1014",
    name: "Simran Kaur",
    gender: "Female",
    image: "/images/lady.png",
    age: 23,
    department: "Ophthalmology",
    date: "2/15/2026",
    status: "Success",
  },
  {
    patientId: "P1015",
    name: "Amit Shrestha",
    image: "/images/first.png",
    gender: "Male",
    age: 40,
    department: "Gastroenterology",
    date: "2/16/2026",
    status: "Pending",
  },
];

  // doctor  demo data list
 export const doctordata: DoctorBasicInfo[] = [
  {
    doctorName: "Dr. Aayush Sharma",
    department: "Cardiology",
    doctor_image: "/images/third.png",
    isAvailable: "Available",
  },
   {
    doctorName: "Dr. Kabir Joshi",
    department: "Oncology",
    doctor_image: "/images/first.png",
    isAvailable: "Unavailable",
  },
  {
    doctorName: "Dr. Priya Mehta",
    department: "Neurology",
    doctor_image: "/images/lady.png",
    isAvailable: "Available",
  },
  {
    doctorName: "Dr. Rohan Verma",
    department: "Orthopedics",
     doctor_image: "/images/first.png",
    isAvailable: "Available",
  },
   {
    doctorName: "Dr. Suman Koirala",
    department: "General Surgery",
    doctor_image: "/images/doctor-3.png",
    isAvailable: "Leave",
  },
  {
    doctorName: "Dr. Sneha Kapoor",
    department: "Pediatrics",
    doctor_image: "/images/doctor-3.png",
    isAvailable: "Available",
  },
  
  {
    doctorName: "Dr. Arjun Singh",
    department: "Dermatology",
    doctor_image: "/images/first.png",
    isAvailable: "Available",
  },
  {
    doctorName: "Dr. Nisha Thapa",
    department: "Gynecology",
       doctor_image: "/images/lady.png",
    isAvailable: "Available",
  },

 
 
  {
    doctorName: "Dr. Meera Rai",
    department: "ENT (Otolaryngology)",
    doctor_image: "/images/lady.png",
    isAvailable: "Unavailable",
  },
  {
    doctorName: "Dr. Vikram Adhikari",
    department: "Psychiatry",
  doctor_image: "/images/third.png",
    isAvailable: "Unavailable",
  },

 
];

  // Compliances data
//  export const compliancesdata: CompliancesData[] = [
//   {
//     name: "Aarav Sharma",
//     date: "2/01/2026",
//     doctor_image: "/doctor_images/first.png",
//     status: "Resolve",
//   },
//   {
//     name: "Saanvi Patel",
//     date: "2/03/2026",
//     doctor_image: "/doctor_images/lady.png",
//     status: "Resolve",
//   },
//   {
//     name: "Rohan Verma",
//     date: "2/05/2026",
//     doctor_image: "/doctor_images/Avatar-1.png",
//     status: "Resolve",
//   },
//   {
//     name: "Ananya Singh",
//     date: "2/07/2026",
//     doctor_image: "/doctor_images/first.png",
//     status: "Resolve",
//   },

//   // Pending (3)
//   {
//     name: "Kabir Thapa",
//     date: "2/08/2026",
//     doctor_image: "/doctor_images/lady.png",
//     status: "Pending",
//   },
//   {
//     name: "Meera Joshi",
//     date: "2/09/2026",
//     doctor_image: "/doctor_images/Avatar-1.png",
//     status: "Pending",
//   },
//   {
//     name: "Ishaan Adhikari",
//     date: "2/11/2026",
//     doctor_image: "/doctor_images/first.png",
//     status: "Pending",
//   },
// ];

  // filter out the sucess list
  export const totalappointment=patientdata.filter((pat)=>pat.status==="Success");
  export const pendingPatienst=patientdata.filter((pat)=>pat.status==="Pending")
 // filter out for the doctor avaible 
 export const isAvailable=doctordata.filter((doc)=>doc.isAvailable==="Available")
 export const UnAvailable=doctordata.filter((doc)=>doc.isAvailable==="Unavailable")
 export const Leave=doctordata.filter((doc)=>doc.isAvailable==="Leave")

 const totalPatients = patientdata.length;

  const successPatients = patientdata.filter(
  (pat) => pat.status === "Success"
).length;

 const pendingPatients = patientdata.filter(
  (pat) => pat.status === "Pending"
).length;
export const successPercentageFormatted =
  ((successPatients / totalPatients) * 100).toFixed(2);

export const pendingPercentageFormatted =
  ((pendingPatients / totalPatients) * 100).toFixed(2);