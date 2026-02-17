import path from "node:path"
import fs from "node:fs"

export const fileCleaner = (filePath: string) => {
    const baseFolder = path.dirname(filePath);
    fs.rm(baseFolder, { recursive: true, force: true }, (err) => {
        if(err) console.log(err)
    });
}