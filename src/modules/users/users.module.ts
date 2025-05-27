import { Module } from '@nestjs/common';
import { usersDB } from './user.repository';
import { UsersController } from './users.controller';
import { RegisterService } from './use-cases/resgister.service';
import { FetchAllUsersService } from './use-cases/fetch-all-users.service';
import { DeleteUserByUserIdService } from './use-cases/delete-user-by-user-id.service';
import { FetchUserByIdService } from './use-cases/fetch-user-by-id.service';

@Module({
  providers: [
    { provide: 'USERS_DB', useValue: usersDB },
    RegisterService,
    FetchAllUsersService,
    FetchUserByIdService,
    DeleteUserByUserIdService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
