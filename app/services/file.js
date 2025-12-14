import { getData, saveData } from "./core.js";

const keyMahasiswa = "mahasiswa";

if (!localStorage.getItem(keyMahasiswa)) {
  saveData(keyMahasiswa, []);
}

let prodi = getData("prodi");
console.log(prodi);

let mahasiswa = getData("mahasiswa");
console.log(mahasiswa);

const hitungAverage = (nilai) => {
  const values = Object.values(nilai);
  const total = values.reduce((acc, curr) => acc + curr, 0);
  return total / values.length;
};

if (mahasiswa.length === 0) {
  mahasiswa.push({
    id: mahasiswa.length + 1,
    nama: "Aditya Ferdiansyah",
    jurusanId: 1,
    nilai: {
      tugas: 90,
      uts: 78,
      uas: 88,
    },
    image: "face8.jpg",
    img: "picture.jpg",
  });
  saveData(keyMahasiswa, mahasiswa);
}

const table = document.getElementById("table");
const renderTable = () => {
  const qtyProdi = document.getElementById("qtyProdi");
  const qtyMahasiswa = document.getElementById("qtyMahasiswa");
  table.innerHTML = "";
  mahasiswa.forEach((x, y) => {
    const cariJurusan = prodi.find((data) => data.id === x.jurusanId);
    const average = hitungAverage(x.nilai).toFixed(2);
    const tr = document.createElement("tr");
    const tdNo = document.createElement("td");
    tdNo.textContent = y + 1;
    const tdImg = document.createElement("td");
    tdImg.innerHTML = `<img src="img/${x.img}" alt="icon" style="width: 30px;">`;
    const tdNama = document.createElement("td");
    tdNama.textContent = x.nama;
    const tdJurusan = document.createElement("td");
    tdJurusan.textContent = cariJurusan.namaJurusan;
    const tdTugas = document.createElement("td");
    tdTugas.textContent = x.nilai.tugas;
    const tdUts = document.createElement("td");
    tdUts.textContent = x.nilai.uts;
    const tdUas = document.createElement("td");
    tdUas.textContent = x.nilai.uas;
    const tdAvr = document.createElement("td");
    tdAvr.textContent = average;
    const tdStatus = document.createElement("td");
    tdStatus.innerHTML = `${
      average >= 80
        ? `<span class="badge bg-success" style="font-size: 1em;">Lulus</span>`
        : `<span class="badge bg-danger text-white" style="font-size: 1em;">Tidak Lulus</span>`
    }`;
    tr.append(
      tdNo,
      tdImg,
      tdNama,
      tdJurusan,
      tdTugas,
      tdUts,
      tdUas,
      tdAvr,
      tdStatus
    );
    table.append(tr);
  });
  qtyMahasiswa.innerText = mahasiswa.length;
  qtyProdi.innerText = prodi.length;
};
document.addEventListener("DOMContentLoaded", () => {
  if (!table) return;
  renderTable();
});

const renderSecondTable = () => {
  secondTable.innerHTML = "";
  mahasiswa.forEach((x) => {
    const cariJurusan = prodi.find((data) => data.id === x.jurusanId);
    secondTable.innerHTML += `
    <tr>
    <td><img src="../img/${x.image}" alt="icon" style="width: 30px;"></td>
    <td>${x.nama}</td>
    <td>${cariJurusan.namaJurusan}</td>
    <td>${x.nilai.tugas}</td>
    <td>${x.nilai.uts}</td>
    <td>${x.nilai.uas}</td>
    <td>
    <button type="button"
    class="btn btn-icons btn-rounded btn-danger delete-student"
    onclick="deleteConfirm(${x.id})"
    title="Hapus Mahasiswa">
    <i class="mdi mdi-delete"></i>
    </button>
    </td>
    </tr>`;
  });
};
const deleteConfirm = (id) => {
  const isDelete = confirm("Yakin mau dihapus?");
  if (isDelete) {
    deleteStudent(id);
  }
};

const deleteStudent = (id) => {
  const index = mahasiswa.findIndex((i) => i.id === id);
  if (index !== -1) {
    mahasiswa.splice(index, 1);
    saveData(keyMahasiswa, mahasiswa);
    renderSecondTable();
  }
};

window.deleteConfirm = deleteConfirm;

const secondTable = document.getElementById("second-table");
document.addEventListener("DOMContentLoaded", () => {
  if (!secondTable) return;
  renderSecondTable();
});

// const saveBtn = document.getElementById("btnSimpan");
const prodiSelection = document.getElementById("jurusanSelect");
const saveMahasiswa = () => {
  const namaValues = document.getElementById("namaMahasiswa").value;
  const optValues = document.getElementById("jurusanSelect").value;
  const tugasValues = document.getElementById("nilaiTugas").value;
  const utsValues = document.getElementById("nilaiUTS").value;
  const uasValues = document.getElementById("nilaiUAS").value;
  if (
    namaValues === "" ||
    typeof namaValues === Number ||
    namaValues.length > 45 ||
    utsValues > 100 ||
    utsValues <= -1 ||
    tugasValues > 100 ||
    tugasValues <= -1 ||
    uasValues > 100 ||
    uasValues <= -1
  ) {
    alert("Masukkan data valid!");
    return;
  }

  mahasiswa.push({
    id: mahasiswa.length + 1,
    nama: namaValues,
    jurusanId: Number(optValues),
    nilai: {
      tugas: Number(tugasValues),
      uts: Number(utsValues),
      uas: Number(uasValues),
    },
    image: "face8.jpg",
    img: "picture.jpg",
  });
  saveData(keyMahasiswa, mahasiswa);
  window.location.href = "index.html";
};

window.saveMahasiswa = saveMahasiswa;
// input.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//       saveMahasiswa()
//     }
//   });

const showOption = () => {
  prodiSelection.innerHTML = `<option value='' hidden>-= Pilih Jurusan =-</option>`;
  prodi.forEach((e) => {
    const option = document.createElement("option");
    option.value = e.id;
    option.textContent = `${e.kode} - ${e.namaJurusan}`;
    prodiSelection.append(option);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (!prodiSelection) return;
  showOption();
});

const logOut = () => {
  alert("Anda keluar dari sistem");
  window.location.href = "index.html";
};

const logOut2 = () => {
  alert("Anda keluar dari sistem");
  window.location.href = "../index.html";
};

window.logOut2 = logOut2;
window.logOut = logOut;
