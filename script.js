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

  const source = isMobile ? "video1.mp4" : "video2com.mp4";
  video.src = source;
  video.load();

  let loopStart, loopEnd;
  
  // Conditional logic to set loop points based on the video source
  if (isMobile) {
    loopStart = 6;
    loopEnd = 12.7;
  } else {
    loopStart = 8.7;
    loopEnd = 16.7;
  }

  // Function to handle the looping logic
  function checkLoop() {
    if (video.currentTime >= loopEnd) {
      video.currentTime = loopStart;
    }
    // Continue the loop only if the video is playing
    if (!video.paused) {
      requestAnimationFrame(checkLoop);
    }
  }

  // Event listener to start the loop check when the video is playing
  video.addEventListener("play", () => {
    requestAnimationFrame(checkLoop);
  });
});