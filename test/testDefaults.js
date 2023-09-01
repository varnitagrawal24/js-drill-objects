const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultProps= {
    name : 'varnit agrawal',
    age : 23,
    vehicle : 'Bat Mobile'
};

const defaults=require("../defaults.js");

const result=defaults(testObject,defaultProps);
console.log(result);