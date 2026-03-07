import Image from "next/image";
import { IDoctor } from "@/types";

export function DoctorDetailsSidebar({
  doctor,
  loading,
}: {
  doctor: IDoctor | null;
  loading: boolean;
}) {
  // Skeleton loader
  if (loading) {
    return (
      <aside className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg animate-pulse flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 bg-neutral-200 rounded-full" />
          <div className="flex-1">
            <div className="h-4 w-32 bg-neutral-200 rounded mb-2" />
            <div className="h-3 w-24 bg-neutral-200 rounded" />
          </div>
        </div>
        <div className="h-3 w-40 bg-neutral-200 rounded" />
        <div className="h-3 w-28 bg-neutral-200 rounded" />
        <div className="h-3 w-24 bg-neutral-200 rounded" />
        <div className="h-3 w-32 bg-neutral-200 rounded" />
        <div className="h-3 w-20 bg-neutral-200 rounded" />
        <div className="h-3 w-36 bg-neutral-200 rounded" />
        <div className="h-3 w-28 bg-neutral-200 rounded" />
        <div className="h-3 w-24 bg-neutral-200 rounded" />
      </aside>
    );
  }

  // Doctor details UI
  return (
    <aside className="w-full max-w-md mx-auto p-6 bg-white border border-emerald-100 rounded-2xl shadow-lg flex flex-col gap-6 h-auto">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="w-28 h-28 relative overflow-hidden rounded-full border-4 border-emerald-100">
          <Image
            src={doctor?.doctor_image || "/images/default-doctor.png"}
            alt={doctor?.doctorName || "doctor-image"}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-emerald-600">
            {doctor?.doctorName}
          </h2>
          <p className="text-sm text-neutral-500">{doctor?.department}</p>
        </div>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-emerald-600 font-medium">Address</p>
          <p className="text-neutral-600">{doctor?.address}</p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Consultation Fee</p>
          <p className="text-neutral-600">₹{doctor?.consultationFee}</p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Email</p>
          <p className="text-neutral-600 break-all">{doctor?.email}</p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Phone</p>
          <p className="text-neutral-600">{doctor?.phone}</p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Experience</p>
          <p className="text-neutral-600">{doctor?.experienceYears} years</p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Availability</p>
          <p className="text-neutral-600">
            {doctor?.isAvailable ? "Available" : "Unavailable"}
          </p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Languages</p>
          <p className="text-neutral-600">
            {doctor?.language_spoken?.join(", ")}
          </p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Qualifications</p>
          <p className="text-neutral-600">
            {doctor?.qualifications?.join(", ")}
          </p>
        </div>

        <div className="sm:col-span-2">
          <p className="text-emerald-600 font-medium">Specialization</p>
          <p className="text-neutral-600">{doctor?.specialization}</p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Rating</p>
          <p className="text-neutral-600">{doctor?.rating}</p>
        </div>

        <div>
          <p className="text-emerald-600 font-medium">Total Consultations</p>
          <p className="text-neutral-600">{doctor?.total_consultaions || 0}</p>
        </div>
      </div>
    </aside>
  );
}
