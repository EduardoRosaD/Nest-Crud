import { Module } from '@nestjs/common';
import { BoletoController } from './boleto.controller';
import { BoletoService } from './boleto.service';
import { BoletoRepository } from './repositories/boleto.repository';
import { PrismaBoletoRepository } from './repositories/implementations/prisma-boleto.repository';


@Module({
  controllers: [BoletoController],
  providers: [
    BoletoService,
    {
      provide: BoletoRepository,
      useClass: PrismaBoletoRepository
    },
  ],
  exports: [
    BoletoService,
    {
      provide: BoletoRepository,
      useClass: PrismaBoletoRepository
    },
  ],
})
export class BoletoModule {}
