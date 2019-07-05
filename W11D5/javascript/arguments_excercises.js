// const sum = function () {
//     // console.log(arguments);
//     let sum = 0;
//     const arr = [].slice.apply(arguments); // make sure we understand how this works
//     // console.log(arr)
//     // console.log(arguments instanceof Object)
//     for(i = 0 ; i < arr.length ; i++){
//         sum = sum + arr[i];
//     }
//  return sum;
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));


const sum = function (...theArgs) {
    let arr = []
    arr.push(...theArgs)
    let sum = 0;
    arr.forEach(num => { sum = sum + num })
 return sum;
}

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));




