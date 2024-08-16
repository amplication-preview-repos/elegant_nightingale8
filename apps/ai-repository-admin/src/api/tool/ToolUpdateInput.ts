import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";

export type ToolUpdateInput = {
  comments?: string | null;
  goal?: GoalWhereUniqueInput | null;
  isFree?: boolean | null;
  name?: string | null;
  url?: string | null;
  validated?: boolean | null;
};
