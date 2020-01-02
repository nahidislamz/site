
function displayTime() {
    var AP="AM";
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour -= 12;
        AP="PM";
    }
    if(hour<10){hour="0"+hour;}
    if(min<10){min="0"+min;}
    if(sec<10){sec="0"+sec;}
    var time = hour + ":" + min + ":" + sec+" "+AP;
    document.getElementById('time').innerHTML = time;
    setTimeout('displayTime()', 1000);
}

function showSlides() {
    var slideIndex = 0;
    var i;

    var slides = document.getElementsByClassName("slider");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 9000); 
}

displayTime();
showSlides();