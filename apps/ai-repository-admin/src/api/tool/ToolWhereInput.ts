import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ToolWhereInput = {
  comments?: StringNullableFilter;
  goal?: GoalWhereUniqueInput;
  id?: StringFilter;
  isFree?: BooleanNullableFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
  validated?: BooleanNullableFilter;
};
