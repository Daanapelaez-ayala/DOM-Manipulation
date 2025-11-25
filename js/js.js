const secretParagraph = document.getElementById('secretText991');

    
        secretParagraph.style.visibility = 'visible';

        secretParagraph.textContent = 'You found me using the DOM!';

// Task 2: Button behavior
const weirdButtonX = document.getElementById('weirdButtonX');
weirdButtonX.addEventListener('click', handleClick);
function handleClick() {
  alert('Button clicked!');
}
// Task 3: Border Radius Change
const box7 = document.getElementById('box7');
box7.addEventListener('mouseover', borderRadius)
function borderRadius() {
  box7.style.borderRadius = '25px';
}
box7.addEventListener('dblclick', normalBorder)
function normalBorder() {
  box7.style.borderRadius = '0px';
}
// Task 4: Decode Message
const decodedOutput = document.getElementById('decodedOutput');
function decodeMessage() {
//   const codedMessage = document.getElementById('codedMessage').value;
  let decodedMessage = 'Forbidden Letter Detected';}
  if (codedMessage.includes('x')) {
        decodedOutput.textContent = decodedMessage;
        return;
        }
// Task 5: class switch
const mysterylist = document.getElementById('mysteryList');
mysterylist.addEventListener('click', changeColor);
let highlight = yellow;
if (mysterylist.classList.contains('ul')) {
    highlight = yellow;
}
