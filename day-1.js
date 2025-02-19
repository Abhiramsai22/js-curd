// Question 1
function processnumbers(x,y,add){
     return res=add(x,y)
}
processnumbers(20,30,function(num1,num2){return num1+num2});
console.log("sum is "+res);

// Question 2
function greet(greetings){
    return greetings("abhi");
}
var res=greet(function(name){ return "hello,"+name})
console.log(res);

//function 3
function calculate(num1,num2,sub){
    return res=sub(num1,num2);
}
calculate(10,5,function(x,y){
    return x-y;
})
console.log("Difference of :"+res)
