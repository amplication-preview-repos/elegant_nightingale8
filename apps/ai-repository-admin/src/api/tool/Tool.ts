import { Goal } from "../goal/Goal";

export type Tool = {
  comments: string | null;
  createdAt: Date;
  goal?: Goal | null;
  id: string;
  isFree: boolean | null;
  name: string | null;
  updatedAt: Date;
  url: string | null;
  validated: boolean | null;
};
