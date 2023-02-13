/**
 * PSEUDO CODE
 * start by comparing the 2nd element with the 1st element, swap if necessary
 * for each new element, iterate through the sorted portion of array, and insert this element where it needs to be, by making comparisons
 * keep doing this until all the unsorted elements have been inserted into their correct positions
 */
import { sortTwo } from '../util/utilities';

export function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i-1; j > -1; j--) {
            sortTwo(arr, j+1, j);
        }
    }
    return arr;
}