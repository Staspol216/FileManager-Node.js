export const cd = (args) => {
    const directoryName = args[0]
    process.chdir(directoryName)
}