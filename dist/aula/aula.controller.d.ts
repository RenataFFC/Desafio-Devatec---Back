/// <reference types="multer" />
import { AulaDto } from './dtos/aula.dto';
import { AulaService } from './aula.service';
import { UpdateAulaDto } from './dtos/updateaula.dto';
export declare class AulaController {
    private readonly aulaService;
    constructor(aulaService: AulaService);
    criarAula(dto: AulaDto, videoFile: Express.Multer.File): Promise<import("./schemas/aula.schema").AulaDocument>;
    update(aulaId: string, dto: UpdateAulaDto): Promise<void>;
    remove(aulaId: string): Promise<void>;
    listarTodasAulas(): Promise<import("./schemas/aula.schema").AulaDocument[]>;
}
