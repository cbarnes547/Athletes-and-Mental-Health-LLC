/*
  Programmer: Chloe E. Barnes
  Date: 7/23/2026
  Description: This file handles all interactive behavior for the AAMH website.
  It includes scroll spy navigation, active link highlighting, the hamburger menu, and the email signup form.
*/


// =====================================================
//  AAMH – main.js
//  All interactive behavior lives here.
// =====================================================
// Active link on click
// ── SCROLL SPY — active link follows scroll position ──
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink(id) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${id}`) {
      link.classList.add('active');
    }
  });
}

// Updates active link based on which section is in view
window.addEventListener('scroll', () => {
  // Scroll spy
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200; 
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  if (current) setActiveLink(current);

  // Turn links lime when scrolled
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Keep click behavior too
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ─────────────────────────────────────────────────────
// EMAIL SIGN-UP FORM
// ─────────────────────────────────────────────────────
const signupBtn = document.getElementById('signupBtn');

if (signupBtn) {
  signupBtn.addEventListener('click', function () {
    const firstName = document.getElementById('firstName').value.trim();
    const email     = document.getElementById('emailAddress').value.trim();

    if (!firstName || !email) {
      alert('Please fill in both your name and email address.');
      return;
    }

    console.log('New signup:', { firstName, email });
    alert(`Thanks, ${firstName}! You're on the list.`);

    // Clear the fields after submission
    document.getElementById('firstName').value = '';
    document.getElementById('emailAddress').value = '';
  });


// ── MOBILE HAMBURGER MENU ────────────────────────────

const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}