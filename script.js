// chaning song using right portion
var n = 1;
document.querySelector(".song-col"+n).classList.add("a1");
document.querySelector(".play-button").addEventListener("click",playFunction);
function playFunction(){
   var x = document.querySelector(".song").currentTime;
   var y = document.querySelector(".song").paused;
 if(x == 0 || y == 1 ){
//   alert("song will play");
  document.querySelector(".song").play();
  document.querySelector(".play-button").innerHTML="pause_circle";
  document.querySelector(".left-play"+n).innerHTML="pause_circle";
 }
 else{
    document.querySelector(".song").pause();
    document.querySelector(".play-button").innerHTML="play_arrow";
    document.querySelector(".left-play"+n).innerHTML="play_arrow";
 }
}
document.querySelector(".previous-button").addEventListener("click", previousFunction);
function previousFunction(){
    var x = document.querySelector(".song").currentTime;
    if(x > 0){
        document.querySelector(".song").currentTime=0;
    }
    else{
        document.querySelector(".left-play"+n).innerHTML="play_arrow";
        document.querySelector(".song-col"+n).classList.remove("a1");
        n = n-1; 
        document.querySelector(".song").setAttribute('src',"music/song"+n+".mp3");
        document.querySelector(".playing").setAttribute('src',"images/image"+n+".jpg");
        document.querySelector(".song-col"+n).classList.add("a1");
        
    }
}
document.querySelector(".skip-button").addEventListener("click", skipFunction);
function skipFunction(){
    document.querySelector(".left-play"+n).innerHTML="play_arrow";
   
    document.querySelector(".song-col"+n).classList.remove("a1");
    n=n+1;
    document.querySelector(".song").setAttribute('src',"music/song"+n+".mp3");
    
    document.querySelector(".playing").setAttribute('src',"images/image"+n+".jpg");
   
    document.querySelector(".song-col"+n).classList.add("a1");
}

 