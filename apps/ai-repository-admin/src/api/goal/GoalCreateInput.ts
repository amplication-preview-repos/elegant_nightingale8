import { ToolCreateNestedManyWithoutGoalsInput } from "./ToolCreateNestedManyWithoutGoalsInput";

export type GoalCreateInput = {
  description?: string | null;
  name?: string | null;
  tools?: ToolCreateNestedManyWithoutGoalsInput;
};
