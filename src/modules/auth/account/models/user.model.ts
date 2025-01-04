import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  displayName: string;

  @Field(() => String, { nullable: true })
  avatarImg: string;

  @Field(() => String, { nullable: true })
  bio: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
