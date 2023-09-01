function mapObject(obj,cb) {
    let result={};
    for(let key in obj){
        result[key]=cb(key,obj[key]);
    }
    return result;
}

module.exports=mapObject;