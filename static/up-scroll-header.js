var mobileDevice = 0
function detectDevice(e) {
    if(e.matches) {
        console.log("media query matches")
        console.log(mobileDevice)
        mobileDevice = 1
    }
    else {
        console.log("doesn't match")
        console.log(mobileDevice)
    }
}
mediaQuery.addListener(detectDevice)
detectDevice(mediaQuery)

if(mobileDevice == 0) {
    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = $("header");

    var checkScroll = function() {

        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */

        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) { 
          //scrolled up
          direction = 2;
        }
        else if (curScroll < prevScroll) { 
          //scrolled down
          direction = 1;
        }

        if (direction !== prevDirection) {
          toggleHeader(direction, curScroll);
        }
        
        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 52) { 
            header.fadeOut(200);
            header[0].classList.add('hide');
            prevDirection = direction;
        }
        else if (direction === 1) {
            header.fadeIn(200);
            header[0].classList.remove('hide');
            prevDirection = direction;
        }
    };
    window.addEventListener('scroll', checkScroll);
}

/* Web Sticky Header 
var mobileDevice = 0
function detectDevice(e) {
    if(e.matches) {
        console.log("media query matches")
        console.log(mobileDevice)
        mobileDevice = 1
    }
    else {
        console.log("doesn't match")
        console.log(mobileDevice)
    }
}

window.onscroll = function() {stickyHeader()};

var header = $("#header");
var content = $("#vote");
var sticky = content[0].offsetTop; //content的頂部Y

if (mobileDevice == 0) {
    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.fadeIn(200);
            header[0].style.display = "block";
        }
        else {
            header.fadeOut(200);
            header[0].style.display = "none";
        }
    }
}*/