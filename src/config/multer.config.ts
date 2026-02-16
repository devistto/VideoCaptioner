import { BadRequestException } from "@nestjs/common";
import { diskStorage } from "multer"
import path from "path";
import fs from "node:fs"
import { customAlphabet } from "nanoid"
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

export const multerConfig: MulterOptions = {
    storage: diskStorage({
        destination(req, file, callback) {
            const base = path.join(process.cwd(), "uploads");
            const fileFolder = customAlphabet("123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);
            const filePath = path.join(base, fileFolder());

            if (!fs.existsSync(filePath)) fs.mkdirSync(filePath, { recursive: true });
            return callback(null, filePath)
        },
        filename(req, file, callback) {
            return callback(null, file.originalname)
        },
    }),
    limits: {
        fileSize: 100 * 1024 * 1024
    },

    fileFilter(req, file, callback) {
        const mimetypes = ["video/mpeg", "video/mov", "video/mp4", "video/wmv",
            "audio/m4a", "audio/aac", "audio/wav", "audio/mp3", "audio/ogg", "audio/wma"]

        if (!mimetypes.includes(file.mimetype)) {
            return callback(new BadRequestException(`Acceptable mimetypes incluede ${mimetypes}`), false)
        };

        return callback(null, true)
    }
} 