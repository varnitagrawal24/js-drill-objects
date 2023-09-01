const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const mapObject=require("../mapObject.js");

const result=mapObject(testObject,(key,value)=>{
    if(key==='age'){
        value+=4;
    }
    return value;
});
console.log(result);