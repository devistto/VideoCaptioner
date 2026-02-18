import { StreamableFile } from "@nestjs/common";
import { VideoService } from "src/service/video.service";
import { WhisperOptionsDto } from "src/dto/whisper-options.dto";
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    create(file: Express.Multer.File, dto: WhisperOptionsDto): Promise<StreamableFile>;
}
