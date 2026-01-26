// js/drawer.js
document.addEventListener("DOMContentLoaded", () => {

  if (!window.supabaseClient) {
  console.error("Supabase client belum siap");
  return;
}

  const drawer  = document.getElementById("drawerMenu");
  const overlay = document.getElementById("drawerOverlay");
  const openBtn = document.getElementById("openDrawer");
  const closeBtn = document.getElementById("closeDrawer");

  if (!drawer || !overlay) return;

  openBtn.onclick = () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
  };

  closeBtn.onclick = overlay.onclick = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  };

  // LOAD USER INFO
  window.supabaseClient.auth.getSession().then(async ({ data }) => {
    if (!data.session) return;

    const user = data.session.user;

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (profile) {
      document.getElementById("drawerUsername").textContent = profile.username;
      document.getElementById("drawerEmail").textContent = profile.email;
      document.getElementById("drawerCoin").textContent = profile.coin;
    }
  });

});
