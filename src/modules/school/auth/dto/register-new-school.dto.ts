import { ApiProperty } from '@nestjs/swagger';

export class RegisterNewSchoolBody {
  @ApiProperty()
  email: string;
  @ApiProperty()
  phoneNumber: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  password: string;
}
