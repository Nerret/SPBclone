/*Change button text from "Subscribe" to "Subscribed"*/

var button = document.getElementById("subscribe-button");
button.addEventListener('click', function() {
  if (button.getAttribute("text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("text-original");
  } else {
    button.setAttribute("text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("text-swap");
  }
}, false);

/*Slideshow*/

/* array with our html elements */
var slidearray = document.querySelectorAll('#slides .sliderli');
/* the current slide being showen number is respective to the li's place in the array */
var slideIndex = 0;
/* Timer for when to change image */
var slideTimer = 4000;

/* this for each runs on the array above creating a button for the respective slider li's */
slidearray.forEach(function(element, key){
  var wrapper = document.getElementById('slide-dots');
  var dot = document.createElement('LI');
  dot.setAttribute('onclick', 'dotClick('+key+')');
  wrapper.appendChild(dot);
});

/* function call */
slideDo(slideIndex, slidearray);


/* with setinterval we're telling it to run this function every x seconds based on our slideTimer
variable, inside the function we're making sure nextSlide runs under the right conditions */
setInterval(function(){
  var newIndex = slideIndex+1;
  //console.log(newIndex);
  var arraylength = slidearray.length-1;
  //console.log(arraylength);

  if(newIndex <= arraylength){
      nextSlide(slideIndex, newIndex);
  }else{
      slideDo(0, slidearray);
      slideIndex = 0;
  }
}, slideTimer);

/* core function removing and adding the visibility class to and from the first slide allowing it to reset */
function slideDo(firstIndex, slidearray){
    slidearray.forEach(function(element){
      element.classList.remove('visable');
    });
    updateLi(slidearray[firstIndex]);
}

/* changes the slide based on witch control dot is clicked key is collected from  onClick attribute */
function dotClick(key){
    nextSlide(slideIndex, key);
}

/* core function making sure no slide has the css class visable then targeting the upcoming
slide adding the visable class and updates the slideIndex variable */
function nextSlide(currentIndex, newIndex){
    slidearray.forEach(function(element){
      element.classList.remove('visable');
    });


    var slideNew = slidearray[newIndex];
    slideNew.classList.add('visable');

    slideIndex = newIndex;
}

/* updates the slider li that is to be shown so that it has the css class visable */
function updateLi(slideCurrent){
    slideCurrent.classList.add('visable');
}


/*Price slide*/
var blue = document.getElementsByClassName("blueprice");
var green = document.getElementsByClassName("greenprice");
var grey = document.getElementsByClassName("greyprice");
var deluxe = document.getElementsByClassName("greydeluxe");

function slideout(x){
x.style.transition = "margin-left 15%!important";
}
