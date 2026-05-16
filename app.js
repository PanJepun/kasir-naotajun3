import * as Meja from './meja.js';
import * as Menu from './menu.js';
import * as Kasir from './kasir.js';
import * as Laporan from './laporan.js';
import * as Backup from './backup.js';

// Ganti tema warna
window.setTheme = (themeName, btnElement) => {
  document.body.className = themeName;
  document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
  if(btnElement) btnElement.classList.add('active');
  localStorage.setItem('theme', themeName);
};

// Ganti tab
window.openTab = (tabName, btnElement) => {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  if(btnElement) btnElement.classList.add('active');

  if(tabName === 'meja') Meja.render();
  if(tabName === 'foodbeverage') Menu.render();
  if(tabName === 'kasir') Kasir.render();
  if(tabName === 'laporan') Laporan.render();
  if(tabName === 'backup') Backup.render();
};

// Jalanin pas pertama kali buka halaman
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'green';
  setTheme(savedTheme, document.querySelector(`[onclick*="${savedTheme}"]`));
  Meja.render();
});