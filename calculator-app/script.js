const displayedItem = document.getElementById('display')
const buttonsClicked = document.getElementsByTagName('button')
for (var i = 0; i < buttonsClicked.length; i++) {
  buttonsClicked[i].addEventListener('click', calculate)
}
function calculate(event){
  buttonsClickedValue = event.target.value
  if (buttonsClickedValue === '=') {
    displayedItem.value = eval(displayedItem.value)
  }else if (buttonsClickedValue === 'C') {
    displayedItem.value = ''
  } 
  else{
    displayedItem.value += buttonsClickedValue
  }
}





/*const displayedItem = document.getElementById('display')
const buttonsClicked = document.getElementsByTagName('button')
for (var i = 0; i < buttonsClicked.length; i++) {
  buttonsClicked[i].addEventListener('click', calculate)
}
function calculate(event){
  buttonsClickedValue = event.target.value
  if (buttonsClickedValue === '=') {
    displayedItem.value = eval(displayedItem.value)
  }else if (buttonsClickedValue === 'C') {
    displayedItem.value = ''
  } else if (buttonsClickedValue==='*') {
    displayedItem.value += '*'
  }
  else{
    displayedItem.value += buttonsClickedValue
  }
}
*/