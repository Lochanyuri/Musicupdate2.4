const h4 = document.querySelector(".box3 h4");
const audio = document.getElementById("audioframe");
let durationT = document.querySelector(".duration");
let box44 = document.querySelector(".box44");
const currentTim = document.getElementById("currentTim");
const durationTim = document.getElementById("durationTim");
const inmgsrc = document.querySelector(".box2  img");
let playbox = document.querySelector("#playbox");
let musicplacebox = document.getElementById("musicplacebox");
let menubox = document.querySelector(".menubox");
let contentImg = document.querySelector("#contentImg");
let body = document.querySelector("body");


let play = "8374917.png";
let audioIndex = 0;
let playing = false; // Track the playing state

// Function to format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

//slide next prev tools
let offset, firstTouch, presentTouch;
contentImg.addEventListener("touchstart", (e) => {
  firstTouch = e.touches[0].clientX;
});
contentImg.addEventListener("touchmove", (e) => {
  presentTouch = e.touches[0].clientX;
  offset = presentTouch - firstTouch;
  console.log(offset);
});
contentImg.addEventListener("touchend", () => {
  if (offset > 60) {
    prevBtn();
  }
  if (offset < -60) {
    nextBtn();
  }
});

// Function to update UI
function updateUI() {
  const { currentTime, duration } = audio;
  if (duration) {
    const progressWidth = (currentTime / duration) * 100;
    durationT.style.width = `${progressWidth}%`;
    // progress.style.width = `${currentTime / duration * 100}%`;
    durationTim.textContent = formatTime(duration);
    currentTim.textContent = formatTime(currentTime);
  }
}

// Play button function
function playBtn(box) {
  playing = !playing;
  if (playing) {
    box.src = "8374917.png";
    playbox.name = "8374917.png";
    h4.innerHTML = `${musicbox[audioIndex].songName}`;
    audio.src = `${musicbox[audioIndex].audio}`;

    audio.play();
  } else {
    box.src = "10860787.png";
    playbox.name = "10860787.png";
    audio.pause();
  }
}

// Next button function
function nextBtn(box) {
  audioIndex = (audioIndex + 1) % musicbox.length;
  h4.innerHTML = `${musicbox[audioIndex].songName}`;
  audio.src = `${musicbox[audioIndex].audio}`;
  inmgsrc.src = `${musicbox[audioIndex].photo}`;
  body.style.backgroundImage = `url(${musicbox[audioIndex].photo})`;
  if (playbox.name == "8374917.png") {
    audio.play();
  }
}

// Previous button function
function prevBtn(box) {
  audioIndex = (audioIndex - 1 + musicbox.length) % musicbox.length;
  h4.innerHTML = `${musicbox[audioIndex].songName}`;
  audio.src = `${musicbox[audioIndex].audio}`;
  inmgsrc.src = `${musicbox[audioIndex].photo}`;
  body.style.backgroundImage = `url(${musicbox[audioIndex].photo})`;
  if (playbox.name == "8374917.png") {
    audio.play();
  }
}
// Update UI when audio time updates

audio.addEventListener("timeupdate", () => {
  updateUI();
});

//Handle progress bar click
box44.addEventListener("click", (event) => {
  const { duration } = audio;
  const musicVal = (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = musicVal;
  updateUI();
});

// Additional buttons
function closeBtn() {
  window.location.href = "previous_page.html";
}
let menuindex = 0;
let musiccheckindex = 0;
function menuBtn(index) {
  menubox.style.display = "flex";
  menuindex++;
  if (menuindex == 2) {
    menubox.style.display = "none";
    menuindex = 0;
  }
  index.src = "cross.png";
  musiccheckindex++;
  if (musiccheckindex == 2) {
    index.src = "Polish_20230711_180614266.png";
    musiccheckindex = 0;
  }
}

menubox.addEventListener("click", (e) => {
  let matchtomusic = e.target.innerHTML;
  musicbox.map((a, i) => {
    if (a.songName.includes(matchtomusic)) {
      body.style.backgroundImage = `url(${musicbox[i].photo})`;
      audioIndex = i;
      inmgsrc.src = `${musicbox[i].photo}`;
      playbox.src = "8374917.png";
      playbox.name = "8374917.png";
      h4.innerHTML = `${matchtomusic}`;
      audio.src = `${musicbox[i].audio}`;
      audio.play();
    }
  });
});

let index = 0;
musicplacebox.innerHTML = musicbox
  .map((a, b) => {
    return `<div class="musicbox">
    <img height="100%" width="15%" src="${a.photo}">
    <b id="name">${a.songName}</b></div>`;
  })
  .join("");
