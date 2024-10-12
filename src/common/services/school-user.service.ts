import { Injectable } from '@nestjs/common';
import { GlobalUserService } from './user.service';

@Injectable()
export class SchoolUserService extends GlobalUserService {
  async createSchoolUser(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
  ) {
    return await this.create(
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      'SCHOOL',
    );
  }
}
