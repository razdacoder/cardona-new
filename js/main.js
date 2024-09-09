$(document).ready(function () {
  // When the toggle button is clicked
  $("#nav-toggle").click(function () {
    // Toggle the visibility of the navigation menu
    $("#mobile-nav").slideToggle();
  });

  var currentIndex = 0;
  var totalItems = $(".single-slider").length;
  var itemWidth = $(".single-slider").outerWidth();
  var autoplaySpeed = 3000; // 3 seconds

  function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0; // Loop back to the first item
    }
    $(".hero-slider").css(
      "transform",
      "translateX(" + -itemWidth * currentIndex + "px)"
    );
  }

  function goToPreviousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1; // Loop back to the last item
    }
    $(".hero-slider").css(
      "transform",
      "translateX(" + -itemWidth * currentIndex + "px)"
    );
  }

  $("#next").click(function () {
    goToNextSlide();
  });

  // Click event for previous button
  $("#prev").click(function () {
    goToPreviousSlide();
  });

  var autoplay = setInterval(goToNextSlide, autoplaySpeed);

  // Stop autoplay on hover
  $(".hero-slider").hover(
    function () {
      clearInterval(autoplay); // Pause autoplay on mouse hover
    },
    function () {
      autoplay = setInterval(goToNextSlide, autoplaySpeed); // Resume autoplay when hover ends
    }
  );

  $(".counter").each(function () {
    var $counter = $(this); // Current counter element
    var target = parseInt($counter.attr("data-target")); // Target number
    var current = 0;
    var increment = target / 100; // Speed of counting (can be customized per counter)
    var duration = 2000; // Duration in milliseconds
    var interval = duration / (target / increment); // Time per increment

    // Function to update the current counter
    function updateCounter() {
      current += increment;
      if (current >= target) {
        current = target; // Stop at the target number
        clearInterval(counterInterval); // Stop the interval
      }
      $counter.text(Math.floor(current)); // Update the displayed number
    }

    // Start the count up animation
    var counterInterval = setInterval(updateCounter, interval);
  });

  $(".portfolio-row").slick({
    slidesToShow: 4, // Show 4 items on desktop view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".clients-row").slick({
    slidesToShow: 5, // Show 4 items on desktop view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".accordion .content").hide();

  $(".accordion").each(function () {
    var accordion = $(this); // Scope to each accordion

    // Open the first accordion item in the first section
    if (accordion.closest(".accordion-section").index() === 0) {
      accordion.find(".accordion-item:first-child .content").show(); // Show the first content
      accordion
        .find(".accordion-item:first-child .trigger i")
        .removeClass("fa-plus")
        .addClass("fa-minus"); // Change icon to minus
      accordion.find(".accordion-item:first-child .trigger").addClass("active"); // Add active class to first trigger
    }

    // Toggle content within the specific accordion section
    accordion.find(".trigger").click(function () {
      // Toggle the plus/minus icon for the clicked trigger
      $(this).find("i").toggleClass("fa-plus fa-minus");

      // Toggle the content visibility for the clicked item
      $(this).next(".content").slideToggle(300);

      // Close other accordion items within the same section
      accordion.find(".content").not($(this).next()).slideUp(300);

      // Reset icons for other triggers within the same section
      accordion
        .find(".trigger")
        .not($(this))
        .find("i")
        .removeClass("fa-minus")
        .addClass("fa-plus");

      // Toggle 'active' class to change background color
      $(this).toggleClass("active");
      accordion.find(".trigger").not($(this)).removeClass("active");
    });
  });
});
