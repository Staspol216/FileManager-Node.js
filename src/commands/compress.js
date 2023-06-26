import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'node:stream/promises';


export const compress = async (args) => {

    const srcName = args[0];
    const destName = args[1];

    const compressingFilePath = path.join(process.cwd(), srcName);
    const compressedFilePath = path.join(process.cwd(), destName);

    const readStream = createReadStream(compressingFilePath, 'utf-8');
    const writeStream = createWriteStream(compressedFilePath);
    const gzib = createGzip();
    
    await pipeline(
        readStream,
        gzib,
        writeStream
    )
};