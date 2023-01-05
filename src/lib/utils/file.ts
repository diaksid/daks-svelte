import { promises as fsp, type PathLike } from 'fs';

export const makeDirectory = async (directoryPath: PathLike) => {
  await fsp
    .mkdir(directoryPath, { recursive: true })
    .then(() => console.log('Directory created successfully'))
    .catch(() => console.log('Failed to create directory'));
};
