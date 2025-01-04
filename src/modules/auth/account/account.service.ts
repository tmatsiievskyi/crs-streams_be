import { PrismaService } from '@core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { AccountDao } from './account.dao';

@Injectable()
export class AccountService {
  constructor(private readonly accountDao: AccountDao) {}

  public async findAll() {
    const users = await this.accountDao.findMany({});

    return users;
  }
}
