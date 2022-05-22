var i;
//clik
for(i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        var letter=this.innerHTML;
        clkme(letter);
        btnanimation(letter);
    });
}

//keyboard
document.addEventListener("keydown",function(event)
{
    clkme(event.key);
    btnanimation(event.key)
});

//sound
function clkme(alpha) 
{
   
   switch (alpha) {
       case "w":
           var audio= new Audio("/sounds/tom-1.mp3");
           audio.play();
           break;
       case "a":
        var audio= new Audio("/sounds/tom-2.mp3");
        audio.play();
           break;
       case "s":
        var audio= new Audio("/sounds/tom-3.mp3");
        audio.play();
           break;
       case "d":
        var audio= new Audio("/sounds/tom-4.mp3");
        audio.play();
           break;
       case "j":
        var audio= new Audio("/sounds/snare.mp3");
        audio.play();
           break;
       case "k":
        var audio= new Audio("/sounds/crash.mp3");
        audio.play();
           break;
       case "l":
        var audio= new Audio("/sounds/kick-bass.mp3");
        audio.play();
           break;
   
       default:
           break;
   }
}

//animation
function btnanimation(alpha)
{
var cls=document.querySelector("."+alpha);
cls.classList.add("pressed");
setTimeout(function(){cls.classList.remove("pressed");},100);
}