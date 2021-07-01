/* Mobile Hamburger Menu */
var icon_open = $("header")
var hamburger_menu = $("#hamburger-menu")
var icon_close = $(".icon-close")
var menu_status = 0

function show_menu() {
    if(menu_status == 0) {
        hamburger_menu.fadeIn(200);
        hamburger_menu[0].style.display = "flex";
        $("body").addClass("overflow-hidden")
        menu_status = 1
    }
    else {
      hamburger_menu.fadeOut(200);
      $("body").removeClass("overflow-hidden")
      menu_status = 0
    }
}

const mediaQuery = window.matchMedia('(max-width: 1000px)')
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

icon_open[0].addEventListener("click", function() {
    if (mobileDevice == 1) {
        show_menu()
    }
    else {
        return
    }
})

icon_close[0].addEventListener("click", function() {
    if (mobileDevice == 1) {
        show_menu()
    }
    else {
        return
    }
})