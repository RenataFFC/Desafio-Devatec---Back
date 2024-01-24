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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaController = void 0;
const common_1 = require("@nestjs/common");
const ispublic_decorator_1 = require("../auth/decorators/ispublic.decorator");
const aula_dto_1 = require("./dtos/aula.dto");
const aula_service_1 = require("./aula.service");
const updateaula_dto_1 = require("./dtos/updateaula.dto");
const platform_express_1 = require("@nestjs/platform-express");
let AulaController = class AulaController {
    constructor(aulaService) {
        this.aulaService = aulaService;
    }
    async criarAula(dto, videoFile) {
        dto.video = videoFile;
        return this.aulaService.criarAula(dto);
    }
    async update(aulaId, dto) {
        return this.aulaService.editarAula(aulaId, dto);
    }
    async remove(aulaId) {
        return this.aulaService.excluirAula(aulaId);
    }
    async listarTodasAulas() {
        return this.aulaService.listarTodasAulas();
    }
};
exports.AulaController = AulaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, ispublic_decorator_1.IsPublic)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('video')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aula_dto_1.AulaDto, Object]),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "criarAula", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateaula_dto_1.UpdateAulaDto]),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('listar'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "listarTodasAulas", null);
exports.AulaController = AulaController = __decorate([
    (0, common_1.Controller)('aula'),
    __metadata("design:paramtypes", [aula_service_1.AulaService])
], AulaController);
//# sourceMappingURL=aula.controller.js.map