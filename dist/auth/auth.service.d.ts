import { AuthDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: AuthDto): Promise<{
        email: string;
        firstname: string;
        lastname: string;
    }>;
    signin(dto: AuthDto): Promise<string>;
    signToken(userid: number, email: string): Promise<string>;
}
