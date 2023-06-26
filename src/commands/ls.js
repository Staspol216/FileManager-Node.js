import { readdir } from 'node:fs/promises'

export const ls = async () => {
    const cwd = process.cwd();
    const files = await readdir(cwd, { withFileTypes: true, encoding: 'utf-8' });
    const filesWithType = files.map(file => {
        const type = file.isDirectory() ? 'directory' : 'file';
        return {
            name: file.name,
            type,
        }
    })
    console.table(filesWithType);
}