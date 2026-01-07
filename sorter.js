const members = [
  {
    id: "nur_intan",
    name: "Nur Intan",
    gen: 10,
    team: "J"
  },
  {
    id: "abigail",
    name: "Abigail Rachel",
    gen: 10,
    team: "KIII"
  },
  {
    id: "kimberly",
    name: "Victoria Kimberly",
    gen: 9,
    team: "J"
  }
];


let lists = [];
let left = [];
let right = [];
let merged = [];

let li = 0;
let ri = 0;

let total = 0;
let current = 0;

function startSorter() {
  lists = members.map(m => [m]);
  shuffle(lists);
  total = Math.ceil(members.length * Math.log2(members.length));
  current = 0;
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
    showResult(lists[0]);
    return;
  }

  left = lists.shift();
  right = lists.shift();
  merged = [];
  li = 0;
  ri = 0;
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

  const L = left[li];
  const R = right[ri];

  document.getElementById("leftImg").src = L.img;
  document.getElementById("leftName").innerText = L.name;

  document.getElementById("rightImg").src = R.img;
  document.getElementById("rightName").innerText = R.name;

  document.getElementById("progress").innerText =
    `Progress ${current + 1} / ${total}`;
}

function choose(choice) {
  current++;

  if (choice === "left") {
    merged.push(left[li++]);
  } else if (choice === "right") {
    merged.push(right[ri++]);
  } else {
    merged.push(left[li++]);
    merged.push(right[ri++]);
  }

  showBattle();
}

function showResult(finalList) {
  document.body.innerHTML = "<h1>Hasil Ranking</h1>";

  finalList.forEach((m, i) => {
    document.body.innerHTML += `<p>${i + 1}. ${m.name}</p>`;
  });
}

startSorter();
