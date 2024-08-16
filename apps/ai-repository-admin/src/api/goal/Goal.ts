import { Tool } from "../tool/Tool";

export type Goal = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tools?: Array<Tool>;
  updatedAt: Date;
};
