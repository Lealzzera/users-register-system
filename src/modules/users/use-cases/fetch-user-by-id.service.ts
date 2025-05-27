import { Inject, Injectable } from '@nestjs/common';

export type FetchUserByIdServiceResponse = {
  user: {
    id: number;
    name: string;
    email: string;
  };
};

@Injectable()
export class FetchUserByIdService {
  constructor(@Inject('USERS_DB') private readonly usersDB: any[]) {}

  exec(id: number): FetchUserByIdServiceResponse {
    const user = this.usersDB.find((item) => item.id === id);
    return { user };
  }
}
