$(document).ready(function () {
  $(".click").click(function () {
    alert("Nice you clicked a button!");
  });
  $(".hide button").click(function () {
    $(".hide p").hide(1000);
  });
  $(".show button").click(function () {
    $(".show .inivisible").show();
  });
});
