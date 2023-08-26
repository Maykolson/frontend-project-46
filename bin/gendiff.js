#!/usr/bin/env node

import { Command } from 'commander';
import generateDiffs from '../src/index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(generateDiffs(filepath1, filepath2, program.opts().format));
  })
  .parse(process.argv);