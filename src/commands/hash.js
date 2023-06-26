import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises';
import path from 'path';

export const hash = async (args) => {
    const fileName = args[0];
    const src = path.join(process.cwd(), fileName);
    
    const content = await readFile(src, 'utf-8');
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
};