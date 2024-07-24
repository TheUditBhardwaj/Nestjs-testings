import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        email: string;
        firstname: string;
        lastname: string;
    }>;
    signin(dto: AuthDto): Promise<string>;
}
