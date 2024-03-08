import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
  /*
  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
*/

  @Patch()
  editUser(@GetUser('id') user: User, @Body() dto: EditUserDto) {
    return this.userService.editUser(user.id, dto);
  }

  /*
  @Patch(':id')
  editUser(
    @GetUser('id', ParseIntPipe) userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }
  
  @Patch(':id')
  async editUser(@Param('id') id: string, @Body() dto: EditUserDto) {
    // Verificar si 'id' es un número entero válido
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new Error('El ID del usuario debe ser un número entero válido.');
    }
    try {
      // Llamar a la función editUser en UserService
      return await this.userService.editUser(userId, dto);
    } catch (error) {
      throw new BadRequestException(error.message); // Lanza un error 400 Bad Request con el mensaje de error específico
    }
  }
*/
}
