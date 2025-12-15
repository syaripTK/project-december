import { getData, saveData, notyf } from "./core.js";

document.addEventListener("DOMContentLoaded", () => {
  const user = getData("user");
  if (user === "") {
    user.push({});
  }
  const btnLogin = document.getElementById("btnLogin");
  console.log(user);

  btnLogin.addEventListener("click", () => {
    const loginName = document.getElementById("loginName").value.trim();
    const passwordLogin = document.getElementById("passwordLogin").value.trim();
    const foundUser = user.find(
      (data) =>
        data.namaUser.toLowerCase() === loginName.toLowerCase() &&
        data.pw === passwordLogin
    );
    if (loginName === "" || passwordLogin === "") {
      notyf.error("Mohon isi data");
      return;
    }
    if (!foundUser) {
      notyf.error("Maaf, akun tidak terdaftar!");
      return;
    }
    saveData("currentUser", foundUser);
    console.log("Login sebagai user:", foundUser.namaUser);
    notyf.success("Sukses!, anda berhasil login");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  });
});
