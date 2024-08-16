import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { GoalTitle } from "../goal/GoalTitle";

export const ToolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <ReferenceInput source="goal.id" reference="Goal" label="goal">
          <SelectInput optionText={GoalTitle} />
        </ReferenceInput>
        <BooleanInput label="isFree" source="isFree" />
        <TextInput label="name" source="name" />
        <TextInput label="url" source="url" />
        <BooleanInput label="validated" source="validated" />
      </SimpleForm>
    </Edit>
  );
};
