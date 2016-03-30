var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    if (year !== "" && !$.isNumeric(year)) { //Can tell if input contains at least one number

      alert("Please enter a valid year.")
    }
    else if (year <= 0) { //Determine if year is positive

      alert(year+" is negative number, please try again.")
    }
    else {

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    }
  });
});
