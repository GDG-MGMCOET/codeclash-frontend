import { CLASS_OPTIONS, DIVISION_OPTIONS } from "./constant";

export const DIVISIONS = [
  { value: "", label: "Select Division" },
  ...DIVISION_OPTIONS.map((division) => {
    return { value: division, label: division };
  }),
];

export const CLASSES = [
  { value: "", label: "Select Class" },
  ...CLASS_OPTIONS.map((cur_class) => {
    return { value: cur_class, label: cur_class };
  }),
];
