import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    async register(@Body() dto: AuthDto) {
        // empty comment
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {
        // empty comment
    }
}
