var array = [0,1,2,3,4];
function func(value){
    return value;
}

function func2(element, index) {
    console.log(array[index]);
}

array.forEach (func2);
console.log(func(10));