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
var AulaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const upload_service_1 = require("./../upload/upload.service");
let AulaService = AulaService_1 = class AulaService {
    constructor(aulaModel, uploadService) {
        this.aulaModel = aulaModel;
        this.uploadService = uploadService;
        this.logger = new common_1.Logger(AulaService_1.name);
    }
    async criarAula(dto) {
        try {
            this.logger.debug('criarAula - started');
            const uploadResult = await this.uploadService.salvar(dto.video, 'video');
            const novaAula = new this.aulaModel({
                name_aula: dto.name_aula,
                descricao_aula: dto.descricao_aula,
                url_video: uploadResult.fileUrl,
            });
            const aulaSalva = await novaAula.save();
            this.logger.debug('criarAula - salvo com sucesso!');
            return aulaSalva;
        }
        catch (error) {
            this.logger.error(`Error creating Aula: ${error.message}`);
            throw error;
        }
    }
    async editarAula(aulaId, dto) {
        try {
            this.logger.debug('editarAula - started');
            const aulaExistente = await this.aulaModel.findById(aulaId).exec();
            if (!aulaExistente) {
                throw new common_1.NotFoundException(`Aula com ID ${aulaId} não encontrada`);
            }
            aulaExistente.set(dto);
            await aulaExistente.save();
            this.logger.debug('editarAula - saved successfully');
        }
        catch (error) {
            this.logger.error(`Erro ao editar no banco de dados: ${error.message}`);
            throw error;
        }
    }
    async excluirAula(id) {
        try {
            this.logger.debug(`excluirAula - started for ID: ${id}`);
            const aulaExcluida = await this.aulaModel.findByIdAndDelete(id);
            if (!aulaExcluida) {
                throw new common_1.NotFoundException('Aula não encontrada');
            }
            this.logger.debug(`excluirAula - deleted successfully for ID: ${id}`);
        }
        catch (error) {
            this.logger.error(`Error deleting Aula: ${error.message}`);
            throw error;
        }
    }
    async listarTodasAulas() {
        try {
            this.logger.debug('listarTodasAulas - started');
            const todasAulas = await this.aulaModel.find().exec();
            this.logger.debug('listarTodasAulas - retrieved successfully');
            return todasAulas;
        }
        catch (error) {
            this.logger.error(`Error retrieving Aulas: ${error.message}`);
            throw error;
        }
    }
};
exports.AulaService = AulaService;
exports.AulaService = AulaService = AulaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Aula')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        upload_service_1.UploadService])
], AulaService);
//# sourceMappingURL=aula.service.js.map