import { Query, Resolver } from '@nestjs/graphql';

import { AccountService } from './account.service';
import { UserModel } from './models';

@Resolver('Account')
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => [UserModel], { name: 'findAllUsers' })
  public async findAll() {
    return this.accountService.findAll();
  }
}
