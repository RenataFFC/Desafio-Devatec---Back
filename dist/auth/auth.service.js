"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const messages_helper_1 = require("./../user/helpers/messages.helper");
const messages_helper_2 = require("./helpers/messages.helper");
let AuthService = AuthService_1 = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async login(dto) {
        this.logger.debug('login - started');
        const user = await this.userService.getUserByLoginPassword(dto.login, dto.password);
        if (user == null) {
            throw new common_1.BadRequestException(messages_helper_2.MessagesHelper.AUTH_PASSWORD_OR_LOGIN_NOT_FOUND);
        }
        const tokenPayload = { email: user.email, sub: user._id };
        return {
            email: user.email,
            name: user.name,
            token: this.jwtService.sign(tokenPayload, { secret: process.env.USER_JWT_SECRET_KEY })
        };
    }
    async register(dto) {
        this.logger.debug('register - started');
        if (await this.userService.existsByEmail(dto.email)) {
            throw new common_1.BadRequestException(messages_helper_1.UserMessagesHelper.REGISTER_EXIST_EMAIL_ACCOUNT);
        }
        await this.userService.create(dto);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map