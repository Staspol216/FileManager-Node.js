import { createReadStream } from 'node:fs'
import { stdout } from 'node:process';
import path from 'node:path';

export const cat = async (args) => {
    const fileName = args[0];
    const src = path.join(process.cwd(), fileName);
    const readableStream = createReadStream(src, 'utf-8')
    readableStream.on('data', (chunk) => stdout.write(chunk))
}