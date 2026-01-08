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
  { id: "greesella_adhalia", name: "Greesela Adhalia", gen: 10, team: "Dream", img: "https://jkt48.com/profile/greesella_adhalia.jpg" },
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
  { id: "dena_natalia", name: "Dena Natalia", gen: 10, team: "Passion", img: "https://jkt48.com/profile/dena_natalia.jpg" },
  { id: "desy_natalia", name: "Desy Natalia", gen: 10, team: "Passion", img: "https://jkt48.com/profile/desy_natalia.jpg" },
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
   DOM ELEMENTS
================================================== */

const genBox = document.getElementById("genSelect");
const teamBox = document.getElementById("teamSelect");

const leftImg = document.getElementById("leftImg");
const leftName = document.getElementById("leftName");
const rightImg = document.getElementById("rightImg");
const rightName = document.getElementById("rightName");

/* ==================================================
   SORTER STATE
================================================== */

let lists = [];
let left = [];
let right = [];
let merged = [];
let li = 0;
let ri = 0;
let total = 0;
let current = 0;
let history = [];

/* ==================================================
   MODE SWITCH
================================================== */

document.querySelectorAll('input[name="mode"]').forEach(radio => {
  radio.addEventListener("change", () => {
    const mode = document.querySelector('input[name="mode"]:checked').value;
    genBox.style.display = mode === "gen" ? "block" : "none";
    teamBox.style.display = mode === "team" ? "block" : "none";
  });
});

/* ==================================================
   FILTER RENDER
================================================== */

function renderFilters() {
  genBox.innerHTML = "";
  teamBox.innerHTML = "";

  const gens = [...new Set(members.map(m => m.gen))].sort((a,b)=>a-b);
  const teams = [...new Set(members.map(m => m.team))];

  gens.forEach(g => {
    genBox.innerHTML += `<h4>Generasi ${g}</h4>
      <button onclick="toggleGroup('gen', ${g})">All Gen ${g}</button>`;

    members.filter(m => m.gen === g).forEach(m => {
      genBox.innerHTML += `
        <label>
          <input type="checkbox" data-gen="${g}" value="${m.id}">
          ${m.name}
        </label><br>
      `;
    });
  });

  teams.forEach(t => {
    teamBox.innerHTML += `<h4>Team ${t}</h4>
      <button onclick="toggleGroup('team', '${t}')">All ${t}</button>`;

    members.filter(m => m.team === t).forEach(m => {
      teamBox.innerHTML += `
        <label>
          <input type="checkbox" data-team="${t}" value="${m.id}">
          ${m.name}
        </label><br>
      `;
    });
  });
}

renderFilters();

/* ==================================================
   START
================================================== */

window.startFromSelection = function () {
  const mode = document.querySelector('input[name="mode"]:checked').value;
  let selected = [];

  if (mode === "all") {
    selected = members;
  } else {
    const checked = document.querySelectorAll(
      '#selectScreen input[type="checkbox"]:checked'
    );
    selected = members.filter(m =>
      [...checked].some(c => c.value === m.id)
    );
  }

  if (selected.length < 2) {
    alert("Pilih minimal 2 member");
    return;
  }

  document.getElementById("selectScreen").style.display = "none";
  document.getElementById("sorterScreen").style.display = "block";

  initSorter(selected);
};

/* ==================================================
   SORTER LOGIC (MERGE SORT)
================================================== */

function initSorter(data) {
  lists = data.map(m => [m]);
  shuffle(lists);
  total = Math.ceil(data.length * Math.log2(data.length));
  current = 0;
  updateProgress();
  nextMerge();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function nextMerge() {
  if (lists.length <= 1) {
    alert("Sorting selesai!");
    return;
  }
  left = lists.shift();
  right = lists.shift();
  merged = [];
  li = ri = 0;
  showBattle();
}

function showBattle() {
  if (li >= left.length && ri >= right.length) {
    lists.push(merged);
    nextMerge();
    return;
  }

  if (li >= left.length) {
    merged.push(right[ri++]);
    showBattle();
    return;
  }

  if (ri >= right.length) {
    merged.push(left[li++]);
    showBattle();
    return;
  }

  leftImg.src = left[li].img;
  leftName.innerText = left[li].name;
  rightImg.src = right[ri].img;
  rightName.innerText = right[ri].name;

  updateProgress();
}

function choose(choice) {
  history.push({
    lists: structuredClone(lists),
    left, right, merged, li, ri, current
  });

  current++;

  if (choice === "left") merged.push(left[li++]);
  else if (choice === "right") merged.push(right[ri++]);
  else {
    merged.push(left[li++]);
    merged.push(right[ri++]);
  }

  showBattle();
}

function undo() {
  if (!history.length) return;
  const h = history.pop();
  ({ lists, left, right, merged, li, ri, current } = h);
  showBattle();
}

/* ==================================================
   UI
================================================== */

function updateProgress() {
  const percent = Math.min((current / total) * 100, 100);
  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").innerText = `${current} / ${total}`;
}

function toggleGroup(type, value) {
  const selector = type === "gen"
    ? `#genSelect input[data-gen="${value}"]`
    : `#teamSelect input[data-team="${value}"]`;

  const boxes = document.querySelectorAll(selector);
  const allChecked = [...boxes].every(b => b.checked);
  boxes.forEach(b => b.checked = !allChecked);
}
