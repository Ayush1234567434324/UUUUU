

const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toogle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
  
});



audio1 = new  Audio("Audio/Audio1.mp3");





let x=0,tot;
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
   tot= movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", () => {
    
    x++;
 movieLists[i].style.transform = `translate(${-344*x}px)`;
 audio1.play();
 if( tot-4 <=x)
    {
     x=-1;
    
    }

 
  });

  
});




const brrows = document.querySelectorAll(".brrow");
const movielists = document.querySelectorAll(".movie-list");

brrows.forEach((brrow, i) => {
  
  brrow.addEventListener("click", () => {
    audio1.play();
    x--;
 movielists[i].style.transform = `translate(${-344*x}px)`;
 if(x==-1)
    {
      x=tot-4;
      movielists[i].style.transform = `translate(${-344*x}px)`;
      
    }
    
 
  });


});



  
const trailer = document.querySelectorAll(".trailer");
const video = document.querySelectorAll("video");
  

function toggle()
{
  
  var  buttons = document.getElementsByClassName("featured-button");
  var buttonsCount = buttons.length;
  for (var i = 0; i < buttonsCount; i++) {
      buttons[i].onclick = function(e) {
        trailer[this.id].classList.toggle("active");
          document.getElementsByClassName("close")[this.id]
             .addEventListener("click", function (e) {
               trailer[this.id].classList.remove("active");
               video[this.id].pause();
         
             });
           
      
       
      };
    }
  
  
  audio1.play();
  audio1.playbackRate=1.5;




}

