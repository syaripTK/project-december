import { saveData, getData, notyf } from "./core.js";

export const keyUser = "user";

if (!localStorage.getItem(keyUser)) {
  saveData(keyUser, []);
}

const user = getData(keyUser);

if (user.length === 0) {
  user.push({
    id: user.length + 1,
    namaUser: "admin",
    pw: "bismillah",
  });
  //  console.log(user);
  saveData(keyUser, user);
}

const btnreg = document.getElementById("btn-reg");

document.addEventListener("DOMContentLoaded", () => {
  if (!btnreg) return;

  btnreg.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const secondPassword = document.getElementById("cPassword").value;
    if (username === "" || password === "" || secondPassword === "") {
      notyf.error("Username dan password tidak boleh kosong!");
      return;
    }

    if (password != secondPassword) {
      notyf.error("Password dan konfirmasi password tidak sama");
      return;
    }
    user.push({
      id: user.length + 1,
      namaUser: username,
      pw: password,
    });
    saveData(keyUser, user);
    notyf.success("Akun berhasil ditambahkan!");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
});
