// nav.js — MORO TESTING SERVICES
(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const isIndex = path === "" || path === "index.html";
  const isDash = path === "dashboard.html";

  const navHTML = `
    <nav id="mainNav">
      <div class="nav-container">
        <ul class="nav-menu">
          <li><a href="./index.html" class="${isIndex ? 'active' : ''}">Home</a></li>
          <li><a href="./index.html#about">About</a></li>
          <li><a href="./index.html#programs">Programs</a></li>
          <li><a href="./index.html#services">Services</a></li>
          <li><a href="./index.html#contact">Contact</a></li>
          <li><a href="./dashboard.html" class="${isDash ? 'active' : ''}">Portal</a></li>
        </ul>

        <div class="nav-actions">
          <a href="./register.html" class="btn-apply">Register</a>
          <a href="./login.html" class="btn-login">Login</a>
        </div>
      </div>
    </nav>
  `;

  function inject() {
    const placeholder = document.getElementById("mainNav");
    if (placeholder) {
      placeholder.outerHTML = navHTML;
    } else {
      const existing = document.querySelector("nav");
      if (existing) existing.outerHTML = navHTML;
      else {
        const header = document.querySelector("header");
        if (header) header.insertAdjacentHTML("afterend", navHTML);
        else document.body.insertAdjacentHTML("afterbegin", navHTML);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();