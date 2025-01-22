// let songIndex=0;
// let audio=new Audio('songs/1.mp3')
// let k=document.getElementById("play_button")
// let l=document.getElementsByClassName("gif")[0]
// // let play1=document.getElementById("play1")
// let songitem=Array.from(document.getElementsByClassName("font2"))
// let songs=[
//    {songname:"bjhbjs",filepath:"songs/1.mp3"},
//    {songname:"bduuh",filepath:"songs/2.mp3"},
//    {songname:"bduuh",filepath:"songs/3.mp3"},
//    {songname:"bduuh",filepath:"songs/4.mp3"},
//    {songname:"bduuh",filepath:"songs/5.mp3"},
//    {songname:"bduuh",filepath:"songs/6.mp3"},
//    {songname:"bduuh",filepath:"songs/7.mp3"},
// ]
// k.addEventListener('click',()=>{
//    if(audio.paused||audio.currentTime<=0){
//       audio.play()
//  k.classList.remove(`fa-circle-play`);
//  k.classList.add(`fa-circle-pause`);
//  l.style.opacity=1;
//    }else{
//       audio.pause()
//       k.classList.remove(`fa-circle-pause`);
//       k.classList.add(`fa-circle-play`);
//       l.style.opacity=0;
//    }
// })
// audio.addEventListener('timeupdate',()=>{
//    console.log('timeupdate');
//    progress=parseInt((audio.currentTime/audio.duration)*100)
//    console.log(progress)
//    progressbar.value=progress
// })
// progressbar.addEventListener('change',()=>{
//    audio.currentTime=(progressbar.value*audio.duration)/100
// })
// const makeAllPlay=()=>{
//    songitem.forEach((element)=>{
//       element.classList.remove(`fa-circle-pause`)
//       element.classList.add(`fa-circle-play`)
//    })
// }
// songitem.forEach((element)=>{
// element.addEventListener('click',(e)=>{
// makeAllPlay()
// songIndex=parseInt(e.target.id);
// e.target.classList.remove(`fa-circle-play`)
// e.target.classList.add(`fa-circle-pause`)
// audio.src=`songs/${songIndex+1}.mp3`;
// audio.currentTime=0
// audio.play()
// k.classList.remove(`fa-circle-play`);
// k.classList.add(`fa-circle-pause`);
// })
// })

// songitem.forEach((element) => {
//    element.addEventListener('click', (e) => {
//       makeAllPlay(); // Reset all play buttons
//       songIndex = parseInt(e.target.id) - 1; // Convert id to array index (subtract 1)
//       e.target.classList.remove(`fa-circle-play`);
//       e.target.classList.add(`fa-circle-pause`);
//       audio.src = songs[songIndex].filepath; // Set the audio source from songs array
//       audio.currentTime = 0;
//       audio.play();
//       k.classList.remove(`fa-circle-play`);
//       k.classList.add(`fa-circle-pause`);
//    });
// });
// console.log("Song filepath:", songs[songIndex].filepath);





// let songIndex = 0;
// let audio = new Audio('songs/1.mp3');
// let k = document.getElementById("play_button");
// let l = document.getElementsByClassName("gif")[0];
// let progressbar = document.getElementById("progressbar"); // Ensure this element exists
// let songitem = Array.from(document.getElementsByClassName("font2"));

// let songs = [
//    { songname: "Song 1", filepath: "songs/1.mp3" },
//    { songname: "Song 2", filepath: "songs/2.mp3" },
//    { songname: "Song 3", filepath: "songs/3.mp3" },
//    { songname: "Song 4", filepath: "songs/4.mp3" },
//    { songname: "Song 5", filepath: "songs/5.mp3" },
//    { songname: "Song 6", filepath: "songs/6.mp3" },
//    { songname: "Song 7", filepath: "songs/7.mp3" },
// ];

