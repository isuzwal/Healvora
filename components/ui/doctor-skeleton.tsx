export const DoctorListSkeleton = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 animate-pulse">
      <div className="flex items-center gap-1.5">
        {/* image skeleton */}
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>

        <div className="flex flex-col gap-1 mt-1.5">
          {/* name */}
          <div className="h-3 w-20 bg-gray-300 rounded"></div>

          {/* department */}
          <div className="h-2 w-14 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* status skeleton */}
      <div className="h-4 w-16 bg-gray-300 rounded-lg"></div>
    </div>
  );
};
export const DoctorSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="px-2 w-full flex justify-between">
        <div className="flex items-center gap-1.5 m-1">
          {/* avatar */}
          <div className="h-6 w-6 rounded-full bg-gray-300"></div>

          <div className="flex flex-col gap-1 mt-1.5">
            {/* name */}
            <div className="h-3 w-24 bg-gray-300 rounded"></div>

            {/* department */}
            <div className="h-2 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* availability badge */}
        <div className="flex items-center px-4">
          <div className="h-4 w-16 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* separator skeleton */}
      <div className="h-[1px] w-full bg-gray-200 mt-0.5"></div>
    </div>
  );
};
