let isim = prompt("İsminizi bahşeder misiniz?");
let span = document.querySelector("#span");
span.innerHTML = `${isim.toLocaleUpperCase()} !`;

let tarih = document.querySelector("#tarih");
let gunler = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function tarihSaat() {
  let date = new Date().toLocaleString("tr-TR"); // tarih saati al
  tarih.innerHTML = `  ${gunler[new Date().getDay()]} ${date}`; // zaman id'li elemente yazdır
}
setInterval(tarihSaat, 1000);
