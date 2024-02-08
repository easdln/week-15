let numbers = [];
for(let i = -10; i <= 10; i++){
    numbers.push(i);
}

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        numbers.splice(i,1);
        i--;
    }
}

let arr1 = []
for(let num of numbers){
    let sqare = num ** 2;
    arr1.push(sqare)
}
numbers = arr1;

for(let i = numbers.length - 1; i >= 0; i-- ){
    console.log(numbers[i]);
}