import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findUserByid(id: number): Promise<boolean> {
    const user = await this.usersRepository.findOne({ where: { id } });
    return !!user;
  }
}
