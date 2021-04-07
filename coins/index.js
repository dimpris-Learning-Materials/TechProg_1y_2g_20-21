/* 

На столе лежат n монеток. Некоторые из них лежат вверх решкой, 
а некоторые – гербом. Определите минимальное число монеток, 
которые нужно перевернуть, чтобы все монетки были 
повернуты вверх одной и той же стороной.

*/

const coins = [false, true, true, true, false, false];
let countFace = 0;
let countBack = 0;

for (let i = 0; i < coins.length; i++) {
    // console.log( coins[i] );
    if (coins[i]) {
        countBack++;
    } else {
        countFace++;
    }
}

if (countFace < countBack) {
    console.log(countFace);
} else {
    console.log(countBack);
}

// console.log(countFace, countBack);