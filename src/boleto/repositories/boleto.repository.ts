import { Boleto } from "@prisma/client";
import { CreateBoletoDTO } from "../dto/boleto";


export abstract class BoletoRepository {
    abstract create(data: CreateBoletoDTO): Promise<Boleto>;
    abstract findAll(): Promise<Boleto[]>;
    abstract findOne(id: number): Promise<Boleto | null>;
    abstract update(id: number, data: CreateBoletoDTO): Promise<Boleto>;
    abstract delete(id: number): Promise<Boleto>;
}