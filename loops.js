// 1)Write a for loop to print numbers from 1 to 10

for(var i=1;i<=10;i++){
    console.log(i);
}

// 20Write a for loop to calculate the sum of all numbers from 1 to 100.

var sum=0
for(var i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);

// 3)Write a for loop to print the multiplication table of 7 (up to 10).

function multiplication(num){
    for(var i=1;i<=10;i++)
    {
        console.log(`${num} X ${i} = ${num*i}`)
    }
}
multiplication(7);

// 4)Write a for loop to print all even numbers between 1 and 20.

for(var i=1;i<20;i++)
{
    if(i%2==0){
        console.log(i)
    }
}

// 5)Write a for loop to calculate the factorial of a number (e.g., 5!).

function factorial(num)
{
    let fact=1
    for(var i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}
console.log(factorial(5))

// 6)Write a for loop to calculate the power of a number (e.g., 2^5).

var Power=(num,power)=>{
    var res=1
    if(num==0 && power==0){return res}
    else if(power==0){return 0}
    else{
        for(var i=1;i<=power;i++)
        {
            res*=num
        }
    }
    return res
}
console.log(Power(2,5))

// 7)Write a for loop to print all odd numbers between 20 and 1 in reverse order.

for(var i=20;i>=1;i--){
    if(i%2 != 0){
        console.log(i);
    }
}

// or

for (let i = 19; i > 0; i -= 2) {
    console.log(i);
}
