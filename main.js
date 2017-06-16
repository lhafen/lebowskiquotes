

function playSound(e){
     const audio = document.querySelector("#" + e.srcElement.id + "audio");
     const key = document.querySelector("#" + e.srcElement.id);
     if (!audio) return;
     audio.currentTime = 0; //Sets audio file back to beginning of file
     audio.play();
     key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const quotes = document.querySelectorAll('.quote-box');
quotes.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("click", playSound);