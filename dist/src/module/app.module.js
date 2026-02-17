"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const transcode_service_1 = require("../service/transcode.service");
const upload_controller_1 = require("../controller/upload.controller");
const upload_service_1 = require("../service/upload.service");
const rate_limit_module_1 = require("./rate-limit.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [rate_limit_module_1.RateLimitModule],
        controllers: [upload_controller_1.UploadController],
        providers: [upload_service_1.UploadService, transcode_service_1.TranscodeService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map