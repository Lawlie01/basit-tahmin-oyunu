

let hakSayisi = 0;
let rastgeleSayi = 0;
let _tahminEt = document.getElementById("tahminEt");
let _yeniOyun = document.getElementById("yeniOyun");
let _sonuc = document.getElementById("sonuc");
let _sayi = document.getElementById("sayi");

_yeniOyun.onclick = yeni;
_tahminEt.onclick = tahmin;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

