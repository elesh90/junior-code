/**
 * start by making an empty array
 * compare the first elements of the 2 subarrays and push the smaller of the two to the new array
 * suppose 1st element of 1st array is smaller then push that to the new array
 * now compare the 2nd element of the first array to the 1st element of the 2nd array, and so on
 * if we have exhausted the array elements in any of the 2 subarrays then just push the other subarray to the new array we had created
 */

// helper function
function merge(list1: number[], list2: number[]): number[] {
    let merged: number[] = [],
        i: number = 0,
        j: number = 0;
    
    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            merged.push(list1[i]);
            i++;
        } else {
            merged.push(list2[j]);
            j++;
        }
    }

    while (i < list1.length) {
        merged.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        merged.push(list2[j]);
        j++;
    }

    return merged;
}

export function mergeSort(list: number[]): number[] {
    if (list.length <= 1) return list;
    let mid = Math.floor(list.length / 2);
    let left: number[] = mergeSort(list.slice(0, mid));
    let right: number[] = mergeSort(list.slice(mid));
    
    return merge(left, right);
}