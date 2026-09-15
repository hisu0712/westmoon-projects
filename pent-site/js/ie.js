// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

/*
var tmp = 0;

function right_M() {
    if(tmp < -500){
        return;
    }
    tmp += -610;
    document.getElementById("galley_container").style.transform= `translate(${tmp}px, 0)`;
    document.getElementById("arrow_button_right").style.display= "none";
    document.getElementById("arrow_button_left").style.display= "block";
}
function left_M() {
    if(tmp > -500){
        return;
    }
    tmp += 610;
    document.getElementById("galley_container").style.transform= `translate(${tmp}px, 0)`;
    document.getElementById("arrow_button_left").style.display= "none";
    document.getElementById("arrow_button_right").style.display= "block";
}
*/

function right_M() {
    document.getElementById("galley_container").style.right = "0";
    document.getElementById("galley_container").style.left = "unset";
    document.getElementById("arrow_button_right").style.display= "none";
    document.getElementById("arrow_button_left").style.display= "block";
}
function left_M() {
    document.getElementById("galley_container").style.left = "0";
    document.getElementById("galley_container").style.right = "unset";
    document.getElementById("arrow_button_left").style.display= "none";
    document.getElementById("arrow_button_right").style.display= "block";
}


