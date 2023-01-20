/*
 *  Index.ts
 *  Project: First Exercise
 *
 *  Author: Seth Gage
 *  Created on: Jan 19, 2023
 */

function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const array3: Array<number> = [];
  if (arr1.length < arr2.length) {
    for (let i = 0; i < arr1.length; i += 1) {
      array3.push(arr2[i]);
      array3.push(arr1[i]);
    }
    for (let i = arr1.length; i < arr2.length; i += 1) {
      array3.push(arr2[i]);
    }
  }
  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr2.length; i += 1) {
      array3.push(arr1[i]);
      array3.push(arr2[i]);
    }
    for (let i = arr2.length; i < arr1.length; i += 1) {
      array3.push(arr1[i]);
    }
  }
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length && i < arr2.length; i += 1) {
      array3.push(arr1[i]);
      array3.push(arr2[i]);
    }
  }

  return array3;
}
const array1: Array<number> = [4, 5, 23, 18, 9, -5, 31];
const array2: Array<number> = [18, 74, 88, 3, 7, 44, 108];

const mergedArray: Array<number> = merge(array1, array2);

console.log(mergedArray);
