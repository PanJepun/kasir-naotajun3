let menuList = JSON.parse(localStorage.getItem('menuList') || '[]');

export function render() {
  document.getElementById('foodbeverage').innerHTML = `
    <h2>🍽️ Food & Beverage</h2>
    <div id="daftar-menu"></div>
  `;
  // ... isi fungsi renderTable, openModal, dll
}

export function getAll() { return menuList; }
window.Menu = { render, getAll };