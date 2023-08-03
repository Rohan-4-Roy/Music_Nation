console.log("Welcome,to Music Nation")

let songIndex=0
let audioElement=new Audio('songs1/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songItem'))
let masterSongName = document.getElementById('masterSongName');
let timestamp=document.getElementsByClassName('timestamp')

//list of all songs
let songs = [
    {songName: "Qismat ki Hawa", filePath: "songs1/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bade Achhe Lagte Hai", filePath: "songs1/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ajib Dastan Hai Yeh ", filePath: "songs1/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Ek Ladki ko Dekha", filePath: "songs1/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Meri Samnewali khidki", filePath: "songs1/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Lag Ja Gale", filePath: "songs1/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Chhukar mere maan ko", filePath: "songs1/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mein koi aisa geet gau", filePath: "songs1/2.mp3", coverPath: "covers/8.jpg"},
]
//updating timestamp
Array.from(timestamp).forEach((element)=>{
    let ae=new Audio('songs1/1.mp3');
    timestamp.innerText=ae.duration;
})
//Creating the menu 
songItems.forEach((element,i) =>
{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText=songs[i].songName;
})
//listening to events...

//Handling play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        let lol=document.getElementById(`${songIndex}`)
        lol.classList.remove('fa-play-circle')
        lol.classList.add('fa-pause-circle')
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        makeAllPlays()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;
    }
    
})
    //updating seekbar
audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt(audioElement.currentTime/audioElement.duration * 100)
    myProgressBar.value=progress;   
    
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
          
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-pause-circle')){
            audioElement.pause()
            makeAllPlays()
            masterPlay.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-play-circle')
            gif.style.opacity=0;
        }
        else{
        makeAllPlays()
        songIndex=parseInt(element.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs1/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')    
    }})
})

document.getElementById('next').addEventListener('click', ()=>{
    makeAllPlays()
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs1/${songIndex+1}.mp3`;
    let lol=document.getElementById(`${songIndex}`)
    lol.classList.remove('fa-play-circle')
    lol.classList.add('fa-pause-circle')
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    makeAllPlays()
    if(songIndex<=0){
        songIndex = 7
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs1/${songIndex+1}.mp3`;
    let lol=document.getElementById(`${songIndex}`)
    lol.classList.remove('fa-play-circle')
    lol.classList.add('fa-pause-circle')
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
audioElement.addEventListener('ended', () => {
    makeAllPlays();
    if (songIndex >= 7) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs1/${songIndex + 1}.mp3`;
    let lol = document.getElementById(`${songIndex}`);
    lol.classList.remove('fa-play-circle');
    lol.classList.add('fa-pause-circle');
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});






