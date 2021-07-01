/* FAQ show/hide answer */
var faqQuestion = $(".faq-question")
faq = [0,0,0]

function show_faq(id) {
    console.log("clicked")
    console.log(faq[id-1])
    if (faq[id-1] == 0) {
        document.getElementById("ans-"+id).style.display = "block"
        faq[id-1] = 1
    }
    else {
        document.getElementById("ans-"+id).style.display = "none"
        faq[id-1] = 0
    }
}

for(i=0; i<faqQuestion.length; i++) {
    faqQuestion[i].addEventListener("click", function() {
        var id = this.getAttribute("id").slice(-1)
        show_faq(id)
    })
}

/* Fade in animation */
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
  
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

/* Web Sticky Header */
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
var content = $("#intro");
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
}
