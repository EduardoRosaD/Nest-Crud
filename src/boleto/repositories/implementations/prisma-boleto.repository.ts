import { Boleto } from "@prisma/client";
import { CreateBoletoDTO } from "../../dto/boleto";
import { BoletoRepository } from "../boleto.repository";
import { PrismaService } from "../../../prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaBoletoRepository implements BoletoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateBoletoDTO): Promise<Boleto> {
        return this.prisma.boleto.create({ data });
    }

    async findAll(): Promise<Boleto[]> {
        return this.prisma.boleto.findMany();
    }

    async findOne(id: number): Promise<Boleto | null> {
        return this.prisma.boleto.findUnique({ where: { id } });
    }

    async update(id: number, data: CreateBoletoDTO): Promise<Boleto> {
        return this.prisma.boleto.update({ where: { id }, data });
    }

    async delete(id: number): Promise<Boleto> {
        return this.prisma.boleto.delete({ where: { id } });
    }
}
