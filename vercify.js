// DAY 3
async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/vercify/eng-rom-songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href);
        }
    }
    return songs
}
async function main(){
    let songs = await getSongs()
    console.log(songs); 
 
    var audio = new Audio(songs[0]);
    audio.play();
    
    audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(duration)
    }); 
}       
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.vsrp-sc-genre-play-button');
    const songname = document.querySelector('.vsrp-sc-genre-name');
    const artistname = document.querySelector('.vsrp-sc-artist-name');

    const songTitleDiv = document.querySelector('.n-p-song-title ul');
    const artistNameDiv = document.querySelector('.n-p-artst-name ul');
    
    playButton.addEventListener('click', function() {
        songTitleDiv.innerHTML = songname.innerHTML;
        artistNameDiv.innerHTML = artistname.innerHTML;
    });
});   
main()