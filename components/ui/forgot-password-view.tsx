import { ArrowLeft, Key, Mail } from "lucide-react";
import { Card, CardContent, CardTitle } from "./card";
import { Label } from "./label";
import { Input } from "./input";
import Link from "next/link";

export const ForgotPassword = () => {
  return (
    <div className="h-screen flex justify-center  items-center ">
      <div className="">
        <Card className="p-2  border-transparent shadow-none">
          <div className="flex flex-col gap-4 justify-center items-center">
            <span className=" w-8  shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] h-8 flex justify-center items-center bg-primary  border-green-300 rounded-lg border  ">
              <Key className="size-5 text-white" />
            </span>
            <CardTitle className="text-center">
              <h1 className="text-[18px] font-semibold font-sans tracking-tighter text-neutral-700">
                Forgot Password ?
              </h1>
              <p className=" mt-0.5 tracking-tighter text-[14px]   font-medium font-sans text-neutral-600">
                Dont&apos;t woory, we will send you a opt for password rest{" "}
              </p>
            </CardTitle>
            <div className="w-full gap-0.5  flex flex-col items-start justify-start  mt-2">
              <h2 className="text-[14px]   w-full text-neutral-600 font-semibold font-sans  tracking-tighter">
                Email
              </h2>
              <label
                className="border w-full  rounded-lg px-1.5  bg-slate-100 py-1 flex items-center focus-within:border-green-300
                focus-within:ring-2 focus-within:ring-green-200 transition-all duration-300"
              >
                <Mail className="  size-4 text-neutral-500" />
                <Input
                  type="email"
                  placeholder="eg:healvora@gamil.com"
                  className="w-full h-6  rounded-md text-[12px] text-neutral-700   focus:outline-none focus:ring-0 focus-visible:ring-0
                focus-visible:border-transparent placeholder:px-1.5 placeholder:text-neutral-700 placeholder:text-[12px] "
                />
              </label>
            </div>
            <div className="w-full  ">
              <button className="px-4 py-1 text-[14px]  w-full   justify-center text-white cursor-pointer  rounded-lg shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all hover:bg-primary/80  bg-primary border border-green-300 font-sans font-medium">
                Send password otp{" "}
              </button>
              <Link
                href="/login"
                className=" mt-2 flex gap-0.5  group   hover:text-neutral-500 duration-300 ease-in-out transition-all tracking-tighter font-sans font-medium text-neutral-600  text-[12px] items-center"
              >
                <ArrowLeft className="text-2 size-3.5 group-hover:-translate-x-1 duration-300 ease-in-out transition-all" />{" "}
                Back to login
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
