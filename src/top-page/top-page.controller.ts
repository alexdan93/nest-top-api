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
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
    constructor(private readonly configService: ConfigService) {
        //    empty
    }

    @Get('get/:alias')
    // temporary change argument of Promise to void
    async get(@Param('alias') alias: string): Promise<void> {
        const test = this.configService.get('TEST');
    }

    @Post('create')
    async create(@Body() dto: Omit<TopPageModel, '_id'>) {
        //  empty
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        //    empty
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
        //    empty
    }

    @HttpCode(200)
    @Post('find')
    async find(@Body() dto: FindTopPageDto) {
        //    empty
    }
}
