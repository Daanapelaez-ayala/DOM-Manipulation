const secretParagraph = document.getElementById('secretText991');

    
        secretParagraph.style.visibility = 'visible';

        secretParagraph.textContent = 'You found me using the DOM!';

const weirdButtonX = document.getElementById('weirdButtonX');
weirdButtonX.addEventListener('click', handleClick);
function handleClick() {
  alert('Button clicked!');
}

const box7 = document.getElementById('box7');
box7.addEventListener('mouseover', borderRadius)
function borderRadius() {
  box7.style.borderRadius = '25px';
}
box7.addEventListener('dblclick', normalBorder)
function normalBorder() {
  box7.style.borderRadius = '0px';
}

const decodedOutput = document.getElementById('decodedOutput');
function decodeMessage() {
//   const codedMessage = document.getElementById('codedMessage').value;
  let decodedMessage = 'Forbidden Letter Detected';}
  if (codedMessage.includes('x')) {
        decodedOutput.textContent = decodedMessage;
        return;
        }
