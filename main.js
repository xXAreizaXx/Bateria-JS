window.addEventListener ('keydown' , function (e) {
    const Audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const Key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!Audio) return;
    Audio.currentTime = 0;
    Audio.play();
    Key.classList.add('playing')
}); 

