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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAulaDto = void 0;
const class_validator_1 = require("class-validator");
const messages_helper_1 = require("../helpers/messages.helper");
class UpdateAulaDto {
}
exports.UpdateAulaDto = UpdateAulaDto;
__decorate([
    (0, class_validator_1.MinLength)(2, { message: messages_helper_1.AulaMessagesHelper.AULA_NAME_NOT_VALID }),
    __metadata("design:type", String)
], UpdateAulaDto.prototype, "name_aula", void 0);
__decorate([
    (0, class_validator_1.MinLength)(2, { message: messages_helper_1.AulaMessagesHelper.AULA_DESCRICAO_NOT_VALID }),
    __metadata("design:type", String)
], UpdateAulaDto.prototype, "descricao_aula", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({}, { message: messages_helper_1.AulaMessagesHelper.AULA_URL_VIDEO_NOT_VALID }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAulaDto.prototype, "url_video", void 0);
//# sourceMappingURL=updateaula.dto.js.map