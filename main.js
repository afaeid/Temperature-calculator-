var OutputScreen = document.querySelector('.output-screen');
var ModeDirection = document.querySelector('.modes');
function input(num){
  OutputScreen.value+= num
}

function fh(){
  OutputScreen.value = ((OutputScreen.value*9)/5)+32;
  ModeDirection.innerText = 'Result is displaying in Fahrenheit from Celsius';
}

function cl(){
  OutputScreen.value = '';
  ModeDirection.innerText= '';
}

function cs(){
  OutputScreen.value = ((OutputScreen.value-32)*5)/9;
  ModeDirection.innerText = 'Reslut is diplaying in Celsius from Fahrenheit';
}

function del(){
  OutputScreen.value = OutputScreen.value.slice(0,-1);
  if(OutputScreen.value == ''){
    ModeDirection.innerText = '';
  }
}
