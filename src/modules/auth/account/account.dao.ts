import { PrismaService } from '@core/prisma';
import { DaoCore } from '@core/server';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TDelegateArgs, TDelegateReturnTypes } from '@shared/types';

type TAccountDelegate = Prisma.UserDelegate;
// export type TUserIncludes = Prisma.UserInclude

@Injectable()
export class AccountDao extends DaoCore<
  TAccountDelegate,
  TDelegateArgs<TAccountDelegate>,
  TDelegateReturnTypes<TAccountDelegate>
> {
  constructor(protected readonly prismaService: PrismaService) {
    super(prismaService.user);
  }
}
