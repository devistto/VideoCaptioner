import { TranscodeService } from "./transcode.service";
export declare class TranscriptionService {
    private transcodeService;
    constructor(transcodeService: TranscodeService);
    create(filePath: string): Promise<string>;
}
