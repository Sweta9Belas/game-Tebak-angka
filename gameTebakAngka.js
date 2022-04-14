function angkaAcak() {
  let angkaKom = Math.floor(Math.random() * 3) + 1;
  return angkaKom;
}

function validasi(angkaSatu, angkaDua) {
  if (angkaSatu == null || angkaSatu == "" || angkaSatu >= 4 || angkaSatu == 0) {
    return true;
  }

  if (angkaDua == null || angkaDua == "" || angkaDua >= 4 || angkaDua == 0) {
    return true;
  }
}

function check_tebakan(angkaSatu, angkaDua, angkaAcak) {
  if (angkaSatu == angkaAcak) {
    return (skorSatu += 1);
  } else if (angkaDua == angkaAcak) {
    return (skorDua += 1);
  }
}

function main() {
  alert("Selamat datang di Game tebak angka  \nDalam permainan ini ada beberapa peraturan antara lain: \n-Permainan terdiri dari 2 pemain \n-Masukkan angka dari 1-3 \n-Yang menebak dengan tepat ialah pemenangnya \n***Selamat Bermain***");
  let skorSatu = 0;
  let skorDua = 0;

  let angkaSatu = prompt("Masukkan angka yang anda pilih;");
  let angkaDua = prompt("Masukkan angka yang ada pilih;");
  validasi(angkaSatu, angkaDua);
  angkaAcak();
  check_tebakan();

  alert("Pemain satu skor anda adalah " + skorSatu);
  alert("Pemain dua skor anda adalah " + skorDua);
}

main();
