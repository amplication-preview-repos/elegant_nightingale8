/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ToolWhereUniqueInput } from "../../tool/base/ToolWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ToolUpdateManyWithoutGoalsInput {
  @Field(() => [ToolWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ToolWhereUniqueInput],
  })
  connect?: Array<ToolWhereUniqueInput>;

  @Field(() => [ToolWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ToolWhereUniqueInput],
  })
  disconnect?: Array<ToolWhereUniqueInput>;

  @Field(() => [ToolWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ToolWhereUniqueInput],
  })
  set?: Array<ToolWhereUniqueInput>;
}

export { ToolUpdateManyWithoutGoalsInput as ToolUpdateManyWithoutGoalsInput };
