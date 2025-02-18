function assignColor(color, key){
    key.style.borderColor = color;
    key.style.boxShadow = `0 0 1rem ${color}`;
}
function playSound(e) {
    // atrribute selector: audio[data-key]
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
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
keys.forEach(key => key.addEventListener('transitionend', removeTransition));  
window.addEventListener('keydown', playSound);