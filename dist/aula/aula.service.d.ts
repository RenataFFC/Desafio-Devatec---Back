import { Model } from 'mongoose';
import { AulaDto } from './dtos/aula.dto';
import { AulaDocument } from './schemas/aula.schema';
import { UpdateAulaDto } from './dtos/updateaula.dto';
import { UploadService } from './../upload/upload.service';
export declare class AulaService {
    private readonly aulaModel;
    private readonly uploadService;
    private logger;
    constructor(aulaModel: Model<AulaDocument>, uploadService: UploadService);
    criarAula(dto: AulaDto): Promise<AulaDocument>;
    editarAula(aulaId: string, dto: UpdateAulaDto): Promise<void>;
    excluirAula(id: string): Promise<void>;
    listarTodasAulas(): Promise<AulaDocument[]>;
}
