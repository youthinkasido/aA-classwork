const readLine = require('readline')

const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback){
    
  if (numsLeft > 0){
    reader.question('What number would you like add?', function (numb){
    const input = parseInt(numb);
    sum += input;
    console.log(` Partial Sum: ${sum}`);
    addNumbers(sum, numsLeft - 1, completionCallback);
  });
  } else { 
    completionCallback(sum);
    reader.close()
  }
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// var a = parseInt("10")

