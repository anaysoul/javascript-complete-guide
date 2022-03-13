// question 1
const numbers = [1, 2, 3, 4, 5, 6];
const greaterThan5 = numbers.filter((num) => num > 5);
console.log(greaterThan5);
const mapNum = numbers.map((num) => ({ number: num }));
console.log(mapNum);
const reducedNum = numbers.reduce((prevVal, currVal) => prevVal * currVal, 1);
console.log(reducedNum);

// question 2
const findMax = (nums) => {
  nums.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });
  return nums[0];
};
console.log(findMax(numbers));

function findMax2(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax2(...numbers));

// question 3
const findMinAndMax = (nums) => {
  nums.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });
  return [nums[0], nums[nums.length - 1]];
};
const [min, max] = findMinAndMax(numbers);
console.log(findMinAndMax(numbers));
console.log(min, max);

function findMinandMax2(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMax, curMin];
}
console.log(findMinandMax2(...numbers));
const [max1, min2] = findMinandMax2(...numbers);
// question 4
const list = new Set([1, 2, 3, 4, 5, 6, 5]);
console.log(list);
