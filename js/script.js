let SlideDiv = document.querySelector('.sliderDiv');
let YellowDot = document.querySelector('.progressDot');
function moveWindow(num){
    YellowDot.style.transitionDuration = "0.5s";
    if(num == 1){
        // YellowDot.style.right = "";
        // YellowDot.style.left = "20px";
        YellowDot.style.transform = ""
        YellowDot.style.left = "20px";
        
        SlideDiv.style.transform = "";
    }
    else if(num == 2){
        YellowDot.style.left = "";
    //    YellowDot.style.right = "20px";
       YellowDot.style.transform = "translateX(70svw)"
       
       SlideDiv.style.transform = "translateX(-100svw)";
    }
}




//switch between boxes every 13 secs
setInterval(function () { moveWindow(2);}, 13000);

function myGreeting() {
setInterval(function () { moveWindow(1);}, 13000);
}

//delay the second switch by 6.5 sec
const myTimeout = setTimeout(myGreeting, 6500);