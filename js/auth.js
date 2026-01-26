// js/auth.js
document.addEventListener("DOMContentLoaded", () => {

  let isLogin = true;

  const section = document.getElementById("authSection");
  if (!section) return; // ⬅️ PENTING (hindari error null)

  const title = document.getElementById("authTitle");
  const btn   = document.getElementById("authBtn");
  const text  = document.getElementById("authText");
  const link  = document.getElementById("switchAuth");
  const info  = document.getElementById("authInfo");

  const emailInput = document.getElementById("authEmail");
  const passInput  = document.getElementById("authPassword");

  const loggedBox  = document.getElementById("loggedInBox");
  const logoutBtn  = document.getElementById("logoutBtn");

  function render() {
    if (isLogin) {
      title.textContent = "Login Akun";
      btn.textContent = "Login";
      text.textContent = "Belum punya akun?";
      link.textContent = "Daftar";
    } else {
      title.textContent = "Daftar Akun";
      btn.textContent = "Daftar";
      text.textContent = "Sudah punya akun?";
      link.textContent = "Login";
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
      const { data, error } =
        await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        info.textContent = error.message;
        return;
      }

      await createProfileIfNotExist(data.user);
      showLoggedIn(data.user);

    } else {
      const { error } =
        await supabase.auth.signUp({ email, password });

      if (error) {
        info.textContent = error.message;
        return;
      }

      info.textContent = "Akun dibuat. Silakan login.";
      isLogin = true;
      render();
    }
  };

  logoutBtn.onclick = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  async function createProfileIfNotExist(user) {
    const { data } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", user.id)
      .single();

    if (!data) {
      await supabase.from("profiles").insert({
        id: user.id,
        email: user.email,
        username: user.email.split("@")[0],
        coin: 0
      });
    }
  }

  function showLoggedIn(user) {
    document.getElementById("authForm").style.display = "none";
    loggedBox.style.display = "block";
  }

  // AUTO LOGIN CHECK
  supabase.auth.getSession().then(({ data }) => {
    if (data.session) {
      showLoggedIn(data.session.user);
    }
  });

});
