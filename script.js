var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");

      function opentab(tabname){
        for(tablink of tablinks){
          tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
      }
const video = document.getElementById('backgroundVideo');
// Define the start and end points for the loop (in seconds)
        const loopStart = 8.7; // Start looping at 5 seconds
        const loopEnd = 16.7; // End looping at 10 seconds

        // Event listener for time updates
        video.addEventListener('timeupdate', () => {
            // Check if current time exceeds loop end time
            if (video.currentTime >= loopEnd) {
                video.currentTime = loopStart; // Reset to loop start
                video.play(); // Continue playing
            }
          });

          
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

// window.addEventListener('DOMContentLoaded', () => {
//   const video = document.getElementById('backgroundVideo');

//   const isMobile = window.innerWidth <= 768;

//   const source = isMobile
//   ? 'video1.mkv'
//   : 'video2com.mp4';

//   video.src = source;
//   video.load();
//   video.play();
// });
