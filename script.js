console.log("page loaded...");

function whale(vid) {
    vid.play();
}

function end(vid) {
    vid.pause();
    vid.currenTime = 0;
}