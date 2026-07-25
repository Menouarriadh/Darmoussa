// ==========================================================================
// DAR MOUSSA shared interactivity
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initMenuTabs();
});

// Mobile nav toggle
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
}

// Menu page category tabs
function initMenuTabs() {
  const tabs = document.querySelectorAll(".menu-tab");
  if (!tabs.length) return;

  const categories = document.querySelectorAll(".menu-category");

  function showCategory(targetId) {
    categories.forEach((cat) => {
      cat.style.display = cat.id === targetId ? "" : "none";
    });
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.target === targetId));
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => showCategory(tab.dataset.target));
  });

  const hashTarget = window.location.hash.replace("#", "");
  const initial = document.getElementById(hashTarget) ? hashTarget : tabs[0].dataset.target;
  showCategory(initial);
}
