import * as path from "path"
import { readdir } from 'fs/promises';

class FileService {
    saveFile(file)
    {
        try {
            const fileName = path.basename(file.name, path.extname(file.name))
            const filePath = path.resolve("stories", fileName)
            file.mv(filePath)
            return file.name;
        } catch (error) {
            console.log(error)
        }
    }
    
    async getFiles()
    {
        try {
            const files = await readdir("stories");
            const fileNames = []
            for (const file of files) fileNames.push(path.basename(file, path.extname(file)));
            return fileNames
        } catch (err) {
            console.error(err);
        }
    }
}

export default new FileService()