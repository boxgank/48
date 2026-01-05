const members = [
  { name: "Alya Amanda", img: "https://via.placeholder.com/150", score: 0 },
  { name: "Anindya Ramadhani", img: "https://via.placeholder.com/150", score: 0 },
  { name: "Aurellia", img: "https://via.placeholder.com/150", score: 0 },
  { name: "Archel Alana", img: "https://via.placeholder.com/150", score: 0 }
];

let queue = [];
let current = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function start() {
  queue = shuffle([...members]);
  nextBattle();
}

function nextBattle() {
  if (queue.length < 2) {
    showResult();
    return;
  }

  current = [queue.shift(), queue.shift()];

  document.getElementById("img0").src = current[0].img;
  document.getElementById("name0").innerText = current[0].name;

  document.getElementById("img1").src = current[1].img;
  document.getElementById("name1").innerText = current[1].name;
}

function vote(index) {
  current[index].score++;
  nextBattle();
}

function showResult() {
  document.getElementById("battle").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const ranking = document.getElementById("ranking");
  members
    .sort((a, b) => b.score - a.score)
    .forEach(m => {
      const li = document.createElement("li");
      li.textContent = `${m.name} (${m.score})`;
      ranking.appendChild(li);
    });
}

start();

