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
  const mobileQuery = window.matchMedia("(max-width: 768px)");

  function setupVideo(isMobile) {
    let source, loopStart, loopEnd;

    if (isMobile) {
      source = "video1_fixed.mp4";
      loopStart = 6;
      loopEnd = 13;
    } else {
      source = "video2.mp4";
      loopStart = 8.7;
      loopEnd = 16.7;
    }

    // Set the video source only if it's different to prevent unnecessary reloads
    if (video.src.indexOf(source) === -1) {
      video.src = source;
      video.load();
    }

    // This is the correct and efficient looping method
    video.addEventListener("timeupdate", function loopVideo() {
      if (this.currentTime >= loopEnd) {
        this.currentTime = loopStart;
        this.play();
      }
    });

    // Ensure the video plays on first load
    video.play();
  }

  // Initial check on page load
  setupVideo(mobileQuery.matches);

  // Add listener for screen size changes
  mobileQuery.addListener(e => setupVideo(e.matches));
});