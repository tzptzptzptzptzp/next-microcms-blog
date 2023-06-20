import { atom } from "recoil";

export const sectionsOffsetState = atom<number[]>({
  key: "sectionsOffsetState",
  default: [],
});
