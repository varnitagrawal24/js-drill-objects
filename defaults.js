function defaults(obj,defaultProps){

    for(let key in defaultProps){
        if(!obj[key]){
            obj[key]=defaultProps[key];
        }
    }

    return obj;
}

module.exports=defaults;