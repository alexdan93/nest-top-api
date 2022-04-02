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

@Controller('top-page')
export class TopPageController {
    @Get('get/:id')
    // temporary change argument of Promise to void
    async get(@Param('id') id: string): Promise<void> {
        // empty
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
