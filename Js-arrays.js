// 1) Find the Larger Number with a Callback
function findlarger(num1,num2,Callback){
    return Callback(num1,num2)+5
}
var res = findlarger(70,30,(a,b)=>{
    if(a>b)
    {
        return a;
    }
    if(b>a)
    {
        return b;
    }
})
console.log(res);

// 2. Sum or Difference with a Callback
function calculate(num1,num2,Callback){
    return Callback(num1,num2)*5

}
var res = calculate(60,20,anonymous = function(a,b){

    if(a>b){
        return a+b;
    }
    if(b>a){
        return b-a;
    }
    else{
        return 0;
    }
})
console.log(res);

// 3. Even or Odd with a Callback
function checkevenodd(num,Callback){
    var result=Callback(num);
    if(result=="even"){
        return "Even Number";
    }
    return "Odd Number";

}
var res=checkevenodd(8,(a)=>{
    if(a%2==0){
        return "even";
    }
    return "odd";
})
console.log(res);

//4. Positive, Negative, or Zero with a Callback

function checksum(num,Callback){
    return Callback(num)+" value"
}
var res=checksum(50,(a)=>{
    if(a>0){
        return "positive";
    }
    else if(a<0){
        return "Negative";
    }
    else if(a==0){
        return "Zero";
    }
})
console.log(res);

//5. Multiply by Condition with a Callback
function multiplyConditionally(num1,num2,Callback){
    return Callback(num1,num2)*4
}
var res = multiplyConditionally(20,10,(a,b)=>{
    if(a>b){
        return a*b;
    }
    else if(b>a){
        return a+b;
    }
    else{
        return a;
    }
})
console.log(res);