/**
 * PSEUDO CODE
 * start iterating through the array, comparing 2 elements at a time, swap them if they are not in the expected order
 * at the end of the first pass, ignore the last index in the next pass
 * continue these passes until the last index is the same as the first index, assuming that the list is fully sorted
 */
import { sortTwo } from '../util/utilities';

export function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length+1; j++) {
            sortTwo(arr, j+1, j);
        }
    }
    return arr;
}