// // Function to reset all play/pause icons
// const makeAllPlay = () => {
//    songitem.forEach((element) => {
//       element.classList.remove('fa-circle-pause');
//       element.classList.add('fa-circle-play');
//    });
// };

// // Adding event listeners to song items
// songitem.forEach((element, index) => {
//    element.addEventListener('click', (e) => {
//       makeAllPlay(); // Reset icons
//       songIndex = index; // Update the current song index
//       e.target.classList.remove('fa-circle-play');
//       e.target.classList.add('fa-circle-pause');
//       audio.src = songs[songIndex].filepath; // Set the audio source dynamically
//       audio.currentTime = 0;
//       audio.play();
//       k.classList.remove('fa-circle-play');
//       k.classList.add('fa-circle-pause');
//       l.style.opacity = 1; // Show GIF or animation
//    });
// });

// // Play/Pause button functionality
// k.addEventListener('click', () => {
//    if (audio.paused || audio.currentTime <= 0) {
//       audio.play();
//       k.classList.remove('fa-circle-play');
//       k.classList.add('fa-circle-pause');
//       l.style.opacity = 1;
//    } else {
//       audio.pause();
//       k.classList.remove('fa-circle-pause');
//       k.classList.add('fa-circle-play');
//       l.style.opacity = 0;
//    }
// });

// // Update progress bar as the song plays
// audio.addEventListener('timeupdate', () => {
//    const progress = parseInt((audio.currentTime / audio.duration) * 100);
//    progressbar.value = progress; // Update progress bar value
// });

// // Seek song using the progress bar
// progressbar.addEventListener('change', () => {
//    audio.currentTime = (progressbar.value * audio.duration) / 100;
// });






























                                                //   bekar
   let audio1=new Audio(`Lalkara - Ghost (2023) 320 Kbps.mp3`);
let k=document.getElementById("play_button")
// let o=document.getElementById("pp2")
let l=document.getElementsByClassName("gif")[0]
let songitem = Array.from(document.getElementsByClassName("font2"));
let p1=document.getElementById("1")

// const lol=()=>{
//    k.addEventListener('click',()=>{
//       if(audio1.paused||audio1.currentTime<=0){
//          audio1.play()
//     k.classList.remove(`fa-circle-play`);
//     k.classList.add(`fa-circle-pause`);
//     l.style.opacity=1;
//       }else{
//          audio1.pause()
//          k.classList.remove(`fa-circle-pause`);
//          k.classList.add(`fa-circle-play`);
//          l.style.opacity=0;
//       }
//    })
// }

// const lol2=()=>{
//    k.addEventListener('click',()=>{
//       if(audio2.paused||audio2.currentTime<=0){
//          audio2.play()
//     k.classList.remove(`fa-circle-play`);
//     k.classList.add(`fa-circle-pause`);
//     l.style.opacity=1;
//       }else{
//          audio2.pause()
//          k.classList.remove(`fa-circle-pause`);
//          k.classList.add(`fa-circle-play`);
//          l.style.opacity=0;
//       }
//    })
// }

// const lolu=(currentaudio)=>{
//    k.addEventListener('click',()=>{
//       if(currentaudio.paused||currentaudio.currentTime<=0){
//          currentaudio.play()
//     k.classList.remove(`fa-circle-play`);
//     k.classList.add(`fa-circle-pause`);
//     l.style.opacity=1;
//       }else{
//          currentaudio.pause()
//          k.classList.remove(`fa-circle-pause`);
//          k.classList.add(`fa-circle-play`);
//          l.style.opacity=0;
//       }
//    })
// }

let currentAudio = null; // To track the currently active audio

const initializeUniversalControl = () => {
  k.addEventListener("click", () => {
    if (currentAudio) {
      if (currentAudio.paused || currentAudio.currentTime <= 0) {
        currentAudio.play();
        k.classList.remove(`fa-circle-play`);
        k.classList.add(`fa-circle-pause`);
        l.style.opacity = 1;
      } else {
        currentAudio.pause();
        k.classList.remove(`fa-circle-pause`);
        k.classList.add(`fa-circle-play`);
        l.style.opacity = 0;
      }
    }
  });
};

