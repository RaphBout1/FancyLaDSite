
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
var clicker = 0;
b1.addEventListener('click', imageAvance1);
b2.addEventListener('click', imageAvance2);
b3.addEventListener('click', imageAvance3);
function fonc() {
    var arPodcast = document.getElementById("arPodcast")
    if (getComputedStyle(arPodcast).display != "none") {
        arPodcast.style.display = "none";
    } else {
        arPodcast.style.display = "block";
    }

}
function ecoute(id) {
    var player = document.querySelector(id);
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}
function avance(idaudio, idimage) {

    const audio = document.querySelector(idaudio);
    const image = document.querySelector(idimage);
    let pourcentDecoute = ((audio.currentTime * 100) / audio.duration);
    image.style.width = pourcentDecoute + '%';
}


function imageAvance1(e) {

    const audio = document.querySelector('#audio1');
    const image = document.querySelector('#image1');
    const x = (e.offsetX * audio.duration) / b1.offsetWidth;
    audio.currentTime = x;
}
function imageAvance2(e) {

    const audio2 = document.querySelector('#audio2');
    const image2 = document.querySelector('#image2');
    const x = (e.offsetX * audio2.duration) / b2.offsetWidth;
    audio2.currentTime = x;
}
function imageAvance3(e) {

    const audio = document.querySelector('#audio3');
    const image = document.querySelector('#image3');
    const x = (e.offsetX * audio3.duration) / b3.offsetWidth;
    audio.currentTime = x;
}