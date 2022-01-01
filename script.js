
//default song variables

let songIndex = 0;
let audioElement = new Audio('songs/TeraZikr.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');


// array containing songs details

let songs = [
    {
        songName: 'Tera Zikr - Darshan Rawal', songPath: 'songs/TeraZikr.mp3' ,    coverPath: 'covers/cover1.jpg '
    },
    {
        songName: 'Let Me Love You - Justien Bieber', songPath: 'songs/LetMeLoveYou.mp3' ,    coverPath: 'covers/cover2.jpg '
     },
     {
        songName: 'Ajj Din Chadheya - Rahat Fateh Ali Khan', songPath: 'songs/AjjDinChadheya.mp3' ,    coverPath: 'covers/cover3.jpg '
     },
     {
        songName: 'Khuda Jaane - KK & Shipla Rao', songPath: 'songs/KhudaJaane.mp3' ,    coverPath: 'covers/cover4.jpg '
     },
     {
         songName: 'Zindgi Do Pal Ki - KK ', songPath: 'songs/ZindgiDoPalKi.mp3' ,    coverPath: 'covers/cover5.jpg '
     },
     {
         songName: 'Shayad - Arijit Singh', songPath: 'songs/Shayad.mp3' ,    coverPath: 'covers/cover6.jpg '
     },
     {
         songName: 'Mera Dil Tere Liye Dhadakta Hai - Udit Nayayan & AP', songPath: 'songs/MeraDilTereLiyeDhadaktaHai.mp3' ,    coverPath: 'covers/cover7.jpg '
     }
]

// bottom player functions

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate',() => {
     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
     progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
       audioElement.currentTime = audioElement.duration * progressBar.value / 100; 
})

const MakeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        MakeAllPlays();
        songIndex = parseInt(e.target.id);
        gif.style.opacity = 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].songPath;
        document.getElementById('unique').innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});

 // working of previous button

document.getElementById('previous').addEventListener('click', () => {
    songIndex = ( songIndex - 1 );
    if(songIndex < 0) songIndex = songs.length - 1;
    audioElement.src = songs[songIndex].songPath;
    document.getElementById('unique').innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
} )

// working of next button

document.getElementById('next').addEventListener('click', () => {
    songIndex = ( songIndex + 1 ) % songs.length;
    audioElement.src = songs[songIndex].songPath;
    document.getElementById('unique').innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
} )