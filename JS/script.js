$(document).ready(function () {
  $(".nav-btn").click(function () {
    $(".nav-link").toggleClass("transform0");
  });
});

$(document).ready(function () {
  // Function to animate the list
  function animateList() {
    // Apply transformation to move the list to 0%
    $("#myList").css("transform", "translateX(0)");

    // After 5 seconds, move the list to -50%
    setTimeout(function () {
      $("#myList").css("transform", "translateX(-50%)");

      // After another 5 seconds, return the list to 0%
      setTimeout(function () {
        $("#myList").css("transform", "translateX(0)");
      }, 5000);
    }, 5000);
  }

  // Call the animateList function initially
  animateList();

  // Call the animateList function every 11 seconds (5 seconds + 5 seconds + 1 second buffer)
  setInterval(animateList, 11000);
}, 9000);
