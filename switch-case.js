const numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        alert('Ви скасували');
        break;

    case numOrStr.trim() === '':
        alert('Empty String');
        break;

    case isNaN(+numOrStr):
        alert('number is Ba_NaN');
        break;

    default:
        alert('OK!');
        break;
}
