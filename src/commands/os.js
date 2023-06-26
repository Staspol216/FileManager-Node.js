import { cpus, EOL, userInfo } from "node:os";
import { arch } from "node:process";

const { username, homedir } = userInfo();

const cpusInfo = cpus().map(({ model, speed }) => ({
    model,
    speed: `${speed / 1000}GHz`
}));

export const os = (args) => {
    switch (args[0]) {
        case '--EOL': 
            console.log(JSON.stringify(EOL))
            break;
        case '--cpus':
            console.log(`Amount of CPUS: ${cpus().length }\n`, cpusInfo)
            break;
        case '--homedir':
            console.log(homedir)
            break;
        case '--username':
            console.log(username)
            break;
        case '--architecture':
            console.log(arch)
            break;
        default:
            throw new Error()
    }
}