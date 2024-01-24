"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaModule = void 0;
const common_1 = require("@nestjs/common");
const aula_service_1 = require("./aula.service");
const aula_controller_1 = require("./aula.controller");
const mongoose_1 = require("@nestjs/mongoose");
const aula_schema_1 = require("./schemas/aula.schema");
const upload_service_1 = require("../upload/upload.service");
let AulaModule = class AulaModule {
};
exports.AulaModule = AulaModule;
exports.AulaModule = AulaModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Aula', schema: aula_schema_1.AulaSchema }])],
        providers: [aula_service_1.AulaService, upload_service_1.UploadService],
        controllers: [aula_controller_1.AulaController],
        exports: [mongoose_1.MongooseModule, aula_service_1.AulaService]
    })
], AulaModule);
//# sourceMappingURL=aula.module.js.map