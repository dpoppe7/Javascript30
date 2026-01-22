function assignColor(color, key){
    key.style.borderColor = color;
    key.style.boxShadow = `0 0 1rem ${color}`;
}
function playSound(e) {
    // Determines the key code from either the keyboard event (e.keyCode) or the click event (e.target.closest
    const keyCode = e.keyCode || e.target.closest('.key').getAttribute('data-key');
    if (!keyCode) return; // stop function if no valid keyCode is found
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`); // atrribute selector: audio[data-key]
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    const color = key.getAttribute('data-color');
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
    assignColor(color, key);
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
    this.style.borderColor = ''; // Reset border color
    this.style.boxShadow = ''; // Reset box shadow
}
function setInitialColors(){
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        const color = key.getAttribute('data-color');
        key.querySelector('.sound').style.color = color
    })
}

 // TODO: Create and position a sound wave element with an animation of a moving 
// wave while many keys are pressed.

setInitialColors();
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', playSound);
}); 
window.addEventListener('keydown', playSound);