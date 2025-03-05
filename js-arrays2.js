// 1. Create an Array

var arr1=[1,2,3,4,5]
for(var i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}

// 2 Access an element

var arr1=[1,2,3,4,5]
console.log(arr1[2])

// 3.Change an Element

var arr1=[1,2,3,4,5]
console.log(arr1)
arr1[1]=22
console.log(arr1)

// 4. Find Length

function lengthofarray(arr1){
    return arr1.length;
}
console.log(lengthofarray([1,2,3,4,5]))

// 5. Add an Element (Push)
var arr1 =[1,2,3,4,5]
console.log(arr1)
arr1.push(6)
console.log(arr1)

// 6. Remove the Last Element (Pop)

var arr1 =[1,2,3,4,5]
console.log(arr1)
arr1.pop();
console.log(arr1)

// 7. Loop Through an Array

var arr1=[1,2,3,4,5]
for(var i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}

// 8. Check if an Element Exists

var arr =[1,2,3,4,5]
console.log(arr.includes(5))

// 9. Copy an Array

let arr = [1, 2, 3, 4, 5];

let copy1 = arr.slice();
let copy2 = [...arr];

console.log(copy1);
console.log(copy2);

// 10. Convert Array to String
let arr = ["Hello", "World"];
let str = arr.join(" "); 

console.log(str);

