const nums = [1, 2, 3, 4, 5];

for (const [num, i] of nums.entries()) {
  console.log(num, i);
}

nums.forEach((item, index, nums) => {
  console.log(`Item = ${item} at index = ${index} in array = ${nums}`);
});