initializeUniversalControl(); // Initialize the universal control functionality



// Function to reset all play/pause icons
const makeAllPlay = () => {
   songitem.forEach((element) => {
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
   });
};
const pauseaudio1 =()=>{
   audio2.pause()
   audio3.pause()
   audio4.pause()
   audio5.pause()
   audio6.pause()

}
const pauseaudio2 =()=>{
   audio1.pause()
   audio3.pause()
   audio4.pause()
   audio5.pause()
   audio6.pause()
}
const pauseaudio3 =()=>{
   audio2.pause()
   audio1.pause()
   audio4.pause()
   audio5.pause()
   audio6.pause()
}
const pauseaudio4 =()=>{
   audio2.pause()
   audio3.pause()
   audio1.pause()
   audio5.pause()
   audio6.pause()
}
const pauseaudio5 =()=>{
   audio2.pause()
   audio3.pause()
   audio4.pause()
   audio1.pause()
   audio6.pause()
}
const pauseaudio6 =()=>{
   audio2.pause()
   audio3.pause()
   audio4.pause()
   audio5.pause()
   audio1.pause()
}

p1.addEventListener('click',()=>{
makeAllPlay();
pauseaudio1();

currentAudio=audio1
// initializeUniversalControl(audio1)
   if(audio1.paused||audio1.currentTime<=0){
      audio1.play()
 p1.classList.remove(`fa-circle-play`);
 p1.classList.add(`fa-circle-pause`);

  k.classList.remove(`fa-circle-play`);
 k.classList.add(`fa-circle-pause`);

 l.style.opacity=1;
   }else{
      audio1.pause()
      p1.classList.remove(`fa-circle-pause`);
      p1.classList.add(`fa-circle-play`);

    k.classList.remove(`fa-circle-pause`);
   k.classList.add(`fa-circle-play`);
      l.style.opacity=0;
   }
})
audio1.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   progress=parseInt((audio1.currentTime/audio1.duration)*100)
   console.log(progress)
   progressbar.value=progress
})
progressbar.addEventListener('change',()=>{
   audio1.currentTime=(progressbar.value*audio1.duration)/100
})



let audio2=new Audio(`Pushpa Pushpa - Pushpa 2 The Rule 320 Kbps.mp3`);
let p2=document.getElementById("2")
p2.addEventListener('click',()=>{

   makeAllPlay();
   pauseaudio2();
 currentAudio=audio2
// initializeUniversalControl(audio2)
   if(audio2.paused||audio2.currentTime<=0){
      audio2.play()
 p2.classList.remove(`fa-circle-play`);
 p2.classList.add(`fa-circle-pause`);

  k.classList.remove(`fa-circle-play`);
 k.classList.add(`fa-circle-pause`);

 l.style.opacity=1;
   }else{
      audio2.pause()
      p2.classList.remove(`fa-circle-pause`);
      p2.classList.add(`fa-circle-play`);

    k.classList.remove(`fa-circle-pause`);
   k.classList.add(`fa-circle-play`);
      l.style.opacity=0;
   }
})
audio2.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   progress=parseInt((audio2.currentTime/audio2.duration)*100)
   console.log(progress)
   progressbar.value=progress
})
progressbar.addEventListener('change',()=>{
   audio2.currentTime=(progressbar.value*audio2.duration)/100
})





let audio3=new Audio(`King Shit - Leo 320 Kbps.mp3`);
 p3=document.getElementById("3")
