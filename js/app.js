(() => {
    console.log('fired!');

    let audioEL = document.querySelector('audio'),
        pauseButton = document.querySelector('#pause'),
        playButton = document.querySelector('#play');
        loadButton = document.querySelector('#loadmore');


    function pauseAudio() {
        audioEL.pause();
    }

    function playAudio() {
        audioEL.play();
    }

    function logEnded() {
        console.log("done!");
    }

    function loadAudioTrack() {
        //set new audio source
        audioEL.src="audio/STP_Interstate_Love_Song.mp3";

        //load and play
        audioEL.load();
        audioEL.play();
    }

    //Events
    audioEL.addEventListener("ended", logEnded);
    pauseButton.addEventListener("click", pauseAudio);
    playButton.addEventListener("click", playAudio);
    loadButton.addEventListener("click", loadAudioTrack);

})();
