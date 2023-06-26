import { createReadStream, createWriteStream } from "node:fs";
import path from 'node:path';

export const cp = async (args) => {
    const srcName = args[0];
    const destName = args[1];
    const srcPath = path.join(process.cwd(), srcName);
    const destPath = path.join(process.cwd(), destName);

    const readableStream = createReadStream(srcPath, 'utf-8');
    const writableStream = createWriteStream(destPath);
    
    readableStream.pipe(writableStream);
}