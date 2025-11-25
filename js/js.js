const secretParagraph = document.getElementById('secretText991');

    
        secretParagraph.style.visibility = 'visible';

        secretParagraph.textContent = 'You found me using the DOM!';

const weirdButtonX = document.getElementById('weirdButtonX');
weirdButtonX.addEventListener('click', handleClick);
function handleClick() {
  alert('Button clicked!');
}
const box7 = document.getElementById('Box7');
box7.addEventListener('mouseover', border-radius())
function border-radius() {
  box7.style.borderRadius = '25px';
}
box7.addEventListener('mouseout', normalBorder())
function normalBorder() {
  box7.style.borderRadius = '0px';
}
