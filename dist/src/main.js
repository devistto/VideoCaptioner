"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const validationOptionsObj = {
        whitelist: true,
        transform: true,
        stopAtFirstError: true
    };
    app.useGlobalPipes(new common_1.ValidationPipe(validationOptionsObj));
    await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map