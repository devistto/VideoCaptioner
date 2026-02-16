import { TranscriptionService } from "src/service/transcription.service";
export declare class TranscriptionController {
    private transcriptionService;
    constructor(transcriptionService: TranscriptionService);
    create(req: Request, file: Express.Multer.File): Promise<string>;
}
