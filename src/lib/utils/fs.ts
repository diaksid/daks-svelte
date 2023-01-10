import { promises as fs, constants } from 'fs';
import { resolve } from 'path';

export const path = (path: string) => resolve(process.cwd(), path);

export const mkdir = async (dir: string) => await fs.mkdir(path(dir), { recursive: true });
// .then(() => console.debug('Directory created successfully', path))
// .catch(() => console.error('Failed to create directory', path));

export const readFile = async (file: string, flag = 'r') =>
  await fs.readFile(path(file), { flag, encoding: 'utf-8' });
// .then(() => console.debug('Read file successfully', path))
// .catch(() => console.error('Failed to read file', path));

export const writeFile = async (file: string, data: string, flag = 'w') =>
  await fs.writeFile(path(file), data, { flag, encoding: 'utf-8' });
// .then(() => console.debug('Write file successfully', path))
// .catch(() => console.error('Failed to write file', path));

export const access = async (file: string, data: string) => {
  await fs
    .access(path(file), constants.F_OK)
    .catch(async () => await writeFile(path(file), data, 'w+'));
};
