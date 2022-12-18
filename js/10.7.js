const myArr = [1, 6, 9, 15, 0, 7, 4, 'p'];
  let oddNumbers = 0;
  let evenNumbers = 0;
  let zeroNumbers = 0; 
    for (let i = 0; i < myArr.length; i++) {
       
       if (myArr[i] % 2 === 0 && myArr[i] !== 0) {
          evenNumbers++;
    }
       else if (myArr[i] % 2 !== 0 && myArr[i] !== 0) {
         oddNumbers++;
       }
      else if (myArr[i] === 0) {
        zeroNumbers++
      }
}
console.log(evenNumbers + ' - количество четных чисел');
console.log(oddNumbers + ' - количество нечетных чисел');
console.log(zeroNumbers + ' - количество нулевых значений');

//не разобралась с isNun(