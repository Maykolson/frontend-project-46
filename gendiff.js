#!/usr/bin/env node

import { program } from 'commander';

program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-h, --help', 'output the version number')
    .option('-v, --version', 'output usage information')

program.parse(process.argv);