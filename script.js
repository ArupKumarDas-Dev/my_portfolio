var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("backgroundVideo");
  const isMobile = window.innerWidth <= 768;

  // Make sure your video files are encoded with universal codecs like H.264
  const source = isMobile ? "video1_fixed.mp4" : "video2.mp4";
  video.src = source;
  video.load();

  let loopStart, loopEnd;

  if (isMobile) {
    loopStart = 6;
    loopEnd = 13;
  } else {
    loopStart = 8.7;
    loopEnd = 16.7;
  }

  function checkLoop() {
    if (video.currentTime >= loopEnd) {
      video.currentTime = loopStart;
    }
    if (!video.paused) {
      requestAnimationFrame(checkLoop);
    }
  }

  video.addEventListener("play", () => {
    requestAnimationFrame(checkLoop);
  });
});
// This video provides a guide to troubleshooting various video playback problems on Windows, including issues with video not showing on your computer. [Fix All Problems of Video Not Playing in Windows](https://www.youtube.com/watch?v=1eN18Zc8I0Y)
// http://googleusercontent.com/youtube_content/0