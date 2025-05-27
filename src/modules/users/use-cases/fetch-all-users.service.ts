import { Inject, Injectable } from '@nestjs/common';

export type FetchAllUsersServiceResponse = {
  users: any[];
};

@Injectable()
export class FetchAllUsersService {
  constructor(@Inject('USERS_DB') private readonly usersDB: any[]) {}

  exec(): FetchAllUsersServiceResponse {
    return { users: this.usersDB };
  }
}
