/* eslint-disable prefer-const */
// export default () => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const format = (angka: any) => {
  if (angka == null) {
    return "Rp. 0,-";
  }

  const ori = parseFloat(angka);

  angka = parseInt(angka) + "";

  let sisaDecimal = 0;
  if (ori > angka) {
    sisaDecimal = Math.floor((ori - angka) * 100);
  }

  let number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    const separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  if (sisaDecimal) {
    return "Rp. " + rupiah + "," + sisaDecimal;
  } else {
    return "Rp. " + rupiah;
  }
};
// };
