import { promises as fs, constants } from 'fs';
import { resolve } from 'path';

export const rootpath = (...argumets: string[]) => resolve(process.cwd(), ...argumets);

export const mkdir = async (dir: string) =>
  await fs
    .mkdir(dir, { recursive: true })
    .catch(() => console.error('Failed to create directory', dir));

export const readFile = async (file: string, flag = 'r') =>
  await fs.readFile(file, { flag, encoding: 'utf-8' });

export const writeFile = async (file: string, data: string, flag = 'w') =>
  await fs
    .writeFile(file, data, { flag, encoding: 'utf-8' })
    .catch(() => console.error('Failed to write file', file));

export const access = async (file: string, callback?: () => void) =>
  await fs
    .access(file, constants.F_OK)
    .catch(callback);

export const copyFile = async (src: string, dest: string) =>
  await fs
    .copyFile(src, dest)
    .catch(() => console.error('Failed to copy file', src));
