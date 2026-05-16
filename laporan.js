import * as Kasir from './kasir.js';

export function render() {
  const selesai = Kasir.getOrderSelesai();
  document.getElementById('laporan').innerHTML = `
    <h2>📊 Laporan</h2>
    <p>Total transaksi: ${selesai.length}</p>
  `;
}
window.Laporan = { render };