$(window).on("scroll", function () {

    function myFunction(x) {
        if (x.matches) { // If media query matches
            if ($(window).scrollTop() > 50) {
                $(".header").addClass("active");
                $(".icon a").css("color", "black");
                $(".nav_item a").css("color", "black");
                $(".logo").css("color", "black");
                $(".overlay").css("background", "White");
                $("#closebtn").css("color", "black");
                $(' #free_btn ').css("color", "white");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".header").removeClass("active");
                $(".icon a").css("color", "White");
                $(".nav_item a").css("color", "White");
                $(".logo").css("color", "White");
                $(".overlay").css("background", "black");
                $("#closebtn").css("color", "white");
                $(' #free_btn ').css("color", "white");
            }
        } else {
            if ($(window).scrollTop() > 50) {
                $(".header").addClass("active");
                $(".icon a").css("color", "black");
                $(".nav_item a").css("color", "black");
                $(".overlay").css("background", "White");
                $(".logo").css("color", "black");
                $("#closebtn").css("color", "black");
                $(' #free_btn ').css("color", "white");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".header").removeClass("active");
                $(".icon a").css("color", "White");
                $(".nav_item a").css("color", "White");
                $(".overlay").css("background", "black");
                $(".logo").css("color", "White");
                $("#closebtn").css("color", "white");
                $(' #free_btn ').css("color", "white");
            }
        }
    }

    var x = window.matchMedia("(max-width: 500px)")

    myFunction(x) // Call listener function at run time

    x.addListener(myFunction) // Attach listener function on state changes



});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




// Smooth scroll

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});




$(document).ready(function () {
    //   $(".faq_disc").hide();
    //   $('.faq_title h3').click(function () {
    //     var index = $(this).index(),
    //         newTarget = $('.faq_disc').eq(index).slideDown();
    //     $('.faq_disc').not(newTarget).slideUp();

    // });

    $("img.lazy").lazyload();


    // $(".faq_disc").hide();
    // $(".faq_title h3").click(function(){
    //     $(".faq_disc").slideDown();
    // });
    $(".slide-down").click(function () {
        $(".faq_disc").slideUp();
    });

    $(".faq_disc").hide();
    $('.faq_title').click(function () {
        $(this).next('.faq_disc').slideToggle();
    });


});