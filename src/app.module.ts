import { Module } from '@nestjs/common';
import { BoletoModule } from './boleto/boleto.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [BoletoModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
