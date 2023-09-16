import { Injectable } from '@nestjs/common';
import { CreateBoletoDTO } from './dto/boleto';
import { BoletoRepository } from './repositories/boleto.repository';


@Injectable()
export class BoletoService {
    constructor(private readonly boletoRepository: BoletoRepository) {}

        async create(data: CreateBoletoDTO) {
            return this.boletoRepository.create(data);
        }

        async findAll() {
            return this.boletoRepository.findAll();
        }

        async findOne(id: number) {
            return this.boletoRepository.findOne(id);
        }

        async update(id: number, data: CreateBoletoDTO) {
            return this.boletoRepository.update(id, data);
        }

        async delete(id: number) {
            return this.boletoRepository.delete(id);
        }

}
