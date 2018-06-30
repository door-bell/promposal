$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/* Trigger animation when in viewport */
$(".preanimation").inviewport({
  threshold: 50,
  className: 'animate'
});

$(window).scroll(async function() {
  if($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
   	/* Code for when she scrolls to the bottom */
   	// Scroll to top
   	$('html, body').animate({
        scrollTop: 0
    }, 500);
    // Send away elements
   	var left = true;
   	var animatedElements = document.querySelectorAll("h1,h2,h3,h4,a,img,p,li");
   	for (var i = 0; i < animatedElements.length; i++) {
   		var element = animatedElements[i];
   		if (left) {
   			$(element).addClass("animate-away-left");
   			left = false;
   		}
   		else {
   			$(element).addClass("animate-away-right");
   			left = true;
   		}
   		await sleep(50);
   	}

   	$("#prom").html('<div class="prom-header">Bella Sigman:</div><div class="prom-text">Prom?</div>');
   	$("#prom").addClass("animate");
   	$(".prom-header").addClass("animate-in-left");
   	$(".prom-text").addClass("animate-in-right");
  }
});
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}