let music_start = false;

function musicControl() {
    if (music_start === false) {
        music_start = true;

    } else {
        music_start = false;
    }
    if (music_start === true) {
        document.getElementById('bg_music1').volume = 0.6;
        document.getElementById('bg_music1').play();
    } else {
        document.getElementById('bg_music1').pause();
    }
}