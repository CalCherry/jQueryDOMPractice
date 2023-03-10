// When the DOM is ready, console.log the message ?Let?s get ready to party with jQuery!?
$(function () {
    console.log("Let's get ready to jQuery!")
})

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');

//Remove the last paragraph in the article.
$('p').last().remove();

//Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css('font-size', Math.random() * 100);

//Add an item to the list; it can say whatever you want.
$('ol').append("<li>I'm a new li!</li>")

//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list?s existence.
$('aside').empty().append("<p>I apologize for this list's existence</p>")

//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on("keyup blur change", function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(0).val();
    let green = $(".form-control").eq(0).val();
    $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
});

//Add an event listener so that when you click on the image, it is removed from the DOM.
$("img").on("click", function (e) {
    $(e.target).remove();
});