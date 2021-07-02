import "./css/style.scss";

import hljs from 'highlight.js';

document.getElementById("navbar-mobile-button").addEventListener("click", (e) => {
    document.getElementById("navbar-root-id").classList.toggle("navbar-mobile-button-clicked");
});

console.log("HELLO!");
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  });