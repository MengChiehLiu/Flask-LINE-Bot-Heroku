/* Show Form */
var btn_show = $("#btn-show")
var form_write = $("#form-write")

function showForm() {
    console.log("show form")
    btn_show.fadeOut(200)
    setTimeout(function(){
        form_write.fadeIn(200)
    }, 200);
}

function closeForm() {
    console.log("close form")
    form_write.fadeOut(200)
    setTimeout(function(){
        btn_show.fadeIn(200)
    }, 200);
}

/* Tag Radio Buttons */
$('#form-write input').on('change', function() {
    var allRadio = $(".selected-content")
    //console.log(allRadio)
    for (var i=0; i < allRadio.length; i++) {
        //console.log(allRadio[i])
        allRadio[i].style.background = "rgba(246, 247, 251, 0.08)"
        allRadio[i].style.border = "2px solid rgba(246, 247, 251, 0.8)"
    }
    var selectedRadio = $("input[name=selected-item]:checked", "#form-write")
    //console.log(selectedRadio.val());
    var id = selectedRadio.attr("id").slice(-1)
    var selectedContent = document.getElementById("selected-content-"+id)
    //console.log(selectedContent)
    selectedContent.style.background = "rgba(246, 247, 251, 0.12)"
    selectedContent.style.border = "4px solid #FFDA79"
    document.getElementById("tag").value = selectedRadio.val()
    console.log("value: "+document.getElementById("tag").value)
});

/* Change Tag Icons */
var icon_book = document.getElementById("refresh-book")
var icon_sports = document.getElementById("refresh-sports")

var id_book = 1
var id_sports = 1

icon_book.addEventListener("click", function() {
    //console.log("current book id"+id_book)
    //console.log("clicked")
    if (id_book >= 2) {
        id_book = 1
    }
    else {
        id_book += 1
    }
    //console.log("new book id"+id_book)

    $("#icon-book")[0].src = "/static/icon/icon-book-"+id_book+".png"
    $("#selected-item-4")[0].value = "/static/icon/icon-book-"+id_book+".png"
    document.getElementById("tag").value = $("#selected-item-4")[0].value
    console.log("value: "+document.getElementById("tag").value)
})

icon_sports.addEventListener("click", function() {
    //console.log("current sports id"+id_book)
    //console.log("clicked")
    if (id_sports >= 4) {
        id_sports = 1
    }
    else {
        id_sports += 1
    }
    //console.log("new sports id"+id_sports)

    $("#icon-sports")[0].src = "/static/icon/icon-sports-"+id_sports+".png"
    $("#selected-item-6")[0].value = "/static/icon/icon-sports-"+id_sports+".png"
    document.getElementById("tag").value = $("#selected-item-6")[0].value
    console.log("value: "+document.getElementById("tag").value)
})
 
/* Navigation Dots */
var tag1 = document.getElementById("selected-content-1")
var tag1_rect = tag1.getBoundingClientRect()
console.log("rect:"+tag1_rect.left+tag1_rect.top+tag1_rect.right+tag1_rect.bottom)
