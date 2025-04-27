function print() {
  console.log("halo dunia");
}

const ngotak = document.getElementsByClassName("kotak");

for (let i = 0; i < ngotak.length; i++) {
  const kotak = ngotak[i];
  console.log(kotak);
  kotak.addEventListener("click", print);
}
