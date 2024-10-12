import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OTP } from 'src/schemas/otp';
import { StringUtils } from '../utils';

@Injectable()
export class GlobalOTPService {
  constructor(@InjectModel(OTP.name) private otpModel: Model<OTP>) {}

  async create(subject: string) {
    const code = StringUtils.generateRandomString(6);
    const otp = await this.otpModel.create({
      code,
      subject,
    });
    return await otp.save();
  }
}
