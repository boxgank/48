// js/auth.js
document.addEventListener("DOMContentLoaded", () => {

  if (!window.supabaseClient) {
  console.error("Supabase client belum siap");
  return;
}

  let isLogin = true;

  const title = document.getElementById("authTitle");
  const btn   = document.getElementById("authBtn");
  const text  = document.getElementById("authText");
  const link  = document.getElementById("switchAuth");
  const info  = document.getElementById("authInfo");

  const emailInput = document.getElementById("authEmail");
  const passInput  = document.getElementById("authPassword");

  const formBox    = document.getElementById("authForm");
  const loggedBox  = document.getElementById("loggedInBox");
  const logoutBtn  = document.getElementById("logoutBtn");

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
      info.textContent = "Email dan password wajib diisi";
      return;
    }

    btn.disabled = true;
    info.textContent = "Loading...";

    // ===== LOGIN =====
    if (isLogin) {
      const { data, error } =
        await window.supabase.auth.signInWithPassword({
          
      btn.disabled = false;

      if (error) {
        info.textContent = error.message;
        return;
      }

      await ensureProfile(data.user);
      showLoggedIn();
      return;
    }

    // ===== REGISTER (NO VERIFICATION) =====
    const { data, error } =
      await supabase.auth.signUp({ email, password });

    btn.disabled = false;

    if (error) {
      info.textContent = error.message;
      return;
    }

    // user LANGSUNG ADA
    await ensureProfile(data.user);
    showLoggedIn();
  };

  logoutBtn.onclick = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  async function ensureProfile(user) {
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

  function showLoggedIn() {
    formBox.style.display = "none";
    loggedBox.style.display = "block";
  }

  // AUTO LOGIN
  window.supabaseClient.auth.getSession().then(({ data }) => {
    if (data.session) {
      showLoggedIn();
    }
  });

});
