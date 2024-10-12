import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OTPDocument = HydratedDocument<OTP>;

@Schema()
export class OTP {
  @Prop()
  code: string;

  @Prop()
  subject: string;

  @Prop({
    type: mongoose.Schema.Types.Date,
    expires: 5,
    default: Date.now(),
  })
  createdAt: Date;
}

export const OTPSchema = SchemaFactory.createForClass(OTP);
