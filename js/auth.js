// js/auth.js
document.addEventListener("DOMContentLoaded", () => {

  let isLogin = true;

  const title = document.getElementById("authTitle");
  const btn   = document.getElementById("authBtn");
  const text  = document.getElementById("authText");
  const link  = document.getElementById("switchAuth");
  const info  = document.getElementById("authInfo");

  const emailInput = document.getElementById("authEmail");
  const passInput  = document.getElementById("authPassword");

  const loggedBox = document.getElementById("loggedInBox");
  const logoutBtn = document.getElementById("logoutBtn");

  function render() {
    if (isLogin) {
      title.textContent = "Login Akun";
      btn.textContent   = "Login";
      text.textContent  = "Belum punya akun?";
      link.textContent  = "Daftar";
    } else {
      title.textContent = "Daftar Akun";
      btn.textContent   = "Daftar";
      text.textContent  = "Sudah punya akun?";
      link.textContent  = "Login";
    }
    info.textContent = "";
  }

  render();

  link.onclick = e => {
    e.preventDefault();
    isLogin = !isLogin;
    render();
  };

  btn.onclick = async () => {
    const email = emailInput.value.trim();
    const password = passInput.value.trim();

    if (!email || !password) {
      info.textContent = "Email & password wajib diisi";
      return;
    }

    info.textContent = "Loading...";

    if (isLogin) {
      const { error } =
        await window.supabase.auth.signInWithPassword({
          email,
          password
        });

      if (error) {
        info.textContent = error.message;
        return;
      }

      info.textContent = "Login berhasil";
      return;
    }

    const { error } =
      await window.supabase.auth.signUp({
        email,
        password
      });

    if (error) {
      info.textContent = error.message;
      return;
    }

    info.textContent = "Akun dibuat, silakan login";
    isLogin = true;
    render();
  };

  logoutBtn.onclick = async () => {
    await window.supabase.auth.signOut();
    location.reload();
  };

});
