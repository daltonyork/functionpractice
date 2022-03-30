 const inputBox = document.getElementById('inputBox'); 
 const select = document.getElementById('chooseFunction');
 const para = document.querySelector('p');

 inputBox.addEventListener('change', updateInput);
 select.addEventListener('change', updateFunction);

 function add7() {
     return parseInt(input) + 7;
 }

 function multiply () {
     return parseInt(input) * 7;
 }

 function capitalize () {
     return input[0].toUpperCase() + input.slice(1).toLowerCase();
 }

 function lastLetter () {
    return input.slice(-1);
 }

 function updateInput() {
    input = document.getElementById('inputBox').value;
 }

 function updateFunction() {
     const choice = select.value;

     if (choice === 'add7') {
       result = add7();
     } else if (choice === 'multiply') {
         result = multiply();
     } else if (choice === 'capitalize') {
         result = capitalize();
     } else if (choice === 'lastLetter') {
         result = lastLetter();
     } else {
         result =  "";
     } para.textContent = result;
 } 
