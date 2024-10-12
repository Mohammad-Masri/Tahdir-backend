import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OTP, OTPSchema } from 'src/schemas/otp';
import { GlobalOTPService } from 'src/common/services/otp.service';
import { SchoolUserService } from 'src/common/services/school-user.service';
import { User, UserSchema } from 'src/schemas/user';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OTP.name, schema: OTPSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [GlobalOTPService, SchoolUserService],
})
export class SchoolModule {}
