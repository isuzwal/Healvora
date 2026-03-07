"use client";

import { useDoctorId } from "@/store/useAdminStore";
import {
  Briefcase,
  ChevronRight,
  DollarSign,
  Globe,
  GraduationCap,
  Info,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { DoctorProfileSkeleton } from "@/components/ui/doctor-profile-skeleton";
export default function Page() {
  // will pass the id to function here
  const { doctor, loading, fetchDoctorId } = useDoctorId();

  const params = useParams<{ id: string }>();
  const id = params.id;

  useEffect(() => {
    if (!id) return;
    fetchDoctorId(id);
  }, [id, fetchDoctorId]);

  if (loading) {
    return <DoctorProfileSkeleton />;
  }
  return (
    <div className="w-full min-h-screen flex justify-center py-6 px-3 bg-slate-50">
      <div className="w-full max-w-6xl rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col md:flex-row gap-4">
        {/* Left Sidebar */}
        <div className="p-4 sm:p-6 bg-slate-100 md:w-105">
          <div className="text-center mb-6">
            <div className="inline-block mb-4">
              <div className="border w-24 h-24 sm:w-28 sm:h-28 relative rounded-full overflow-hidden shadow-sm">
                <Image
                  src={doctor?.doctor_image || "/images/first.png"}
                  loading="lazy"
                  fill
                  alt="doctor-image"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-neutral-800 tracking-tight">
              {doctor?.doctorName}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              {doctor?.specialization}
            </p>

            <div className="flex items-center justify-center gap-1 text-slate-500 mt-2 text-xs sm:text-sm">
              <MapPin size={14} />
              <span>{doctor?.address.split(",").slice(-2).join(",")}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-3">
            <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between ">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-blue-50 text-blue-500 rounded-md border border-blue-100 flex items-center justify-center">
                  <Briefcase className="size-4" />
                </div>

                <span className="text-xs font-medium text-neutral-600">
                  Experience
                </span>
              </div>

              <span className="font-semibold text-xs text-neutral-700">
                {doctor?.experienceYears} Years
              </span>
            </div>

            <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between ">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-md flex items-center justify-center">
                  <DollarSign className="size-4" />
                </div>

                <span className="text-xs font-medium text-neutral-600">
                  Consultation
                </span>
              </div>

              <span className="font-semibold text-xs text-neutral-700">
                ₹{doctor?.consultationFee}
              </span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-purple-50 border border-purple-100 text-purple-500 rounded-md flex items-center justify-center">
                  <Users className="size-4" />
                </div>

                <span className="text-xs font-medium text-neutral-600">
                  Consultations
                </span>
              </div>

              <span className="font-semibold text-xs text-neutral-700">
                {doctor?.total_consultaions || 0}
              </span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between ">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-yellow-50 border border-yellow-100 text-yellow-500 rounded-md flex items-center justify-center">
                  <Star className="size-4" />
                </div>

                <span className="text-xs font-medium text-neutral-600">
                  Rating
                </span>
              </div>

              <span className="font-semibold text-xs text-neutral-700">
                {doctor?.rating || 0}
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <h4 className="text-base font-semibold text-neutral-900 tracking-tight">
              Contact Details
            </h4>

            <div className="space-y-3 mt-3">
              <a
                href={`mailto:${doctor?.email}`}
                className="group flex items-center gap-3 text-neutral-600 transition-colors hover:text-emerald-500"
              >
                <Mail
                  size={17}
                  className="text-neutral-800 group-hover:text-emerald-500 transition-colors"
                />

                <span className="text-sm font-medium truncate group-hover:text-emerald-500">
                  {doctor?.email}
                </span>
              </a>

              <div className="flex items-center gap-3 text-neutral-600">
                <Phone size={17} className="text-neutral-800" />
                <span className="text-sm font-medium">{doctor?.phone}</span>
              </div>

              <div className="flex items-start gap-3 text-neutral-600">
                <MapPin size={17} className="text-neutral-800 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {doctor?.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-8">
          {/* Bio */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Info size={18} />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Professional Biography
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {doctor?.bio}
            </p>
          </div>

          {/* Qualifications + Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Qualifications */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <GraduationCap size={18} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Qualifications
                </h3>
              </div>
              <div className="space-y-2">
                {doctor?.qualifications.map((l, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100"
                  >
                    <span className="text-sm font-semibold text-slate-700">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white">
                  <Globe size={18} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Languages
                </h3>
              </div>

              <div className="space-y-2">
                {doctor?.language_spoken.map((l, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100"
                  >
                    <span className="text-sm font-semibold text-slate-700">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
