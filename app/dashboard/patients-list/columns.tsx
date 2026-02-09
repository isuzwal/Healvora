"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PatientType = {
  patientId: string;
  name: string;
  gender: "Male" | "Female";
  age: number;
  date: string;
  department: string;
  status: "Pending" | "Success";
};

export const columns: ColumnDef<PatientType>[] = [
  {
    accessorKey: "patientId",
    header: "Patient ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "date",
    header: "Appointment Date",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
