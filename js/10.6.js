let myArr = [1, 2, 4, 'h', 7, 1];
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < i; j++){
  if (myArr[j] === myArr[i]){
    console.log('true');
  }else {
    console.log('false');
  }
  }
}
