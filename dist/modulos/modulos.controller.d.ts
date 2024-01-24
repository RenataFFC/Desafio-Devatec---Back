/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ModulosDto } from './dtos/modulos.dto';
import { ModulosService } from './modulos.service';
import { UpdateModulosDto } from './dtos/updatemodulos.dto';
export declare class ModulosController {
    private readonly modulosService;
    constructor(modulosService: ModulosService);
    register(dto: ModulosDto, files: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/modulos.schema").Modulos> & import("./schemas/modulos.schema").Modulos & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/modulos.schema").Modulos> & import("./schemas/modulos.schema").Modulos & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(moduloId: string, dto: UpdateModulosDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/modulos.schema").Modulos> & import("./schemas/modulos.schema").Modulos & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/modulos.schema").Modulos> & import("./schemas/modulos.schema").Modulos & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(moduloId: string): Promise<void>;
    listarTodosModulos(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/modulos.schema").Modulos> & import("./schemas/modulos.schema").Modulos & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
