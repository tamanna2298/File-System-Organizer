// commands->
// view --tree, --flat
//  organize-> same folder , multiple folder
// help
// [node ,mycli.js ,view ,dirName ,mode]
// node mycli.js organize -/foldername
// node mycli.js help
let {helpFn}=require("./Commands/help");
let {organizeFn}=require("./Commands/organize");
let {viewFn}=require("./Commands/view");
let input=process.argv.slice(2);
let cmd=input[0];
switch (cmd){
    case "view":
        viewFn(input[1],input[2])
        break;
    case "organize":
        organizeFn(input[1]);
        break;
    case "help":
            helpFn();
            break;    
    default:
        console.log("Wrong command enter help to view all commands");  
        break;          
}
