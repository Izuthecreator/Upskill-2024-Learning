let array = [23, 45, 56, 73, 45, 23, 98];

function arraycalc(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let average = sum / array.length;

    let maxnumber = Math.max(...array);
    return {
        sum: sum,
        average: average,
        maxnumber: maxnumber
    };
}

console.log(arraycalc(array));



