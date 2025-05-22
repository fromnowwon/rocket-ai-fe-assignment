import { create } from "zustand";
import { SajuData } from "@/types/saju";

type Data = SajuData["data"];
type UserName = SajuData["userName"];

interface SajuState {
  data: Data | null;
  userName: UserName;
  setData: (sajuData: Data) => void;
  setUserName: (name: UserName) => void;
}

export const useSajuStore = create<SajuState>((set) => ({
  data: null,
  userName: "",
  setData: (data) => set({ data }),
  setUserName: (name) => set({ userName: name }),
}));
