import { atom } from "recoil";

export const headerHeightState = atom<number>({
  key: "headerHeightState",
  default: 0,
});
