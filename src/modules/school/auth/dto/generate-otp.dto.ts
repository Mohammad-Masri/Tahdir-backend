import { ApiProperty } from '@nestjs/swagger';

export class GenerateOTPBody {
  @ApiProperty()
  emailOrPhoneNumber: string;
}
