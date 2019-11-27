$(window).on("scroll", function() {
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("active");
        $(".icon a").css("color", "black");
        $(".nav_item a").css("color", "black");
        $(".nav_item a span").css("color", "black");
        $(".nav_item a i").css("color", "black");
        $(" #free_btn ").css({
          "border-color": "#000000",
          "border-width": "1px",
          "border-style": "solid"
        });
        $(".logo").css("color", "black");
        $(".overlay").css("background", "White");
        $("#closebtn").css("color", "black");
        $(" #free_btn ").css("color", "white");
        $("#logo").attr("src", "images/logo_scrool.png");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
        $(".icon a").css("color", "White");
        $(".nav_item a").css("color", "White");
        $(".nav_item a span").css("color", "white");
        $(".nav_item a i").css("color", "white");
        $(" #free_btn ").css({
          "border-color": "white",
          "border-width": "1px",
          "border-style": "solid"
        });
        $(".logo").css("color", "White");
        $(".overlay").css("background", "black");
        $("#closebtn").css("color", "white");
        $(" #free_btn ").css("color", "white");
        $("#logo").attr("src", "images/logo.png");
      }
    } else {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("active");
        $(".icon a").css("color", "black");
        $(".nav_item a").css("color", "black");
        $(".nav_item a span").css("color", "black");
        $(".nav_item a i").css("color", "black");
        $(" #free_btn ").css({
          "border-color": "#000000",
          "border-width": "1px",
          "border-style": "solid"
        });
        $(".overlay").css("background", "White");
        $(".logo").css("color", "black");
        $("#closebtn").css("color", "black");
        $(" #free_btn ").css("color", "white");
        $("#logo").attr("src", "images/logo_scrool.png");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
        $(".icon a").css("color", "White");
        $(".nav_item a").css("color", "White");
        $(".nav_item a span").css("color", "white");
        $(".nav_item a i").css("color", "white");
        $(" #free_btn ").css({
          "border-color": "white",
          "border-width": "1px",
          "border-style": "solid"
        });
        $(".overlay").css("background", "black");
        $(".logo").css("color", "White");
        $("#closebtn").css("color", "white");
        $(" #free_btn ").css("color", "white");
        $("#logo").attr("src", "images/logo.png");
      }
    }
  }

  var x = window.matchMedia("(max-width: 500px)");

  myFunction(x); // Call listener function at run time

  x.addListener(myFunction); // Attach listener function on state changes
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Smooth scroll

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function() {
  var plus = "images/plus2x.png";
  var minus = "images/minus2x.png";

  $(".faq_disc").hide();
  $(".fun-img-p").hide();
  $(".faq_title").click(function() {
    $(this)
      .next(".faq_disc")
      .slideToggle();
    if (
      $(this)
        .children(".plus_minu")
        .children("img")
        .attr("src") == minus
    ) {
      $(this)
        .children(".plus_minu")
        .children("img")
        .attr("src", plus);
    } else {
      $(this)
        .children(".plus_minu")
        .children("img")
        .attr("src", minus);
    }
  });
  $("img.lazy").lazyload();
});

$(window).on("scroll", function() {
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      if ($(window).scrollTop() > 50) {
        $(".header2").addClass("active");
        $(".icon2 a").css("color", "black");
        $(".nav_item2 a").css("color", "black");
        $(".nav_item2 a span").css("color", "black");
        $(".nav_item2 a i").css("color", "black");
        $(".logo2").css("color", "black");
        $(".overlay2").css("background", "White");
        $("#closebtn2").css("color", "black");
        $(" #free_btn2 ").css("color", "white");
        $(" #free_btn2 ").css({
          "border-color": "#000000",
          "border-width": "1px",
          "border-style": "solid"
        });
        $("#logo2").attr("src", "images/logo_scrool.png");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header2").removeClass("active");
        $(".icon2 a").css("color", "black");
        $(".nav_item2 a").css("color", "white");
        $(".nav_item2 a span").css("color", "white");
        $(".nav_item2 a i").css("color", "white");
        $(".logo2").css("color", "White");
        $(".overlay2").css("background", "black");
        $("#closebtn2").css("color", "white");
        $(" #free_btn2 ").css("color", "white");
        $(" #free_btn2 ").css({
          "border-color": "#ffffff",
          "border-width": "1px",
          "border-style": "solid"
        });
        $("#logo2").attr("src", "images/logo_scrool.png");
      }
    } else {
      if ($(window).scrollTop() > 50) {
        $(".header2").addClass("active");
        $(".icon2 a").css("color", "black");
        $(".nav_item2 a").css("color", "black");
        $(".nav_item2 a span").css("color", "black");
        $(".nav_item2 a i").css("color", "black");
        $(".overlay2").css("background", "White");
        $(".logo2").css("color", "black");
        $("#closebtn2").css("color", "black");
        $(" #free_btn2 ").css("color", "white");
        $(" #free_btn2 ").css({
          "border-color": "#000000",
          "border-width": "1px",
          "border-style": "solid"
        });
        $("#logo2").attr("src", "images/logo_scrool.png");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header2").removeClass("active");
        $(".icon2 a").css("color", "white");
        $(".nav_item2 a").css("color", "black");
        $(".nav_item2 a span").css("color", "black");
        $(".nav_item2 a i").css("color", "black");
        $(".overlay2").css("background", "black");
        $(".logo2").css("color", "White");
        $("#closebtn2").css("color", "black");
        $(" #free_btn2 ").css("color", "white");
        $(" #free_btn2 ").css({
          "border-color": "#000000",
          "border-width": "1px",
          "border-style": "solid"
        });
        $("#logo2").attr("src", "images/logo_scrool.png");
      }
    }
  }

  var x = window.matchMedia("(max-width: 500px)");

  myFunction(x); // Call listener function at run time

  x.addListener(myFunction); // Attach listener function on state changes
});
