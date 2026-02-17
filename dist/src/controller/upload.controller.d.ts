import { UploadService } from "src/service/upload.service";
import { WhisperOptionsDto } from "src/dto/whisper-options.dto";
import { type Response } from "express";
export declare class UploadController {
    private uploadService;
    constructor(uploadService: UploadService);
    create(req: Request, res: Response, file: Express.Multer.File, dto: WhisperOptionsDto): Promise<void>;
}
