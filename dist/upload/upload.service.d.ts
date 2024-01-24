/// <reference types="multer" />
export declare class UploadService {
    private s3;
    constructor();
    salvar(file: Express.Multer.File, folder: string): Promise<{
        fileUrl: any;
    }>;
}
