function helpExecutor() {
    console.log(`List of all the commands: 
    1. view <dir-name> --tree
    2. view <dir-name> --flat
    3. organize <dir-name>/_
    4. help 
    `);
}
module.exports={
     helpFn: helpExecutor
}