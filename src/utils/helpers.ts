import { twMerge } from "tailwind-merge";

export const getImage = (path: string) => {
  return `https://azhtian.github.io/images/${path}`;
};

export function cn(...inputs: string[]) {
  return twMerge(inputs);
}
