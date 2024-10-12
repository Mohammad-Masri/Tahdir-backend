import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserTypesType } from 'src/config/constants';
import { User } from 'src/schemas/user';
import { BcryptUtils, StringUtils } from '../utils';

@Injectable()
export class GlobalUserService {
  constructor(@InjectModel(User.name) protected userModel: Model<User>) {}

  protected async create(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    type: UserTypesType,
  ) {
    [password, email, phoneNumber] = await Promise.all([
      BcryptUtils.hashPassword(password),
      StringUtils.normalizeString(email),
      StringUtils.normalizeString(phoneNumber),
    ]);

    const user = await this.userModel.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      type,
    });

    return await user.save();
  }
}
