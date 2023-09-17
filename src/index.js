import path from 'path';
import fs from 'fs';
import genDiffs from './genDiff.js';
import format from './formatters/index.js';
import parseData from './parser.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath).trim();
const readFile = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');
const getFormat = (filepath) => path.extname(filepath).slice(1);

const generateDiffs = (path1, path2, formatName = 'stylish') => {
  const pathContent1 = readFile(path1);
  const pathContent2 = readFile(path2);
  const data1 = parseData(pathContent1, getFormat(path1));
  const data2 = parseData(pathContent2, getFormat(path2));
  const comaparePaths = genDiffs(data1, data2);
  return format(comaparePaths, formatName);
};
export default generateDiffs;
