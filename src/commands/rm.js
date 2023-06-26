import { rm as remove } from "node:fs/promises";
import path from 'node:path';

export const rm = (args) => {
    const fileName = args[0];
    const src = path.join(process.cwd(), fileName);
    remove(src)
}