let mejaList = JSON.parse(localStorage.getItem('mejaList') || '[]');

export function render() {
  const container = document.getElementById('meja');
  container.innerHTML = `
    <h2>📋 Kelola Meja</h2>
    <button class="btn-primary" onclick="Meja.openModal()">+ Tambah Meja</button>
    <div id="daftar-meja"></div>
  `;
  renderTable();
}

function renderTable() {
  const container = document.getElementById('daftar-meja');
  container.innerHTML = mejaList.map((m, i) => `
    <div>${i+1}. ${m.nama} 
      <button onclick="Meja.hapus(${m.id})">Hapus</button>
    </div>
  `).join('');
}

export function openModal() {
  const nama = prompt("Nama meja:");
  if(nama) {
    mejaList.push({ id: Date.now(), nama });
    localStorage.setItem('mejaList', JSON.stringify(mejaList));
    renderTable();
  }
}

export function hapus(id) {
  mejaList = mejaList.filter(m => m.id !== id);
  localStorage.setItem('mejaList', JSON.stringify(mejaList));
  renderTable();
}

export function getAll() { return mejaList; }

// Biar bisa dipanggil dari onclick di HTML
window.Meja = { render, openModal, hapus, getAll };