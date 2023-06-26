import { mkdir } from "node:fs/promises";
import path from 'node:path';

export const add = async (args) => {
    const directoryName = args[0];
    const directoryPath = path.join(process.cwd(), directoryName);
    await mkdir(directoryPath);
}