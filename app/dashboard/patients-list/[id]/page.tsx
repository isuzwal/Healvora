"use client";

import { IconProgress } from "@tabler/icons-react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  console.log("Params", params);
  return (
    <div className="w-full  h-screen flex justify-center items-center">
      <div className="font-medium">
        <button className="px-3 py-1 text-sm  justify-center  gap-1  group text-white cursor-pointer  rounded-md shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all hover:bg-primary/80  bg-primary border border-green-300  font-medium">
          Currently in Development mood <p className=" italic"> {params.id}</p>
        </button>
      </div>
    </div>
  );
}
