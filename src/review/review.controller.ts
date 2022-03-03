import {
    Body,
    Controller,
    Delete,
    Param,
    Patch,
    Post,
    Get,
} from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
    @Post('create')
    async create(@Body() dto: Omit<ReviewModel, '_id'>) {
        //  empty
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        //    empty
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: ReviewModel) {
        //    empty
    }

    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {
        //    empty
    }
}
