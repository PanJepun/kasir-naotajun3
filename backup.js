export function render() {
  document.getElementById('backup').innerHTML = `
    <h2>💾 Backup</h2>
    <button onclick="alert('Export')">Export Excel</button>
  `;
}
window.Backup = { render };