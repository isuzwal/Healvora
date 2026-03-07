export function DoctorProfileSkeleton() {
  return (
    <div className="w-full min-h-screen flex justify-center py-6 px-3 bg-slate-50 animate-pulse">
      <div className="w-full max-w-6xl rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col md:flex-row gap-4">
        {/* Sidebar Skeleton */}
        <div className="p-6 bg-slate-100 md:w-105">
          <div className="text-center mb-6">
            <div className="w-28 h-28 rounded-full bg-slate-300 mx-auto mb-4"></div>

            <div className="h-5 w-40 bg-slate-300 mx-auto rounded mb-2"></div>
            <div className="h-4 w-32 bg-slate-200 mx-auto rounded"></div>
          </div>

          <div className="space-y-3">
            <div className="h-10 bg-white rounded-lg border"></div>
            <div className="h-10 bg-white rounded-lg border"></div>
            <div className="h-10 bg-white rounded-lg border"></div>
            <div className="h-10 bg-white rounded-lg border"></div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
            <div className="h-4 w-32 bg-slate-300 rounded"></div>
            <div className="h-4 w-48 bg-slate-200 rounded"></div>
            <div className="h-4 w-36 bg-slate-200 rounded"></div>
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1 p-6">
          <div className="mb-10">
            <div className="h-6 w-56 bg-slate-300 rounded mb-4"></div>

            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="h-5 w-40 bg-slate-300 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-10 bg-slate-100 rounded"></div>
                <div className="h-10 bg-slate-100 rounded"></div>
                <div className="h-10 bg-slate-100 rounded"></div>
              </div>
            </div>

            <div>
              <div className="h-5 w-40 bg-slate-300 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-10 bg-slate-100 rounded"></div>
                <div className="h-10 bg-slate-100 rounded"></div>
                <div className="h-10 bg-slate-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
