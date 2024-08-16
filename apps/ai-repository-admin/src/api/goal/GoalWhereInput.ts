import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ToolListRelationFilter } from "../tool/ToolListRelationFilter";

export type GoalWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tools?: ToolListRelationFilter;
};
