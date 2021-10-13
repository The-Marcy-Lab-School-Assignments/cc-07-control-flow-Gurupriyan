//1
let sum=0;
function sumOfFourAndSix(){
  for (let i = 0; i <= 1000; i++){
      if (i % 4 === 0 && i % 6 === 0){
          sum += i;
      }
  }
  return sum;
}

// console.log(sumOfFourAndSix());

//2
function oddAndEvenInFifteen(){
  for (let i = 0; i <= 15; i++){
      if(i % 2 === 0){
          console.log(`${i} is even`);
      } else {
          console.log(`${i} is odd`);
      }
  }
}

// oddAndEvenInFifteen();
//3
function assignGrade(num){
  while (num <= 100 && num >= 0){
      if (num <= 100 && num >=91){
          return 'A';
      }else if (num <= 90 && num >= 81){
          return 'B';
      }else if (num <= 80 && num >= 71){
          return 'C';
      }else if (num <= 70 && num >= 65){
          return 'D';
      }else {
          return 'F';
      }
  }
}

console.log(assignGrade(71));




