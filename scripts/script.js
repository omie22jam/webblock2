// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("header button");
const deNavUl = document.querySelector("header nav ul");

menuButton.onclick = toggleMenu

function toggleMenu () {
    deNavUl.classList.toggle("is-open");
  }

