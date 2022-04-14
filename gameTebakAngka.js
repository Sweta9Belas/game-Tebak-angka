function angkaAcak() {
  let angkaKom = Math.floor(Math.random() * 3) + 1;
  return angkaKom;
}

function validasi(angka) {
  if (angka == null || angka == "" || angka >= 4 || angka == 0) {
    return false;
  }

  return true;
}

function check_tebakan(angka, angkaAcak) {
  if (angka === angkaAcak) {
    return true;
  }
  return false;
}

function main() {
  alert("Selamat datang di Game tebak angka  \nDalam permainan ini ada beberapa peraturan antara lain: \n-Permainan terdiri dari 2 pemain \n-Masukkan angka dari 1-3 \n-Yang menebak dengan tepat ialah pemenangnya \n***Selamat Bermain***");
  let skorSatu = 0;
  let skorDua = 0;

  for (let i = 0; i < 3; i++) {
    let angkaSatu = Number(prompt("Masukkan angka yang anda pilih;"));
    let angkaDua = Number(prompt("Masukkan angka yang ada pilih;"));
    let acak = angkaAcak();
    angkaAcak();
    if (validasi(angkaSatu)) {
      if (check_tebakan(angkaSatu, acak)) {
        skorSatu += 1;
      }
    }

    if (validasi(angkaDua)) {
      if (check_tebakan(angkaDua, acak)) {
        skorDua += 1;
      }
    }
    alert("angka komputer adalah" + acak);
    alert("Pemain satu skor anda adalah " + skorSatu);
    alert("Pemain dua skor anda adalah " + skorDua);
  }
}

main();
