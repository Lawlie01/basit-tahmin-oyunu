
"use scrict";
let hakSayisi = 0;
let rastgeleSayi = 0;
const _tahminEt = document.getElementById("tahminEt");
const _yeniOyun = document.getElementById("yeniOyun");
const _sonuc = document.getElementById("sonuc");
const _sayi = document.getElementById("sayi");

_yeniOyun.onclick = yeni;
_tahminEt.onclick = tahmin;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function yeni() {
    rastgeleSayi = randomInt(0, 99);
    hakSayisi = 10;
    _sonuc.innerHTML = "";
    _sayi.value = "";
    _tahminEt.disabled = false;
    _yeniOyun.disabled = true;
}

function tahmin() {
    if(hakSayisi == 0) return;
    let girilenSayi = parseInt(_sayi.value);
    let mesaj = "";
    if (isNaN(girilenSayi)) return;

    if(rastgeleSayi > girilenSayi) {
        mesaj = "Daha BÜYÜK değer deneyin";
    } else if (girilenSayi > rastgeleSayi){
        mesaj = "Daha KÜÇÜK değer deneyin";
    } else {
        mesaj = "Tebrikler!!!";
        _tahminEt.disabled = true;
        _yeniOyun.disabled = false;
    }
    
    hakSayisi--;
    _sonuc.innerHTML = mesaj
    _sonuc.innerHTML += "<br />"
    _sonuc.innerHTML += "Kalan hak sayısı : " + hakSayisi
    if (hakSayisi == 0) {
        _tahminEt.disabled = true;
        _yeniOyun.disabled = false;
    }
}