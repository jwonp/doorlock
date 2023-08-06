import { TechType } from "../types/TechType";

export type Card = {
  id: string;
  maxSize: number;
  type: string;
  techType: TechType;
  lastTagged: string;
};
