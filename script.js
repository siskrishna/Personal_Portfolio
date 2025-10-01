// script.js — interactions for the portfolio

// DOM helpers
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Define available themes
  const themes = ["dark", "pink", "green", "yellow", "cyberpunk"];
  let current = 0;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && themes.includes(savedTheme)) {
    body.setAttribute('data-theme', savedTheme);
    current = themes.indexOf(savedTheme);
  }

  themeToggle.addEventListener('click', () => {
    // Cycle to next theme
    current = (current + 1) % themes.length;
    const nextTheme = themes[current];

    if (nextTheme === "dark") {
      body.removeAttribute('data-theme'); // fallback to default
    } else {
      body.setAttribute('data-theme', nextTheme);
    }

    localStorage.setItem('theme', nextTheme);
  });
});
