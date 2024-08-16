import { SortOrder } from "../../util/SortOrder";

export type ToolOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  goalId?: SortOrder;
  id?: SortOrder;
  isFree?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  validated?: SortOrder;
};
