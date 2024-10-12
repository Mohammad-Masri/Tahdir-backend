import { Body, Controller, Post } from '@nestjs/common';
import { GenerateOTPBody } from './dto/generate-otp.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GlobalOTPService } from 'src/common/services/otp.service';
import { RegisterNewSchoolBody } from './dto/register-new-school.dto';
import { SchoolUserService } from 'src/common/services/school-user.service';

@Controller('/school/auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly globalOTPService: GlobalOTPService,
    private readonly schoolUserService: SchoolUserService,
  ) {}

  @Post('/generate-otp')
  @ApiResponse({
    status: 201,
    description: 'The OTP code has been successfully created.',
  })
  async generateOTP(@Body() body: GenerateOTPBody) {
    const otp = await this.globalOTPService.create(body.emailOrPhoneNumber);
    return otp;
  }

  @Post('/register')
  @ApiResponse({
    status: 201,
    description: 'The OTP code has been successfully created.',
  })
  async registerNewSchool(@Body() body: RegisterNewSchoolBody) {
    const { firstName, lastName, email, phoneNumber, password } = body;

    return await this.schoolUserService.createSchoolUser(
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    );
  }
}
