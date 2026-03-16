import { create } from "zustand";
import { getDoctorProfile } from "@/lib/admin-api/api";
import { IDoctor } from "@/types";

interface DoctorState {
  doctor: IDoctor | null ;
  loading: boolean;
  error: string | null;
  fetchDoctor: () => Promise<void>;
}

export const useDoctorStore = create<DoctorState>((set) => ({
  doctor: null,
  loading: false,
  error: null,
  fetchDoctor: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getDoctorProfile();
      set({ doctor: data, loading: false });
    } catch (error) {
          const message =
            error instanceof Error
              ? error.message
              : "Something went wrong";
          set({
            error: message,
            loading: false,
          });
        }
  },
}));
