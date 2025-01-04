import { RedisService } from '@core/redis/redis.service';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { parseStringWithBoolean } from '@shared/utils';
import { RedisStore } from 'connect-redis';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import ms from 'ms';

import { CoreModule } from './core/core.module';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);

  const config = app.get(ConfigService);
  const redis = app.get(RedisService);

  app.use(cookieParser(config.getOrThrow<string>('COOKIES_SECRET')));

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(
    session({
      secret: config.getOrThrow('SESSION_SECRET'),
      name: config.getOrThrow('SESSION_NAME'),
      resave: false,
      saveUninitialized: false,
      cookie: {
        domain: config.getOrThrow('SESSION_DOMAIN'),
        maxAge: Number(ms(config.getOrThrow('SESSION_MAX_AGE'))),
        httpOnly: parseStringWithBoolean(
          config.getOrThrow('SESSION_HTTP_ONLY'),
        ),
        secure: parseStringWithBoolean(config.getOrThrow('SESSION_SECURE')),
        sameSite: 'lax',
      },
      store: new RedisStore({
        client: redis,
        prefix: config.getOrThrow('SESSION_FOLDER'),
      }),
    }),
  );

  app.enableCors({
    origin: config.getOrThrow('ALLOWED_ORIGIN'),
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  await app.listen(config.getOrThrow('APP_PORT'));
}
bootstrap();
