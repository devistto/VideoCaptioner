import "dotenv/config"
import { NestFactory } from '@nestjs/core';
import { AppModule } from "./module/app.module"
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const validationOptionsObj = {
    whitelist: true,
    transform: true,
    stopAtFirstError: true
  }

  const config = new DocumentBuilder()
    .setTitle('AutoCaption API')
    .setDescription(`
    API for automatic video captioning.

    after reveiving a video file, its audio is transcribes using Whisper, generates subtitles,
    embeds them into the video, and returns the processed MP4 file.
    All processing is done in a Dockerized environment with automatic cleanup.
`).setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe(validationOptionsObj))

  await app.listen(process.env.PORT ?? 8000, () => console.log("Swegger UI on http://localhost:8000/doc"));
}
bootstrap();
