// let arr = ['JavasCript', 'Phyton', 'C#', 'C++', 'C', 'Swift', 'Kotlin'];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > 5) {
//     continue;

//   }
//   console.log(arr[i])
// }
// let nums = [[2, -3, 5, 11], [1, -30, -11, 103], [- 1, -2, -4]];
// for (let i = 0; i < nums.length; i++) {
//   const numbers = nums[i];
//   for (let j = 0; j < numbers.length; j++) {
//     const n = numbers[j]
//     if (n > 0) {
//       console.log(numbers[j])
//     }


//   }
// }





// function getMax(numbs) {
//   let max = -Infinity;
//   for (let i = 0; i < numbs.length; i++) {
//     let x = numbs[i];
//     if (x > max) {
//       max = x;
//     }
//   }
//   return max;
// }
// console.log(getMax(numbs));

// let minNum = Math.min(...numbs);
// console.log(minNum);
// let getMax = [1, 9, 3, 58];
// getMax.sort((a, b) => (a + b));
// console.log(getMax[0])


// function printName(user = {
//   firstname: 'Naka',
//   lastname: 'Jikia',
//   age: 25,
//   isLogged: true,
// }) {
//   if (!user.isLogged) {
//     return user.firstname + ' ' + user.lastname
//   } return false;
// }


// console.log(printName());

let arr = [20, 14, 18, false, null, 35, 40];
for (let i = 0; i < arr.length; i++) {

  if (typeof arr[i] === 'number' && arr[i] % 5 === 0) {
    console.log(arr[i]);
  }
}


let numbs = [8, 6, 66, 45, -2];

let x = 0;
while (x < numbs.length) {
  console.log(numbs[x])
  x++;
}  