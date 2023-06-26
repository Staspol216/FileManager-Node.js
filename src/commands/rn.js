import { rename } from "node:fs/promises";
import path from 'node:path';

export const rn = async (args) => {
    const oldName = args[0];
    const newName = args[1];
    const oldPath = path.join(process.cwd(), oldName);
    const newPath = path.join(process.cwd(), newName);
    await rename(oldPath, newPath);
}