(function () {
  var STORAGE_KEY = "bd.portfolio.theme";
  var MODE_KEY = "bd.portfolio.mode";
  var DEFAULT_THEME = "navy-amber";
  var DEFAULT_MODE = "light";

  var html = document.documentElement;

  function prefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function loadPrefs() {
    var savedTheme = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    var savedMode = localStorage.getItem(MODE_KEY);
    if (!savedMode) savedMode = prefersDark() ? "dark" : DEFAULT_MODE;
    apply(savedTheme, savedMode);
  }

  function apply(theme, mode) {
    html.setAttribute("data-theme", theme);
    html.setAttribute("data-mode", mode);
    localStorage.setItem(STORAGE_KEY, theme);
    localStorage.setItem(MODE_KEY, mode);
    updateActiveStates(theme, mode);
  }

  function updateActiveStates(theme, mode) {
    document.querySelectorAll("[data-theme-value]").forEach(function (btn) {
      btn.setAttribute("data-active", btn.getAttribute("data-theme-value") === theme ? "true" : "false");
    });
    var toggle = document.querySelector("[data-mode-toggle]");
    if (toggle) {
      toggle.innerHTML = mode === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      toggle.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  function bind() {
    document.querySelectorAll("[data-theme-value]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var theme = btn.getAttribute("data-theme-value");
        var currentMode = html.getAttribute("data-mode") || DEFAULT_MODE;
        apply(theme, currentMode);
      });
    });

    var toggle = document.querySelector("[data-mode-toggle]");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var currentTheme = html.getAttribute("data-theme") || DEFAULT_THEME;
        var currentMode = html.getAttribute("data-mode") || DEFAULT_MODE;
        apply(currentTheme, currentMode === "dark" ? "light" : "dark");
      });
    }

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  loadPrefs();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
