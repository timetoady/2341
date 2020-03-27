import Plyr from 'plyr';

const player = new Plyr('#player', {
    title: 'Amagi Brilliant Park, featuring EXTRA MAGIC HOUR',
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    settings: ['captions', 'quality', 'speed', 'loop'],
    autoplay: true,
});