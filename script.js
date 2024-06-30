document.addEventListener("DOMContentLoaded", function () {
  const menuTrigger = document.querySelector(".menu-trigger");
  const menuIcon = menuTrigger.querySelector("i");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");
  const currentPage = window.location.pathname.split("/").pop();

  // Toggle menu on mobile
  menuTrigger.addEventListener("click", function () {
    nav.classList.toggle("show");
    toggleMenuIcon();
  });

  // Highlight active page
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      linkHref === currentPage ||
      (currentPage === "" && linkHref === "Home.html") ||
      (currentPage === "index.html" && linkHref === "Home.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnMenuTrigger = menuTrigger.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnMenuTrigger &&
      nav.classList.contains("show")
    ) {
      nav.classList.remove("show");
      toggleMenuIcon();
    }
  });

  // Toggle menu icon
  function toggleMenuIcon() {
    if (nav.classList.contains("show")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("emailForm");
  const loadingDiv = document.querySelector(".loading");
  const errorDiv = document.querySelector(".error-message");
  const sentDiv = document.querySelector(".sent-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Hide all message divs
    loadingDiv.style.display = "none";
    errorDiv.style.display = "none";
    sentDiv.style.display = "none";

    // Show loading message
    loadingDiv.style.display = "block";

    // Simulate form submission delay
    setTimeout(function () {
      loadingDiv.style.display = "none";

      // Validate form
      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const subject = form.elements["subject"].value.trim();
      const message = form.elements["message"].value.trim();

      if (name === "" || email === "" || subject === "" || message === "") {
        errorDiv.textContent = "Please fill in all fields.";
        errorDiv.style.display = "block";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorDiv.textContent = "Please enter a valid email address.";
        errorDiv.style.display = "block";
      } else {
        // Simulate successful submission
        sentDiv.style.display = "block";
        form.reset();
      }
    }, 2000); // Simulate 2 second delay
  });
});

// gallery
var modal = document.getElementById("myModal");

var imgs = document
  .getElementsByClassName("gallery")[0]
  .getElementsByTagName("img");
var modalImg = document.getElementById("img01");

for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
