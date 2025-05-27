import { Inject, Injectable } from '@nestjs/common';

export type RegisterServiceRequest = {
  name: string;
  email: string;
};

@Injectable()
export class RegisterService {
  constructor(@Inject('USERS_DB') private readonly usersDB: any[]) {}

  exec({ name, email }: RegisterServiceRequest) {
    this.usersDB.push({
      id: this.usersDB.length + 1,
      name,
      email,
    });
  }
}
