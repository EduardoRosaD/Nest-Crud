import { Controller } from '@nestjs/common';
import { BoletoService } from './boleto.service';
import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('boleto')
export class BoletoController {
    constructor(private  boletoService: BoletoService) {}

    @Post()
    create(@Body() createBoletoDTO) {
        return this.boletoService.create(createBoletoDTO);
    }

    @Get()
    findAll() {
        return this.boletoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.boletoService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateBoletoDTO) {
        return this.boletoService.update(+id, updateBoletoDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.boletoService.delete(+id);
    }
}
