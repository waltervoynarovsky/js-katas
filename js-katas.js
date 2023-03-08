const array = [6, -3, -3, -1, 1, 2, 4, 4, 6, 7, 8, 4, 9, 15, 19, 2];
// 1.  How do you find the missing numbers in a given integer array?
const findMissingNumbers = (array) => {
  array.sort((a, b) => a - b);
  missingArray = [];
  for (let index = 0; index < array.length; index++) {
    const currentNumber = array[index];
    const previousNumber = array[index - 1];
    const sum = currentNumber - previousNumber;
    if (sum != 1) {
      for (let index = sum - 1; index > 0; index--) {
        const element = currentNumber - index;
        // console.log(currentNumber + "+" + element);
        missingArray.push(element);
      }
    }
  }
  console.log("Missing numbers array = " + missingArray);
};

findMissingNumbers(array);
// 2.  How do you find the duplicate number on a given integer array?
const findDuplicateNumber = (array) => {
  array.sort((a, b) => a - b);
  duplicateArray = [];
  for (let index = 0; index < array.length; index++) {
    const currentNumber2 = array[index];
    const previousNumber2 = array[index - 1];
    if (currentNumber2 == previousNumber2) duplicateArray.push(currentNumber2);
  }
  console.log("Duplicates array = " + duplicateArray);
};

findDuplicateNumber(array);
// 3.  How do you find duplicate numbers in an array if it contains multiple duplicates?
// Answer: Solution 2. works for this one as well.
// 4.  How do you remove duplicates from an array in place?
const deleteDuplicateNumber = (array) => {
  array.sort((a, b) => a - b);
  for (let index = 0; index < array.length; index++) {
    const currentNumber2 = array[index];
    const previousNumber2 = array[index - 1];
    if (currentNumber2 == previousNumber2) array.splice(currentNumber2, 1);
  }
  console.log(array);
};
deleteDuplicateNumber(array);
// 5.  How do you find the largest and smallest number in an unsorted integer array?
const findLargestAndSmallestNumber = (array) => {
  array.sort((a, b) => a - b);
  console.log("Smallest number = " + array[0]);
  console.log("Highest number = " + array[array.length - 1]);
};

findLargestAndSmallestNumber(array);
