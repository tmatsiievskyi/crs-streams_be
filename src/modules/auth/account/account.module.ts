import { Module } from '@nestjs/common';

import { AccountDao } from './account.dao';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  providers: [AccountResolver, AccountService, AccountDao],
})
export class AccountModule {}
