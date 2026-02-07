import { IconProgress } from "@tabler/icons-react";

export default function page() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="font-medium">
        <button className="px-3 py-1 text-sm  justify-center  gap-1  group text-white cursor-pointer  rounded-md shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all hover:bg-primary/80  bg-primary border border-green-300  font-medium">
          Currently in Development{" "}
          <IconProgress className=" animate-spin size-4 mt-0.5" />{" "}
        </button>
      </div>
    </div>
  );
}
