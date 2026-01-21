/* ==================================================
   DATA MEMBER
================================================== */

const members = [
  { id: "alya_amanda", name: "Alya Amanda", gen: 11, team: "Love", img: "https://jkt48.com/profile/alya_amanda.jpg" },
  { id: "anindya_ramadhani", name: "Anindya Ramadhani", gen: 11, team: "Love", img: "https://jkt48.com/profile/anindya_ramadhani.jpg" },
  { id: "aurellia", name: "Aurellia", gen: 10, team: "Love", img: "https://jkt48.com/profile/aurellia.jpg" },
  { id: "aurhel_alana", name: "Aurhel Alana", gen: 12, team: "Love", img: "https://jkt48.com/profile/aurhel_alana.jpg" },
  { id: "cathleen_nixie", name: "Cathleen Nixie", gen: 11, team: "Love", img: "https://jkt48.com/profile/cathleen_nixie.jpg" },
  { id: "celline_thefani", name: "Celline Thefani", gen: 11, team: "Love", img: "https://jkt48.com/profile/celline_thefani.jpg" },
  { id: "cynthia_yaputera", name: "Cynthia Yaputera", gen: 11, team: "Love", img: "https://jkt48.com/profile/cynthia_yaputera.jpg" },
  { id: "fiony_alveria", name: "Fiony Alveria", gen: 8, team: "Love", img: "https://jkt48.com/profile/fiony_alveria.jpg" },
  { id: "fritzy_rosmerian", name: "Fritzy Rosmerian", gen: 12, team: "Love", img: "https://jkt48.com/profile/fritzy_rosmerian.jpg" },
  { id: "grace_octaviani", name: "Grace Octaviani", gen: 11, team: "Love", img: "https://jkt48.com/profile/grace_octaviani.jpg" },
  { id: "hillary_abigail", name: "Hillary Abigail", gen: 12, team: "Love", img: "https://jkt48.com/profile/hillary_abigail.jpg" },
  { id: "indah_cahya", name: "Indah Cahya", gen: 9, team: "Love", img: "https://jkt48.com/profile/indah_cahya.jpg" },
  { id: "jazzlyn_trisha", name: "Jazzlyn Trisha", gen: 12, team: "Love", img: "https://jkt48.com/profile/jazzlyn_trisha.jpg" },
  { id: "michelle_alexandra", name: "Michelle Alexandra", gen: 11, team: "Love", img: "https://jkt48.com/profile/michelle_alexandra.jpg" },
  { id: "nayla_suji", name: "Nayla Suji", gen: 12, team: "Love", img: "https://jkt48.com/profile/nayla_suji.jpg" },

  { id: "adeline_wijaya", name: "Adeline Wijaya", gen: 12, team: "Dream", img: "https://jkt48.com/profile/adeline_wijaya.jpg" },
  { id: "amanda_sukma", name: "Amanda Sukma", gen: 10, team: "Dream", img: "https://jkt48.com/profile/amanda_sukma.jpg" },
  { id: "chelsea_davina", name: "Chelsea Davina", gen: 11, team: "Dream", img: "https://jkt48.com/profile/chelsea_davina.jpg" },
  { id: "febriola_sinambela", name: "Febriola Sinambela", gen: 7, team: "Dream", img: "https://jkt48.com/profile/febriola_sinambela.jpg" },
  { id: "freya_jayawardana", name: "Freya Jayawardana", gen: 7, team: "Dream", img: "https://jkt48.com/profile/freya_jayawardana.jpg" },
  { id: "gabriela_abigail", name: "Gabriela Abigail", gen: 10, team: "Dream", img: "https://jkt48.com/profile/gabriela_abigail.jpg" },
  { id: "gendis_mayrannisa", name: "Gendis Mayrannisa", gen: 11, team: "Dream", img: "https://jkt48.com/profile/gendis_mayrannisa.jpg" },
  { id: "gita_sekar_andarini", name: "Gita Sekar Andarini", gen: 6, team: "Dream", img: "https://jkt48.com/profile/gita_sekar_andarini.jpg" },
  { id: "greesela_adhalia", name: "Greesela Adhalia", gen: 11, team: "Dream", img: "https://jkt48.com/profile/greesella_adhalia.jpg" },
  { id: "helisma_putri", name: "Helisma Putri", gen: 7, team: "Dream", img: "https://jkt48.com/profile/helisma_putri.jpg" },
  { id: "jesslyn_elly", name: "Jesslyn Elly", gen: 10, team: "Dream", img: "https://jkt48.com/profile/jesslyn_elly.jpg" },
  { id: "marsha_lenathea", name: "Marsha Lenathea", gen: 9, team: "Dream", img: "https://jkt48.com/profile/marsha_lenathea.jpg" },
  { id: "nina_tutachia", name: "Nina Tutachia", gen: 12, team: "Dream", img: "https://jkt48.com/profile/nina_tutachia.jpg" },
  { id: "oline_manuel", name: "Oline Manuel", gen: 12, team: "Dream", img: "https://jkt48.com/profile/oline_manuel.jpg" },
  { id: "shabilqis_naila", name: "Shabilqis Naila", gen: 12, team: "Dream", img: "https://jkt48.com/profile/shabilqis_naila.jpg" },

  { id: "abigail_rachel", name: "Abigail Rachel", gen: 12, team: "Passion", img: "https://jkt48.com/profile/abigail_rachel.jpg" },
  { id: "angelina_christy", name: "Angelina Christy", gen: 7, team: "Passion", img: "https://jkt48.com/profile/angelina_christy.jpg" },
  { id: "catherina_vallencia", name: "Catherina Vallencia", gen: 12, team: "Passion", img: "https://jkt48.com/profile/catherina_vallencia.jpg" },
  { id: "cornelia_vanisa", name: "Cornelia Vanisa", gen: 8, team: "Passion", img: "https://jkt48.com/profile/cornelia_vanisa.jpg" },
  { id: "dena_natalia", name: "Dena Natalia", gen: 11, team: "Passion", img: "https://jkt48.com/profile/dena_natalia.jpg" },
  { id: "desy_natalia", name: "Desy Natalia", gen: 11, team: "Passion", img: "https://jkt48.com/profile/desy_natalia.jpg" },
  { id: "feni_fitriyanti", name: "Feni Fitriyanti", gen: 3, team: "Passion", img: "https://jkt48.com/profile/feni_fitriyanti.jpg" },
  { id: "jessica_chandra", name: "Jessica Chandra", gen: 7, team: "Passion", img: "https://jkt48.com/profile/jessica_chandra.jpg" },
  { id: "kathrina_irene", name: "Kathrina Irene", gen: 9, team: "Passion", img: "https://jkt48.com/profile/kathrina_irene.jpg" },
  { id: "lulu_salsabila", name: "Lulu Salsabila", gen: 8, team: "Passion", img: "https://jkt48.com/profile/lulu_salsabila.jpg" },
  { id: "michelle_levia", name: "Michelle Levia", gen: 12, team: "Passion", img: "https://jkt48.com/profile/michelle_levia.jpg" },
  { id: "mutiara_azzahra", name: "Mutiara Azzahra", gen: 7, team: "Passion", img: "https://jkt48.com/profile/mutiara_azzahra.jpg" },
  { id: "raisha_syifa", name: "Raisha Syifa", gen: 10, team: "Passion", img: "https://jkt48.com/profile/raisha_syifa.jpg" },
  { id: "ribka_budiman", name: "Ribka Budiman", gen: 12, team: "Passion", img: "https://jkt48.com/profile/ribka_budiman.jpg" },
  { id: "victoria_kimberly", name: "Victoria Kimberly", gen: 12, team: "Passion", img: "https://jkt48.com/profile/victoria_kimberly.jpg" },

  { id: "astrella_virgiananda", name: "Astrella Virgiananda", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Astrella_Virgiananda.jpg" },
  { id: "aulia_riza", name: "Aulia Riza", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Aulia_Riza.jpg" },
  { id: "bong_aprilli", name: "Bong Aprilli", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Bong_Aprilli.jpg" },
  { id: "hagia_sopia", name: "Hagia Sopia", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Hagia_Sopia.jpg" },
  { id: "humaira_ramadhani", name: "Humaira Ramadhani", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Humaira_Ramadhani.jpg" },
  { id: "jacqueline_immanuela", name: "Jacqueline Immanuela", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Jacqueline_Immanuela.jpg" },
  { id: "jemima_evodie", name: "Jemima Evodie", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Jemima_Evodie.jpg" },
  { id: "mikaela_kusjanto", name: "Mikaela Kusjanto", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Mikaela_Kusjanto.jpg" },
  { id: "nur_intan", name: "Nur Intan", gen: 13, team: "Trainee", img: "https://jkt48.com/profile/Nur_Intan.jpg" }
];

/* ==================================================
   ELEMENT
================================================== */

const genBox = document.getElementById("genSelect");
const teamBox = document.getElementById("teamSelect");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

/* ==================================================
   MODE HANDLER
================================================== */

document.querySelectorAll('input[name="mode"]').forEach(radio => {
  radio.addEventListener("change", () => {
    genBox.innerHTML = "";
    teamBox.innerHTML = "";
    genBox.style.display = "none";
    teamBox.style.display = "none";

    const mode = document.querySelector('input[name="mode"]:checked').value;
    if (mode === "gen") renderGenMode();
    if (mode === "team") renderTeamMode();
  });
});

/* ==================================================
   GEN MODE (CHECKBOX GEN → MEMBER AUTO CHECK)
================================================== */

function renderGenMode() {
  genBox.style.display = "block";
  genBox.innerHTML = "<h4>Pilih Generasi</h4>";

  const gens = [...new Set(members.map(m => m.gen))].sort((a,b)=>a-b);

  gens.forEach(gen => {
    genBox.innerHTML += `
      <label>
        <input type="checkbox" value="gen-${gen}">
        Generasi ${gen}
      </label>
      <div class="gen-members" data-gen="${gen}" style="margin-left:22px; display:none"></div>
    `;
  });

  genBox.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => toggleGen(cb));
  });
}

function toggleGen(cb) {
  const gen = Number(cb.value.replace("gen-",""));
  const container = genBox.querySelector(`[data-gen="${gen}"]`);

  container.innerHTML = "";

  if (!cb.checked) {
    container.style.display = "none";
    return;
  }

  container.style.display = "block";

  members
    .filter(m => m.gen === gen)
    .forEach(m => {
      container.innerHTML += `
        <label>
          <input type="checkbox" value="${m.id}" checked>
          ${m.name}
        </label>
      `;
    });
}

/* ==================================================
   TEAM MODE (CHECKBOX TEAM → MEMBER AUTO CHECK)
================================================== */

function renderTeamMode() {
  teamBox.style.display = "block";
  teamBox.innerHTML = "<h4>Pilih Team</h4>";

  const teams = [...new Set(members.map(m => m.team))];

  teams.forEach(team => {
    teamBox.innerHTML += `
      <label>
        <input type="checkbox" value="team-${team}">
        Team ${team}
      </label>
      <div class="team-members" data-team="${team}" style="margin-left:22px; display:none"></div>
    `;
  });

  teamBox.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => toggleTeam(cb));
  });
}

function toggleTeam(cb) {
  const team = cb.value.replace("team-","");
  const container = teamBox.querySelector(`[data-team="${team}"]`);

  container.innerHTML = "";

  if (!cb.checked) {
    container.style.display = "none";
    return;
  }

  container.style.display = "block";

  members
    .filter(m => m.team === team)
    .forEach(m => {
      container.innerHTML += `
        <label>
          <input type="checkbox" value="${m.id}" checked>
          ${m.name}
        </label>
      `;
    });
}

/* ==================================================
   SMART SORTER STATE
================================================== */

let pool = [];
let currentPair = [];
let history = [];
let round = 0;
const K = 32;

/* ==================================================
   INIT
================================================== */

function initSorter(selected) {
  pool = selected.map(m => ({
    ...m,
    score: 1000,
    played: 0
  }));

  history = [];
  round = 0;

  document.getElementById("selectScreen").style.display = "none";
  document.getElementById("sorterScreen").style.display = "block";

  nextBattle();
}

/* ==================================================
   PAIRING LOGIC (SMART)
================================================== */

function nextBattle() {
  if (round >= pool.length * 2) {
    showResult();
    return;
  }

  pool.sort((a, b) =>
    a.played - b.played || Math.abs(a.score - 1000) - Math.abs(b.score - 1000)
  );

  const a = pool[0];
  const b = pool.find(m => m.id !== a.id);

  currentPair = [a, b];
  round++;

  renderBattle();
}

function renderBattle() {
  const [l, r] = currentPair;

  document.getElementById("leftImg").src = l.img;
  document.getElementById("leftName").innerText = l.name;
  document.getElementById("rightImg").src = r.img;
  document.getElementById("rightName").innerText = r.name;

  updateProgress();
}

/* ==================================================
   CHOICE
================================================== */

function choose(choice) {
  const [a, b] = currentPair;

  history.push(JSON.parse(JSON.stringify(pool)));

  if (choice === "left") {
    a.score += K;
    b.score -= K;
  } else if (choice === "right") {
    b.score += K;
    a.score -= K;
  } else {
    a.score += K / 2;
    b.score += K / 2;
  }

  a.played++;
  b.played++;

  nextBattle();
}

function undo() {
  if (!history.length) return;
  pool = history.pop();
  round--;
  nextBattle();
}

/* ==================================================
   PROGRESS
================================================== */

function updateProgress() {
  const percent = Math.min((round / (pool.length * 2)) * 100, 100);
  progressFill.style.width = percent + "%";
  progressText.innerText = `Battle ${round}`;
}

/* ==================================================
   RESULT (PREMIUM)
================================================== */

function showResult() {
  pool.sort((a, b) => b.score - a.score);

  let html = `
    <h1>🏆 Final Ranking</h1>
    <p style="opacity:.8">Berdasarkan pilihanmu secara konsisten</p>
    <div class="result-grid">
  `;

  pool.forEach((m, i) => {
    const medal =
      i === 0 ? "🥇" :
      i === 1 ? "🥈" :
      i === 2 ? "🥉" : "";

    html += `
      <div class="result-card">
        <div class="rank">${medal} #${i + 1}</div>
        <img src="${m.img}">
        <div class="name">${m.name}</div>
        <div class="meta">Score: ${Math.round(m.score)}</div>
      </div>
    `;
  });

  html += `
    </div>
    <button onclick="location.reload()">Ulangi</button>
  `;

  document.body.innerHTML = html;
}
