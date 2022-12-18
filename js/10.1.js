let value = +prompt('Введите число');

if (typeof(value) === 'number'){
  if (typeof(value) === !isNaN(number)) {
    console.log('Упс, кажется, вы ошиблись!')
  }
  else if((value % 2) === 0) {
    console.log('Число четное')
  }
  else{
    console.log ('Число нечетное')
  }
}