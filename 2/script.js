function change() {
  document.getElementById("text").innerText = "Selamat belajar js";
}

// document.getElementById("judul").innerText = "Halo Mahasiswa"
function ubahJudul() {
  let isiJudul = document.getElementById("judul");
  isiJudul.innerText = "Halo Guis";
}

function munculAlert() {
  alert("perhatian perhatian");
}

function show() {
  let name = document.getElementById("name").value;
  document.getElementById("result").innerHTML = "Haiii" + name;
}

function changeColor() {
  document.getElementById("warna").style.color = "magenta";
  document.getElementById("warna").style.fontWeight = "bold";
}

function add() {
  let p = document.createElement("p");
  p.innerText = "newwwww";
  p.style.display = "inline";
  p.style.marginRight = "20px";
  document.getElementById("wadah").appendChild(p);
}

function del() {
  let wadah = document.getElementById("wadah");
  if (wadah.firstChild) wadah.removeChild(wadah.firstChild);
}

let tombol = document.getElementById("klik");
// klikbiasa
// tombol.addEventListener("click", function () {
//   alert("berhasil klik");
// });
// klikdouble
tombol.addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "blue";
});

// hover
tombol.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "red";
});
tombol.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "";
});

// func default tombol ppp klik
// document.getElementById("klik").addEventListener("click", function () {
//   alert("HALO HALO");
// });
