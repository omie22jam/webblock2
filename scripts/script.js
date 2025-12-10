// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("header button");
const deNavUl = document.querySelector("header nav ul");

menuButton.onclick = toggleMenu

function toggleMenu () {
    deNavUl.classList.toggle("is-open");
  }


// aangepaste code van chatgpt
window.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(document.querySelectorAll("a"))
    .filter(a => ["2024 progress Report", "2025 progress Report"].includes(a.textContent.trim()));

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.4s ease";
      link.style.transform = "scale(1.2)";
      link.style.textShadow = "0.2em 0.2em 0.5em rgba(3, 186, 231, 0.3)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
      link.style.textShadow = "none";
    });

    
    link.addEventListener("click", e => {
      e.preventDefault();
      let jump = 0;
      const interval = setInterval(() => {
        jump += 3;
        link.style.transform = `translateY(-${jump}px) scale(1.2)`;
        if (jump >= 30) {
          clearInterval(interval);
          setTimeout(() => window.location.href = link.href, 200);
        }
      }, 30);
    });
  });
});



