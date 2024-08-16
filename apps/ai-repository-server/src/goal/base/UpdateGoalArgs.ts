/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GoalWhereUniqueInput } from "./GoalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GoalUpdateInput } from "./GoalUpdateInput";

@ArgsType()
class UpdateGoalArgs {
  @ApiProperty({
    required: true,
    type: () => GoalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GoalWhereUniqueInput)
  @Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GoalUpdateInput,
  })
  @ValidateNested()
  @Type(() => GoalUpdateInput)
  @Field(() => GoalUpdateInput, { nullable: false })
  data!: GoalUpdateInput;
}

export { UpdateGoalArgs as UpdateGoalArgs };
