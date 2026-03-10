import { getUser, getUserBookings } from "@/lib/user-api/api";
import { UserState } from "@/types";

import { create } from "zustand";

export const useUserStore = create<UserState>((set) => ({
  user: null,
  bookings:null,
  loading: false,
  error: null,
  fetchUser: async () => {
    try {
      set({ loading: true, error: null });
      const data = await getUser();
      set({ user: data.data.user_data, loading: false });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      set({ error: message, loading: false });
    }
  },
  logout() {
    localStorage.removeItem("user_token");
    set({ user: null });
  },
  getBookingsList: async () => {
    try {
      set({ loading: true, error: null });
      const res = await getUserBookings();
      set({ bookings: res.data, loading: false });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      set({ error: message, loading: false });
    }
  },
}));