p3.addEventListener('click',()=>{
makeAllPlay();
pauseaudio3();
currentAudio=audio3
   if(audio3.paused||audio3.currentTime<=0){
      audio3.play()
 p3.classList.remove(`fa-circle-play`);
 p3.classList.add(`fa-circle-pause`);

  k.classList.remove(`fa-circle-play`);
 k.classList.add(`fa-circle-pause`);

 l.style.opacity=1;
   }else{
      audio3.pause()
      p3.classList.remove(`fa-circle-pause`);
      p3.classList.add(`fa-circle-play`);

    k.classList.remove(`fa-circle-pause`);
   k.classList.add(`fa-circle-play`);
      l.style.opacity=0;
   }
})
audio3.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   progress=parseInt((audio3.currentTime/audio3.duration)*100)
   console.log(progress)
   progressbar.value=progress
})
progressbar.addEventListener('change',()=>{
   audio3.currentTime=(progressbar.value*audio3.duration)/100
})




let audio4=new Audio(`Cheques - Still Rollin 320 Kbps.mp3`);
 p4=document.getElementById("4")
p4.addEventListener('click',()=>{
makeAllPlay();
pauseaudio4();
currentAudio=audio4
   if(audio4.paused||audio4.currentTime<=0){
      audio4.play()
 p4.classList.remove(`fa-circle-play`);
 p4.classList.add(`fa-circle-pause`);

  k.classList.remove(`fa-circle-play`);
 k.classList.add(`fa-circle-pause`);

 l.style.opacity=1;
   }else{
      audio4.pause()
      p4.classList.remove(`fa-circle-pause`);
      p4.classList.add(`fa-circle-play`);

    k.classList.remove(`fa-circle-pause`);
   k.classList.add(`fa-circle-play`);
      l.style.opacity=0;
   }
})
audio4.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   progress=parseInt((audio4.currentTime/audio4.duration)*100)
   console.log(progress)
   progressbar.value=progress
})
progressbar.addEventListener('change',()=>{
   audio4.currentTime=(progressbar.value*audio4.duration)/100
})





let audio5=new Audio(`Kissik - Pushpa 2 The Rule 320 Kbps.mp3`);
 p5=document.getElementById("5")
p5.addEventListener('click',()=>{
makeAllPlay();
pauseaudio5();
currentAudio=audio5
   if(audio5.paused||audio5.currentTime<=0){
      audio5.play()
 p5.classList.remove(`fa-circle-play`);
 p5.classList.add(`fa-circle-pause`);

  k.classList.remove(`fa-circle-play`);
 k.classList.add(`fa-circle-pause`);

 l.style.opacity=1;
   }else{
      audio5.pause()
      p5.classList.remove(`fa-circle-pause`);
      p5.classList.add(`fa-circle-play`);

    k.classList.remove(`fa-circle-pause`);
   k.classList.add(`fa-circle-play`);
      l.style.opacity=0;
   }
})
audio5.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   progress=parseInt((audio5.currentTime/audio5.duration)*100)
   console.log(progress)
   progressbar.value=progress
})
progressbar.addEventListener('change',()=>{
   audio5.currentTime=(progressbar.value*audio5.duration)/100
})





let audio6=new Audio(`Aaj Ki Raat - Stree 2 320 Kbps.mp3`);
 p6=document.getElementById("6")
p6.addEventListener('click',()=>{
makeAllPlay();
pauseaudio6();
currentAudio=audio6
   if(audio6.paused||audio6.currentTime<=0){
      audio6.play()
 p6.classList.remove(`fa-circle-play`);
 p6.classList.add(`fa-circle-pause`);

  k.classList.remove(`fa-circle-play`);
 k.classList.add(`fa-circle-pause`);

 l.style.opacity=1;
   }else{
      audio6.pause()
      p6.classList.remove(`fa-circle-pause`);
      p6.classList.add(`fa-circle-play`);

    k.classList.remove(`fa-circle-pause`);
   k.classList.add(`fa-circle-play`);
      l.style.opacity=0;
   }
})
audio6.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   progress=parseInt((audio6.currentTime/audio6.duration)*100)
   console.log(progress)
   progressbar.value=progress
})
progressbar.addEventListener('change',()=>{
   audio6.currentTime=(progressbar.value*audio6.duration)/100
})





