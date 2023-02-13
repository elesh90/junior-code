let listOfNumbers: number[] = [];
for (let i = 0; i < 100; ++i) {
    listOfNumbers[i] = i;
}

export function shuffle(arr: number[]): number[] {
    let tmp, current, top = arr.length;
    if (top) {
        while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = arr[current];
            arr[current] = arr[top];
            arr[top] = tmp;
        }
    }
    return arr;
}

shuffle(listOfNumbers);