(function () {
  var buttons = document.querySelectorAll(".project-filters button[data-filter]");
  var entries = document.querySelectorAll(".project-entry");
  if (!buttons.length || !entries.length) return;

  function applyFilter(filter) {
    entries.forEach(function (entry) {
      var company = entry.getAttribute("data-company");
      var show = filter === "all" || company === filter;
      entry.hidden = !show;
    });
    buttons.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === filter);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"));
    });
  });
})();
