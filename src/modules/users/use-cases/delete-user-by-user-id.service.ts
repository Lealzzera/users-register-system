import { Inject, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DeleteUserByUserIdService {
  constructor(@Inject('USERS_DB') private readonly usersDB: any[]) {}

  exec(id: number) {
    const userIndex = this.usersDB.findIndex((item) => item.id === id);
    if (userIndex < 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.usersDB.splice(userIndex, 1);
  }
}
