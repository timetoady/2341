let bless4Vid = document.querySelector("#player");

window.onresize = function (){
if (window.innerWidth <  562) {
    console.log(`Sizer running. Width: ${window.innerWidth}`)
    bless4Vid.setAttribute("poster", "/image_assets/bless4CoverMobile.jpg")
} else{
    bless4Vid.setAttribute("poster", "/image_assets/bless4CoverDesktop.jpg")
}
}


window.onload = function () {
    console.log("Loaded: check")
}

// const player = new Plyr('#player', {
//     title: 'Amagi Brilliant Park, featuring EXTRA MAGIC HOUR',
//     controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
//     settings: ['captions', 'quality', 'speed', 'loop'],
//     autoplay: true,
// });

