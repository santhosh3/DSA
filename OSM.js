const map = new Map([[1,'one'], [2,'two']]); // in map keys represent what dataType u given
const obj = {1: 'one', 2: 'two'}    // both key and values are strings
console.log(map, obj)

//SET how to set value in map aswellas obj
map.set(3,'three');
obj[3] = 'three';
console.log(map, obj)

//GET how to get value from map aswell as from Set
console.log('map get',map.get(3));
console.log('Obj get',obj[3]);

//DELETE value in map aswell as in obj
map.delete(3);
delete obj[3];
console.log(map, obj)

//KEYS
console.log('map.keys',map.keys());
console.log('obj keys',Object.keys(obj))

//CHECK
console.log('map has key 1', map.has(2));
console.log('obj has key 1', 2 in obj);
console.log('obj has key 1', obj.hasOwnProperty(2))

//VALUES
console.log('map.keys',map.values());
console.log('obj keys',Object.values(obj))

//ENTRIES
console.log('map.keys',map.entries());
console.log('obj keys',Object.entries(obj))

//LENGTH
console.log('map.keys',map.size);
console.log('obj keys',Object.keys(obj).length)

//ITERATION
for(const [key,value] of map){
    console.log({key,value})
    console.log(key,value)
}

for(const [key,value] of Object.entries(obj)){
    console.log({key,value})
    console.log(key,value)
}

//USING FOREACH
for(const entries of map){
    console.log(entries)
}
map.forEach((value,key)=> console.log({key,value}))
Object.entries(obj).forEach(([key,value]) => console.log({key,value}))

//SWAP KEYS AND VALUES
const swapMap = Array.from(map).reduce((acc,[key,value]) => {
    acc.set(value, key);
    return acc
},new Map());
console.log(swapMap) 
//OR
// const swapMap1 = Array.from(map).reduce((acc,[key,value]) => acc.set(value,key),new Map())
// console.log(swapMap1)


const swapObj = Object.entries(obj).reduce((acc,[key,value]) => {
    acc[value] = key;
    return acc;
},{});
console.log(swapObj)
//OR
// const swapObj1 = Object.entries(obj).reduce((acc,[key,value]) => ({ ...acc, [value]:key}))
// console.log(swapObj1)

console.log({swapMap,swapObj})