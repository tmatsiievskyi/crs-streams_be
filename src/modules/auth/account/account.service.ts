import { PrismaService } from '@core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  constructor(private readonly prismaService: PrismaService) {} //TODO: create dao

  public async findAll() {
    const users = await this.prismaService.user.findMany({});

    return users;
  }
}
