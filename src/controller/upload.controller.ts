import { BadRequestException, Body, Controller, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { multerOptions } from "src/utils/multer-options";
import { FileInterceptor } from "@nestjs/platform-express"
import { UploadService } from "src/service/upload.service";
import { WhisperOptionsDto } from "src/dto/whisper-options.dto";
import { type Response } from "express";
import { fileCleaner } from "src/utils/file-cleaner";

@Controller("upload")
export class UploadController {
    constructor(private uploadService: UploadService) { }

    @Post("transcriptions")
    @UseInterceptors(FileInterceptor('video', multerOptions))
    async create(
        @Req() req: Request,
        @Res() res: Response,
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: WhisperOptionsDto
    ) {
        if (!file) throw new BadRequestException("File is missing");

        const videoPath = await this.uploadService.create(file.path, dto);

        res.sendFile(videoPath, (err) => {
            if (err) console.error(err);
            fileCleaner(videoPath)
        });
    }
}