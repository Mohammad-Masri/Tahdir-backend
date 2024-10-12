import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserTypesEnum, UserTypesType } from 'src/config/constants';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  password: string;

  @Prop({ enum: UserTypesEnum })
  type: UserTypesType;
}

export const UserSchema = SchemaFactory.createForClass(User);
