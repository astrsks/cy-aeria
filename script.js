document.addEventListener('DOMContentLoaded', () => {
  const yearPara = document.getElementById('year');
  const year = new Date().getFullYear();
  yearPara.textContent = `© ${year} Cy`;
});
