export function swapTwo(list: number[], a: number, b: number) {
    [list[a], list[b]] = [list[b], list[a]];
}

export function sortTwo(list: number[], a: number, b: number) {
    if (list[a] < list[b]) {
        swapTwo(list, a, b);
    }
}