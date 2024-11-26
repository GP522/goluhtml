!function(a){a.fn.isOnScreen=function(b){var c=this.outerHeight(),d=this.outerWidth();if(!d||!c)return!1;var e=a(window),f={top:e.scrollTop(),left:e.scrollLeft()};f.right=f.left+e.width(),f.bottom=f.top+e.height();var g=this.offset();g.right=g.left+d,g.bottom=g.top+c;var h={top:f.bottom-g.top,left:f.right-g.left,bottom:g.bottom-f.top,right:g.right-f.left};return"function"==typeof b?b.call(this,h):h.top>0&&h.left>0&&h.right>0&&h.bottom>0}}(jQuery);



$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


$(document).ready(function () {
  $('.search-icon').click(function(){
    $('.search-toggle-form').slideToggle();
  });

  $(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();
    if ( scrollValue > 200) {
         $('#headertop').addClass('fixed');
    } else{
    $('#headertop').removeClass('fixed');
  }
  });

AOS.init({
  duration: 1000,
});

//   $(".mobileNavWrapper ul>li,.navbar ul>li").find("ul").parent().prepend('<span class="hasSub"></span>');
// $(".mobileNavWrapper ul li .hasSub,.navbar ul>li .hasSub").click(function(){
// $(this).siblings("ul").slideToggle();
//    });

});

// Home banner
var owl = $('#homeslide');
owl.owlCarousel({
    items:1,
    loop:false,
    nav:false,
    dots:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:5000,
     autoplaySpeed:5000,
});


  var carouselhub1 = $('.carouselhub1'); 
  carouselhub1.owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:5000,
    margin:0,
    responsive:{
    320:{items:1},
    480:{items:1},
    600:{items:1},      
    960:{items:1},
    1200:{items:1}
    
    }
  });

  

//===========careers page=============
  var slider1 = $('.slider1'); 
  slider1.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:5000,
    margin:30,
    responsive:{
    320:{items:1},
    480:{items:1},
    600:{items:2},      
    960:{items:3},
    1200:{items:3.8}
    
    }
  });


  var slider2 = $('.slider2'); 
  slider2.owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:5000,
    margin:30,
    responsive:{
    320:{items:1},
    480:{items:1},
    600:{items:1},      
    960:{items:1},
    1200:{items:1}
    
    }
  });
















  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const timeDots = document.querySelectorAll(".time-dot");
    let currentSlide = 0;
  
    // Function to show the current slide
    function showSlide(index) {
      // Reset all slides and dots
      slides.forEach((slide) => slide.classList.remove("active"));
      timeDots.forEach((dot) => dot.classList.remove("active"));
  
      // Activate current slide and dot
      slides[index].classList.add("active");
      timeDots[index].classList.add("active");
    }
  
    // Auto-slide with interval
    function startMovieAnimation() {
      showSlide(currentSlide);
      currentSlide = (currentSlide + 1) % slides.length; // Loop through slides
    }
  
    // Start animation every 3 seconds
    setInterval(startMovieAnimation, 5000);
  
    // Initialize the first slide
    startMovieAnimation();

    
  });







// MAIN PART FOR THE VIDEO AND PLAY BUTTON

const videoContainer = document.getElementById("video-container");
const playButton = document.getElementById("play-button");

videoContainer.addEventListener("mousemove", function (event) {
	const containerRect = videoContainer.getBoundingClientRect();
	const mouseX = event.clientX - containerRect.left;
	const mouseY = event.clientY - containerRect.top;

	const buttonWidth = playButton.offsetWidth;
	const buttonHeight = playButton.offsetHeight;
	const buttonX = mouseX - buttonWidth / 2;
	const buttonY = mouseY - buttonHeight / 2;

	const maxButtonX = containerRect.width - buttonWidth;
	const maxButtonY = containerRect.height - buttonHeight;
	playButton.style.left = Math.min(Math.max(buttonX, 0), maxButtonX) + "px";
	playButton.style.top = Math.min(Math.max(buttonY, 0), maxButtonY) + "px";
});

videoContainer.addEventListener("mouseleave", function () {
	setTimeout(function () {
		playButton.style.left = "50%";
		playButton.style.top = "50%";
		playButton.style.transform = "translate(-50%, -50%) scale(1)";
		playButton.style.transition = "all 0.3s ease-out";
	}, 50);
});

videoContainer.addEventListener("mouseover", function () {
	playButton.style.transition = "transform ease-out 0.3s";
	playButton.style.transform = "scale(1.2)";
});

const video = document.getElementById("video");

videoContainer.addEventListener("mouseenter", function () {
	if (!video.paused) {
		playButton.style.opacity = "1";
	}
});

videoContainer.addEventListener("mouseleave", function () {
	if (!video.paused) {
		playButton.style.opacity = "0";
		playButton.style.transition = "opacity ease 1s";
	}
});

$("body").mousemove(function(evt){
    var x = evt.pageX - 20;
    var y = evt.pageY -20;
    $(".fancybox-close-small").css({
        "left" : x,
        "top" : y
    });
});




// search box
$(document).ready(function(){
  $("#searchflip").click(function(){
    $("#searchpanel").slideToggle("slow");
  });
});
  

  AOS.init({
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });

  

$(document).ready(function(){
  $("#fillter").click(function(){
    $("#mobilein").toggle();
  });
});


  
  







