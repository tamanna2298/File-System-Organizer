let fs=require("fs");
let path=require("path");
function view(dirname, mode) {


    if (mode == "tree") {
        viewTree(dirname, "");
    } else if (mode == "flat") {
        viewFlat(path);
        console.log("flat view implemented");
    } else {
        console.log("Wrong mode");
    }
}
function isFileChecker(dirPath){
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath){
    return fs.readdirSync(dirPath);
}

function viewFlat(dirPath){
    //path->file or folder
    let isFile=isFileChecker(dirPath);
    if(isFile==true){
        console.log(dirPath+"*");
    }
    else{
        //directory
        //console.log
        //print path
        console.log(dirPath);
       //get childrens
       let childrens=readContent(dirPath);
       //call for new flat
       for(let i=0;i<childrens.length;i++){
           viewFlat(dirPath+"/"+childrens[i]);
       }
    }
}

// tree
function viewTree(dirPath,indent){
    //path->file or folder
    let isFile=isFileChecker(dirPath);
    if(isFile==true){
        console.log(indent,path.basename(dirPath)+"*");
    }
    else{
        //directory
        //console.log
        //print path
        console.log(indent,path.basename(dirPath));
       //get childrens
       let childrens=readContent(dirPath);
       //call for new flat
       for(let i=0;i<childrens.length;i++){
           viewTree(path.join(dirPath, childrens[i]),indent+"\t");
       }
    }
}

module.exports={
    viewFn: view
}