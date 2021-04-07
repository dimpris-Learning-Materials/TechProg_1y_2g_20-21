let data = [5,7,23,8,5,7,867,4,56,6,7,10];

for (let j = 0; j < data.length - 1; j++) {
    let isChanged = false;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] > data[i+1]) {
            isChanged = true;
            let temp = data[i];
            data[i] = data[i+1];
            data[i+1] = temp;
        }
    }
    console.log(j, isChanged);

    if (!isChanged) {
        break;
    }
}

console.log(data);