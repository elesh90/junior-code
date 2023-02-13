/**
 * PSEUDO CODE
 * start by calling the getPivotIdx on the entire array by defaulting the left and right pointers to the first and last element of the array
 * then store the return value in the pivotIndex
 * use this recursively use quickSort with the same array, but from left up until (pivotIndex-1) for the left part of the array
 * for the right part of the array use quickSort again with the same array but from (pivotIndex+1) up to right
 * once the base case becomes invalid, when left equals right, eventually we return the array
 */
import { swapTwo } from '../util/utilities';

function getPivotIdx(arr: number[], start: number = 0, end: number = arr.length-1): number {
    let swapIdx: number = start;
    let pivotValue: number = arr[start];
    for (let i = start+1; i <= end; i++) {
        if (arr[i] > pivotValue) {
            swapIdx++;
            swapTwo(arr, i, swapIdx);
        }
    }
    swapTwo(arr, start, swapIdx);

    return swapIdx;
}

export function quickSort(arr: number[], left: number = 0, right: number = arr.length-1): number[] {
    if (left < right) {
        let pivotIndex = getPivotIdx(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}