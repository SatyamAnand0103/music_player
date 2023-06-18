var a = document.getElementById("my_Audio");

function playAudio() {
  document.getElementById("my_Audio").play();
    console.log("audio is playing");

  }

  function pauseAudio() {
    document.getElementById("my_Audio").pause();
    console.log("audio is paused");

  }

// javascript code

  var isPlaying = false; // audio is NOT playing
  
function togglePlayBtn(){

    if(isPlaying === true){ // audio is already playing
        document.getElementById("play").src="assets/images/play_grey.png";
        isPlaying = false;
        pauseAudio();
        console.log(isPlaying);
    }
    else{
        document.getElementById("play").src="assets/images/stop_grey.png";
        isPlaying= true;
        playAudio();
        console.log(isPlaying);

    }
}

//select a  song , achange background on select of song.,
//fetch song name, artist name and id of selected song using console.log
//embed in footer masterplay.
var onclick= false;



function selectThisSong(selectedSong){

  if(onclick===true){
  var a = document.getElementById(selectedSong);
  a.style.background = "rgb(37 50 59)";
   a.style['border-radius'] = "20px";
   a.style.border = "0px solid white";
  onclick=false;
  console.log();
  }

  else{
    var a = document.getElementById(selectedSong);
  a.style.background = "#161616";
   a.style['border-radius'] = "20px";
   a.style.border = "0px solid white";
   onclick=true;

  console.log();
  }

  }
  


  var  is_Playing = false;      //audio is not playing at this time.

 function appears_pause_btn(selected_song){

if( is_Playing===true){ //audio is playing at this time

   document.getElementById(selected_song).src="assets/images/play.png";
   is_Playing = false;
   pauseAudio();
}
else{
  document.getElementById(selected_song).src = "play1.png"
  is_Playing = true;
  playAudio();
}


  }
