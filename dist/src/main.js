"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./module/app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const validationOptionsObj = {
        whitelist: true,
        transform: true,
        stopAtFirstError: true
    };
    const config = new swagger_1.DocumentBuilder()
        .setTitle('AutoCaption API')
        .setDescription(`
    API for automatic video captioning.

    after reveiving a video file, its audio is transcribes using Whisper, generates subtitles,
    embeds them into the video, and returns the processed MP4 file.
    All processing is done in a Dockerized environment with automatic cleanup.
`).setVersion('1.0')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('doc', app, documentFactory);
    app.useGlobalPipes(new common_1.ValidationPipe(validationOptionsObj));
    await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map