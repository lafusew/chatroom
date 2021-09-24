export interface User {
  id: string;
  name: string;
  color?: string;
}

export interface Message {
  id: string;
  value: string;
  time: number;
  user: User;
}

export const defaultUser: User = {
  id: "no_id",
  name: "no_name",
  color: "#ECE9DD",
};

export type SVGItem = "HAT" | "SHIRT" | "PANT" | "MAGIC" | "ACCESORY" | "SHOES";
