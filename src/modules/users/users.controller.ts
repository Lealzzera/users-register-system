import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { RegisterService } from './use-cases/resgister.service';
import { RegisterUserDTO } from './dto/register.dto';
import { FetchAllUsersService } from './use-cases/fetch-all-users.service';
import { DeleteUserByUserIdService } from './use-cases/delete-user-by-user-id.service';
import { FetchUserByIdService } from './use-cases/fetch-user-by-id.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly registerService: RegisterService,
    private readonly fetchAllUsersService: FetchAllUsersService,
    private readonly fetchUserByUserIdService: FetchUserByIdService,
    private readonly deleteUserByUserIdService: DeleteUserByUserIdService,
  ) {}

  @Post()
  @HttpCode(201)
  registerUser(@Body() { name, email }: RegisterUserDTO) {
    return this.registerService.exec({ email, name });
  }

  @Get()
  @HttpCode(200)
  fetchAllUsers() {
    return this.fetchAllUsersService.exec();
  }

  @Get('/:id')
  @HttpCode(200)
  fetchUserById(@Param('id') id: number) {
    const { user } = this.fetchUserByUserIdService.exec(id);
    return user;
  }

  @Delete('/:id')
  deleteUserById(@Param('id') id: number) {
    return this.deleteUserByUserIdService.exec(id);
  }
}
