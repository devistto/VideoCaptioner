import { TranscodeService } from "./transcode.service";
import { type IWhisperOptions } from "src/interface/Iwhisper-options";
export declare class VideoService {
    private transcodeService;
    constructor(transcodeService: TranscodeService);
    create(filePath: string, options: IWhisperOptions): Promise<string>;
}
