import { ToolUpdateManyWithoutGoalsInput } from "./ToolUpdateManyWithoutGoalsInput";

export type GoalUpdateInput = {
  description?: string | null;
  name?: string | null;
  tools?: ToolUpdateManyWithoutGoalsInput;
};
