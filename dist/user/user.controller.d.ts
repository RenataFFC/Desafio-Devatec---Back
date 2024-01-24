import { UserService } from 'src/user/user.service';
import { UpdateUserDto } from './dtos/updateuser.dto';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    getUser(req: any): Promise<{
        name: string;
        email: string;
        id: string;
    }>;
    updateUser(req: any, dto: UpdateUserDto): Promise<void>;
}
