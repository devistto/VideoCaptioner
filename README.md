# Video Captioner
___
A self-hosted HTTP API for video captioning.
> Upload → Validate → Extract Audio → Generate Subtitles → Render Final Video 

[Click here](http://example.com) to try an available online version.

### Technologies
___
- TypeScript
- Docker & Docker compose
- Nestjs
- FFmpeg & FFprobe
- Whisper (ASR engine)

### Quick usage
___
Prerequisite: Docker installed and running.
```
git clone https://github.com/devistto/VideoCaptioner && \
cd AutoCaption-api && \
docker compose up --build
```

Swagger documentation [http://localhost:8000/doc](http://localhost:8000/doc)

### Environment variables
___
- `ASR_ENGINE`: Engine selection (openai_whisper, faster_whisper, whisperx)
- `ASR_MODEL`: Model selection (tiny, base, small, medium, large-v3, etc.)
- `ASR_MODEL_PATH`: Custom path to store/load models
- `ASR_DEVICE`: Device selection (cuda, cpu)
- `MODEL_IDLE_TIMEOUT`: Timeout for model unloading