const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// reader.close();

function addNumbers(sum,numsLeft,completionCallback) {
  if (numsLeft > 0) {
    let number;
    reader.question("Give me your number or else!",function(numStr) {
      number = parseInt(numStr);
      sum = sum + number;
      console.log(sum);
      addNumbers(sum, numsLeft-1,completionCallback);
    });
  }
  else{
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
