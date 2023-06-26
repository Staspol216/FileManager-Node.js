import { stdin as input, stdout as output, chdir } from 'node:process';
import { userInfo } from "node:os";
import * as readline from 'node:readline/promises';
import { CommandRouter } from './router.js';

const argPrefix = '--';

const getParsedArgs = (args) => {
    const formattedArgs = [];
    args.forEach(value => {
        if (!value.startsWith(argPrefix)) return
        const formattedValue = value.replace('--', '').split('=')
        formattedArgs.push(formattedValue);
    })
    return Object.fromEntries(formattedArgs);
}

const initErrorHandler = () => {
    process.on('uncaughtException', (err) => {
        output.write('Operation failed\n') 
    })
}

const startApp = async () => {
    const rl = readline.createInterface({ input, output });
    const { homedir } = userInfo();
    const args = process.argv.slice(2);
    const parsedArgs = getParsedArgs(args);
    const username = parsedArgs.username ?? 'Stranger';
    initErrorHandler();
    chdir(homedir);


    rl.write(`Welcome to the File Manager, ${username}!\n`);
    rl.write(`You are currently in ${process.cwd()}\n`);

    const router = new CommandRouter();
    
    rl.on('line', (input) => {
        router.handleCommandLine(input);
        output.write(`You are currently in ${process.cwd()}\n`);
    }); 

    rl.on('close', () => {
        output.write(`Thank you for using File Manager, ${username}, goodbye!`);
    }); 
}


startApp()


