import * as path from 'path';

const args = process.argv;

if (args.length !== 1) {
    console.error('Usage: cli.js FILE');
    process.exit(-1);
}

