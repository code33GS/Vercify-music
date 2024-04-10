// DAY 3
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/vercify/eng-rom-songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs
}
async function main() {
    let songs = await getSongs()
    let currentSong;
}


document.addEventListener('DOMContentLoaded', function () {
    const songCards = document.querySelectorAll('.vrsp-song-card');

    const songTitleDiv = document.querySelector('.n-p-song-title ul');
    const artistNameDiv = document.querySelector('.n-p-artst-name ul');
    const ReplsongImgSrc = document.querySelector('.n-p-song-img');
    
    
    songCards.forEach(function (card) {
        const playButton = card.querySelector('.vsrp-sc-genre-play-button');
        const songName = card.querySelector('.vsrp-sc-genre-name');
        const artistName = card.querySelector('.vsrp-sc-artist-name');
        
        const songImgSrc = card.querySelector('.vsrp-sc-cover-img');

        playButton.addEventListener('click', function () {
            songTitleDiv.innerHTML = songName.innerHTML;
            artistNameDiv.innerHTML = artistName.innerHTML;

            ReplsongImgSrc.src = songImgSrc.src;

            // const songURL = `/vercify/eng-rom-songs/${encodeURIComponent(songName.innerHTML)}.mp3`;

            // // console.log(songURL)
            // var audio = new Audio(songURL);
            // audio.play();

        });

    });
});

// DAY 5

main()

document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.vsrp-sc-genre-play-button');
    const soundbaranim = document.querySelector('.soundbaranim');
    let currentPlayingAudio = null;

    playButtons.forEach(playButton => {
        const card = playButton.closest('.vrsp-song-card, .vsrp-song-card');
        const songName = card.querySelector('.vsrp-sc-genre-name').textContent;
        const songURL = `/vercify/eng-rom-songs/${encodeURIComponent(songName)}.mp3`;
        const audio = new Audio(songURL);

        playButton.addEventListener('click', () => {
            if (currentPlayingAudio && currentPlayingAudio !== audio) {
                currentPlayingAudio.pause();
                currentPlayingAudio.currentTime = 0;
                const playingButton = document.querySelector('.fa-solid.fa-pause').parentNode;
                playingButton.innerHTML = '<i class="fa-solid fa-play" style="color: #000000;"></i>';
                soundbaranim.innerHTML = '<ul class="wave-menu"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>'
            }

            if (audio.paused) {
                audio.play();
                playButton.innerHTML = '<i class="fa-solid fa-pause" style="color: #000000;"></i>';
                currentPlayingAudio = audio;
                soundbaranim.innerHTML = '<ul class="wave-menu"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>'
                
            } else {
                audio.pause();
                playButton.innerHTML = '<i class="fa-solid fa-play" style="color: #000000;"></i>';
                currentPlayingAudio = null;
                soundbaranim.innerHTML = ''

            }
        });

        audio.addEventListener('ended', () => {
            playButton.innerHTML = '<i class="fa-solid fa-play" style="color: #000000;"></i>';
            currentPlayingAudio = null;
        });
    });
});

