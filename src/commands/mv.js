import { createReadStream, createWriteStream } from "node:fs";
import { rm } from "node:fs/promises";
import path from 'node:path';


export const mv = async (args) => {
    const srcName = args[0];
    const destName = args[1];
    const srcPath = path.join(process.cwd(), srcName);
    const destPath = path.join(process.cwd(), destName);

    const readableStream = createReadStream(srcPath, 'utf-8');
    const writableStream = createWriteStream(destPath);
    
    readableStream.pipe(writableStream);

    await rm(srcPath)
}