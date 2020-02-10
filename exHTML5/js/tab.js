// var panels = $(".board section");
// var tabs = $(".tab a");
// tabs.click(function(e) {
//   e.preventDefault();
//   //a링크는 기본이벤트를 가지고 있기 때문에 취소하고 시작해야함//
//   panels.removeClass("board-act");
//   $(this)
//     .parent()
//     .parent()
//     .addClass("board-act");
// });

var tabs = $('.tab-list [role="tab"]');
tabs.on("click", function(e) {
  e.preventDefault();
  $(this)
    .attr("aria-selected", true)
    .siblings()
    .attr("aria-selected", false);
  var selectedId = "#" + $(this).attr("aria-controls");
  $(selectedId)
    .addClass("section-act")
    .siblings()
    .removeClass("section-act");
});
