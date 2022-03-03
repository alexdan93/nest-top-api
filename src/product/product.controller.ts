import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    HttpCode,
} from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {
        //  empty
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        //    empty
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        //    empty
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: ProductModel) {
        //    empty
    }

    @HttpCode(200)
    @Post('find')
    async find(@Body() dto: FindProductDto) {
        //    empty
    }
}
