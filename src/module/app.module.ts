import { Module } from "@nestjs/common";
import { TranscodeService } from "../service/transcode.service";
import { UploadController } from "../controller/upload.controller";
import { UploadService } from "../service/upload.service";
import { RateLimitModule } from "./rate-limit.module";

@Module({
    imports: [RateLimitModule],
    controllers: [UploadController],
    providers: [UploadService, TranscodeService]
})
export class AppModule { }