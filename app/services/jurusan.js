import { saveData, getData, notyf } from "./core.js";
const keyJurusan = "prodi";


if (!localStorage.getItem(keyJurusan)) {
  saveData(keyJurusan, []);
}

const parseJurusan = getData(keyJurusan);

if (parseJurusan.length === 0) {
  parseJurusan.push({
    id: parseJurusan.length + 1,
    kode: 50101,
    namaJurusan: "Teknik Komputer",
  });
  parseJurusan.push({
    id: parseJurusan.length + 1,
    kode: 50102,
    namaJurusan: "Ekonomi Bisnis",
  });
  parseJurusan.push({
    id: parseJurusan.length + 1,
    kode: 50103,
    namaJurusan: "Pendidikan",
  });
}
console.log(parseJurusan);
saveData(keyJurusan, parseJurusan);

const showJurusan = () => {
  const tblJurusan = document.getElementById("tabelJurusan");
  const total = document.getElementById("jumlahJurusan");

  parseJurusan.forEach((data, index) => {
    tblJurusan.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${data.kode}</td>
        <td>${data.namaJurusan}</td>
        <td><span class="badge bg-success">active</span></td>
        </tr>`;
  });

  total.textContent = parseJurusan.length
};
showJurusan();

const logOut= ()=>{
  alert('Anda keluar dari sistem')
  window.location.href = 'index.html'
}

window.logOut = logOut