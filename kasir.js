import * as Meja from './meja.js';
import * as Menu from './menu.js';

let orderAktif = JSON.parse(localStorage.getItem('orderAktif') || '[]');

export function render() {
  document.getElementById('kasir').innerHTML = `
    <h2>💰 Kasir</h2>
    <select id="selectMeja"></select>
    <div id="orderList"></div>
  `;
  // ... isi logika kasir
}

export function getOrderSelesai() { return []; }
window.Kasir = { render, getOrderSelesai };