let loopCount = 0;

for (let i = 1; i <= 100; i++) {
    if (isSimple2(i)) {
        console.log( i );
    }
}
// console.log(96, isSimple2(96));
// console.log(97, isSimple2(97));
console.log('loopCount', loopCount);

function isSimple(digit) {
    if (digit % 2 == 0 && digit != 2) {
        return false;
    }
    
    return true;
}

function isSimple2(digit) {
    if (digit == 1) {
        return false;
    }

    for (let i = 2; i * i < digit; i++) {
        loopCount++;

        if (digit % i == 0) {
            return false;
        }
    }

    return true;
}