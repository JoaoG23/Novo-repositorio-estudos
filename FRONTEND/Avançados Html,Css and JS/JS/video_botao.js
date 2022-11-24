
let video = document.getElementById("video1");


function retroc(){
    video.currentTime -= 15;
}
function suceder(){
    video.currentTime += 15;

}
function play(){
    video.play();
}
function voltar(){
 video.playbackRate -=0.1;
}
function avanca(){
    video.playbackRate+=0.1;
}
function paravolta(){
    video.pause();
    video.currentTime = 0;
}
