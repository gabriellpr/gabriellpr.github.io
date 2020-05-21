$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    var listText = $(this).val();
    $(this).val("");
    $(".container ul").append(
      "<li><span><i class='fa fa-trash'></i></span>" + listText + "</li>"
    );
  }
});
$("input[type='text']").on("click", function (e) {
  if (e.which === 13) {
    var listText = $(this).val();
    $(this).val("");
    $(".container ul").append(
      "<li><span><i class='fa fa-trash'></i></span>" + listText + "</li>"
    );
  }
});

$("li").on("click", "i", function () {
  $(this).remove();
});

$("#toggle").click(function () {
  $("input[type='text']").fadeToggle();
});
