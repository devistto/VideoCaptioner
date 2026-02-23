import { Injectable } from "@nestjs/common";
import { TranscodeService } from "./transcode.service";
import { readFile } from "fs/promises";
import { type IWhisperOptions } from "src/interface/Iwhisper-options";

@Injectable()
export class VideoService {
    constructor(private transcodeService: TranscodeService) { }

    async create(filePath: string, options: IWhisperOptions) {
        await this.transcodeService.validate(filePath);
        const audioPath = await this.transcodeService.extract(filePath);

        const buffer = await readFile(audioPath);
        const blob = new Blob([buffer], { type: "audio/wav" });
        const formData = new FormData();

        formData.append("audio_file", blob, "audio.wav");

        const baseUrl = "http://whisper-asr:9000/asr?";
        const queryParams = `task=${options.task}&language=${options.audio_language}&output=srt`;
        const url = baseUrl + queryParams

        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const content = await response.text();
        const videoPath = await this.transcodeService.burn(filePath, content) as string;

        return videoPath
    }
}