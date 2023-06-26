import { stdout } from 'node:process';
import * as Operation from './commands/index.js';

const COMMANDS_LIST = {
    UP: 'up',
    CD: 'cd',
    LS: 'ls',
    CAT: 'cat',
    ADD: 'add',
    RN: 'rn',
    CP: 'cp',
    MV: 'mv',
    RM: 'rm',
    OS: 'os',
    HASH: 'hash',
    COMPRESS: 'compress',
    DECOMPRESS: 'decompress',
}

export class CommandRouter {

    handleCommandLine(input) {
        
        const splittedInput = input.split(' ');
        const command = splittedInput[0];
        const commandArgs = splittedInput.slice(1);

        switch (command) {
            case COMMANDS_LIST.UP:
                Operation.up();
                break;
            case COMMANDS_LIST.LS:
                Operation.ls();
                break;
            case COMMANDS_LIST.CD:
                Operation.cd(commandArgs);
                break;
            case COMMANDS_LIST.CAT:
                Operation.cat(commandArgs);
                break;
            case COMMANDS_LIST.ADD:
                Operation.add(commandArgs);
                break;
            case COMMANDS_LIST.RN:
                Operation.rn(commandArgs);
                break;
            case COMMANDS_LIST.CP:
                Operation.cp(commandArgs);
                break;
            case COMMANDS_LIST.MV:
                Operation.mv(commandArgs);
                break;
            case COMMANDS_LIST.RM:
                Operation.rm(commandArgs);
                break;
            case COMMANDS_LIST.COMPRESS:
                Operation.compress(commandArgs);
                break;
            case COMMANDS_LIST.DECOMPRESS:
                Operation.decompress(commandArgs);
                break;
            case COMMANDS_LIST.HASH:
                Operation.hash(commandArgs);
                break;
            case COMMANDS_LIST.OS:
                Operation.os(commandArgs);
                break;
            default:
                stdout.write('Invalid input\n')
        }
    }
}