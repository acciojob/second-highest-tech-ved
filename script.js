//your JS code here. If required.

function secondHighest(arr) {
    if (arr.length < 2) return -Infinity;

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            if (max !== arr[i]) {
                secondMax = max;
            }
            max = arr[i];
        } else if (arr[i] < max && arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

