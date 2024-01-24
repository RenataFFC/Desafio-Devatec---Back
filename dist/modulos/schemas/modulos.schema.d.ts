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
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
import { Aula } from 'src/aula/schemas/aula.schema';
export type ModulosDocument = HydratedDocument<Modulos>;
export declare class Modulos {
    titulo: string;
    image_modulo: string;
    aulas: Aula[];
}
export declare const ModulosSchema: import("mongoose").Schema<Modulos, import("mongoose").Model<Modulos, any, any, any, import("mongoose").Document<unknown, any, Modulos> & Modulos & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Modulos, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Modulos>> & import("mongoose").FlatRecord<Modulos> & {
    _id: import("mongoose").Types.ObjectId;
}>;
