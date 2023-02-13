/**
 * PSEUDO CODE
 * let's assume that the first element is the smallest
 * find the minimum value from the unsorted array, and swap this with the first element of the array
 * now repeat above two steps for the rest of the unsorted array elements excluding the first element swapped to the front of the array
 * till the unsorted part length turns to 1, by then you can add that to the end of the sorted part and completed the sorting
 */
import { swapTwo } from '../util/utilities';

export function selectionSort(arr: number[]): number[] {
    let min: number;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swapTwo(arr, min, i);
        }
    }
    return arr;
}