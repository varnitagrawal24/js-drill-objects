function invert(obj) {
    let result={};
    for(let key in obj){
        result[obj[key]]=key;
    }
    return result;
}

module.exports=invert;