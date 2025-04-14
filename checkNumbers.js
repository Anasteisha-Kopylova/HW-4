let num = prompt('Enter a three-digit number');

while (!num || num.length !== 3 || isNaN(Number(num))) {
    num = prompt('Please enter a valid 3-digit number');
}
    let a = num[0];
    let b = num[1];
    let c = num[2];

    if (a === b && b === c){
        alert('All numbers are the same');
    } else if (a === b || b ===c || a === c) {
        alert('There are two same numbers');
    } else {
        alert('All numbers are different');
    }

