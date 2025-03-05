let money = Number(prompt("nhap so tien muon gui: "));
let rate = Number(prompt("nhap lai suat thang: "));
let month = Number(prompt("nhap so thang gui: "));
let interest = money * (rate / 1200) * month;
alert(`so tien lai la: ${interest}`);