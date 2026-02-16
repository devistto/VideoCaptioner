import { Injectable } from "@nestjs/common";
import { TranscodeService } from "./transcode.service";
import { readFile } from "fs/promises";

@Injectable()
export class TranscriptionService {
    constructor(private transcodeService: TranscodeService) { }

    async create(filePath: string) {
        const audioPath = await this.transcodeService.exec(filePath);

        const buffer = await readFile(audioPath);
        const blob = new Blob([buffer], { type: "audio/wav" });
        const formData = new FormData();

        formData.append("audio_file", blob, "audio.wav");

        const response = await fetch("http://localhost:9000/asr?output=srt", {
            method: "POST",
            body: formData,
        });

        const data = await response.text();
        return data
    }
}