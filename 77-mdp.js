/* LAPISAN MDP 2024: Manual Desain Perkerasan Jalan (Bina Marga, No. 03/M/BM/2024).
   Alat: Beban Lalu Lintas (CESA, VDF regional Lampiran H), Struktur Lentur (Bagan Desain 2, 3(1)-3(4), 3A, 3B),
   Perkerasan Kaku (Tabel 8.3, Bagan 8, 8A), Lalu Lintas Rendah (Bagan 4-7), Tabel Acuan.
   Hasil = REKOMENDASI AWAL dari katalog MDP; wajib diverifikasi perencana dan dokumen MDP resmi. */
(()=>{
const N=(x,d=2)=>isFinite(x)?Number(x).toLocaleString('id-ID',{maximumFractionDigits:d}):'-';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const VDF=[["ACEH DAN SUMATERA UTARA",{"VDF4F":[1.2,0.5,1.6,10.1,10.2,null,null,null,null,8.2,6.6,11.1,16.0,null],"VDF4N":[1.2,0.5,0.4,3.0,3.9,null,null,null,null,5.7,5.6,6.8,9.0,null],"VDF5F":[1.3,0.4,2.2,17.2,19.7,null,null,null,null,11.9,9.2,19.5,29.4,null],"VDF5N":[1.3,0.4,0.4,3.4,5.2,null,null,null,null,7.2,7.2,9.6,12.8,null]}],["SUMATERA BARAT LINTAS TENGAH UTARA",{"VDF4F":[1.2,0.5,1.5,null,5.1,null,null,null,null,6.8,4.1,6.1,null,null],"VDF4N":[1.2,0.5,0.5,null,2.5,null,null,null,null,4.0,4.1,4.2,null,null],"VDF5F":[1.3,0.4,1.9,null,8.8,null,null,null,null,10.5,4.9,10.1,null,null],"VDF5N":[1.3,0.4,0.5,null,3.1,null,null,null,null,5.2,4.9,6.0,null,null]}],["SUMATERA BARAT LINTAS TENGAH SELATAN",{"VDF4F":[1.2,0.5,1.4,null,9.6,null,null,null,null,6.8,8.7,13.9,17.6,null],"VDF4N":[1.2,0.5,0.5,null,4.5,null,null,null,null,5.3,7.3,5.5,9.6,null],"VDF5F":[1.3,0.4,1.9,null,17.0,null,null,null,null,9.6,12.4,26.1,31.4,null],"VDF5N":[1.3,0.4,0.4,null,6.0,null,null,null,null,6.7,9.9,7.9,14.0,null]}],["SUMATERA BARAT LINTAS BARAT PESISIR UTARA",{"VDF4F":[1.2,0.5,1.5,null,5.3,null,null,null,null,4.8,null,7.8,6.8,null],"VDF4N":[1.2,0.5,0.6,null,3.0,null,null,null,null,4.5,null,5.8,6.8,null],"VDF5F":[1.3,0.4,1.9,null,8.7,null,null,null,null,6.1,null,10.4,9.1,null],"VDF5N":[1.3,0.4,0.5,null,3.7,null,null,null,null,5.6,null,7.2,9.1,null]}],["SUMATERA BARAT LINTAS BARAT PESISIR SELATAN",{"VDF4F":[1.2,0.5,1.6,null,3.7,null,null,null,null,3.6,1.3,11.2,5.9,null],"VDF4N":[1.2,0.5,0.5,null,2.6,null,null,null,null,3.5,1.3,5.5,4.7,null],"VDF5F":[1.3,0.4,2.0,null,5.5,null,null,null,null,4.0,1.4,20.1,8.5,null],"VDF5N":[1.3,0.4,0.5,null,3.3,null,null,null,null,4.0,1.4,7.7,6.2,null]}],["RIAU",{"VDF4F":[1.2,0.5,2.3,9.7,13.6,null,null,null,null,7.4,10.4,20.7,15.4,null],"VDF4N":[1.2,0.5,0.7,3.1,4.8,null,null,null,null,4.7,7.2,7.8,7.4,null],"VDF5F":[1.3,0.4,3.2,15.7,26.1,null,null,null,null,10.7,15.4,40.4,27.9,null],"VDF5N":[1.3,0.4,0.7,3.6,6.3,null,null,null,null,5.9,9.6,11.5,10.1,null]}],["JAMBI",{"VDF4F":[1.2,0.5,1.4,null,13.8,null,null,null,null,8.4,5.5,null,10.1,null],"VDF4N":[1.2,0.5,0.5,null,4.6,null,null,null,null,6.1,5.5,null,5.7,null],"VDF5F":[1.3,0.4,1.8,null,25.4,null,null,null,null,11.9,7.5,null,18.0,null],"VDF5N":[1.3,0.4,0.4,null,6.0,null,null,null,null,8.0,7.5,null,8.2,null]}],["BENGKULU",{"VDF4F":[1.2,0.5,1.2,null,7.3,null,null,null,null,null,null,null,null,null],"VDF4N":[1.2,0.5,0.4,null,3.2,null,null,null,null,null,null,null,null,null],"VDF5F":[1.3,0.4,1.5,null,12.9,null,null,null,null,null,null,null,null,null],"VDF5N":[1.3,0.4,0.4,null,4.0,null,null,null,null,null,null,null,null,null]}],["SUMATERA SELATAN (JALAN LINTAS TIMUR)",{"VDF4F":[1.2,0.5,2.6,7.2,8.8,null,null,null,null,9.0,11.0,7.5,10.2,null],"VDF4N":[1.2,0.5,0.8,3.0,3.8,null,null,null,null,4.9,7.0,5.3,6.6,null],"VDF5F":[1.3,0.4,3.3,10.7,16.3,null,null,null,null,14.7,17.4,11.9,16.7,null],"VDF5N":[1.3,0.4,0.7,3.4,4.9,null,null,null,null,6.3,9.3,7.1,8.9,null]}],["LAMPUNG (JALAN LINTAS TIMUR)",{"VDF4F":[1.2,0.5,2.2,8.7,10.3,null,null,null,null,8.4,5.8,5.9,9.1,null],"VDF4N":[1.2,0.5,0.7,2.6,4.2,null,null,null,null,4.1,4.1,3.4,5.6,null],"VDF5F":[1.3,0.4,2.9,14.6,18.4,null,null,null,null,12.5,8.2,8.3,14.9,null],"VDF5N":[1.3,0.4,0.7,2.9,5.4,null,null,null,null,4.7,4.9,3.8,7.3,null]}],["KEPULAUAN RIAU",{"VDF4F":[1.2,0.5,1.7,null,5.3,null,null,null,null,null,null,null,null,null],"VDF4N":[1.2,0.5,0.5,null,2.4,null,null,null,null,null,null,null,null,null],"VDF5F":[1.3,0.4,2.2,null,9.3,null,null,null,null,null,null,null,null,null],"VDF5N":[1.3,0.4,0.3,null,3.1,null,null,null,null,null,null,null,null,null]}],["BANGKA BELITUNG",{"VDF4F":[1.2,0.5,1.2,null,7.3,null,null,null,null,null,null,null,null,null],"VDF4N":[1.2,0.5,0.4,null,3.2,null,null,null,null,null,null,null,null,null],"VDF5F":[1.3,0.4,1.5,null,12.9,null,null,null,null,null,null,null,null,null],"VDF5N":[1.3,0.4,0.4,null,4.0,null,null,null,null,null,null,null,null,null]}],["BANTEN - PANTURA",{"VDF4F":[1.2,0.5,2.9,null,3.5,null,6.6,null,null,4.0,5.4,6.3,8.7,null],"VDF4N":[1.2,0.5,0.7,null,1.8,null,3.5,null,null,2.8,3.5,3.6,5.4,null],"VDF5F":[1.3,0.4,4.1,null,5.9,null,9.6,null,null,5.7,8.4,10.0,14.3,null],"VDF5N":[1.3,0.4,0.6,null,2.2,null,3.9,null,null,3.4,4.7,4.7,7.1,null]}],["BANTEN - LINTAS TENGAH",{"VDF4F":[1.2,0.5,4.5,null,6.2,null,null,null,null,5.8,null,null,null,null],"VDF4N":[1.2,0.5,1.5,null,3.1,null,null,null,null,3.7,null,null,null,null],"VDF5F":[1.3,0.4,6.3,null,10.3,null,null,null,null,8.3,null,null,null,null],"VDF5N":[1.3,0.4,1.5,null,3.9,null,null,null,null,4.6,null,null,null,null]}],["DKI PANTURA (CAKUNG - CILINCING)",{"VDF4F":[1.2,0.5,2.6,3.5,4.8,null,null,null,null,3.4,5.0,4.1,3.8,null],"VDF4N":[1.2,0.5,1.4,2.0,2.9,null,null,null,null,2.7,3.6,2.7,2.9,null],"VDF5F":[1.3,0.4,3.2,4.9,7.2,null,null,null,null,4.1,6.8,5.4,5.0,null],"VDF5N":[1.3,0.4,1.3,2.1,3.5,null,null,null,null,2.9,4.2,2.9,3.2,null]}],["JAWA BARAT - PANTURA",{"VDF4F":[1.2,0.5,3.8,7.8,16.3,null,null,12.9,null,6.7,12.8,14.8,20.8,null],"VDF4N":[1.2,0.5,0.8,2.8,4.6,null,null,5.9,null,4.5,6.6,6.4,7.0,null],"VDF5F":[1.3,0.4,5.5,12.3,33.6,null,null,18.9,null,9.6,21.5,26.8,44.2,null],"VDF5N":[1.3,0.4,0.7,3.2,6.3,null,null,6.9,null,5.7,8.6,8.9,9.6,null]}],["JAWA BARAT - LINTAS TENGAH",{"VDF4F":[1.2,0.5,3.5,null,5.7,null,null,null,null,4.0,2.6,4.1,4.4,null],"VDF4N":[1.2,0.5,1.1,null,3.1,null,null,null,null,2.9,2.0,4.0,4.2,null],"VDF5F":[1.3,0.4,4.9,null,9.2,null,null,null,null,5.5,3.5,5.4,5.6,null],"VDF5N":[1.3,0.4,1.0,null,4.0,null,null,null,null,3.5,2.2,5.2,5.3,null]}],["JAWA BARAT - LINTAS SELATAN",{"VDF4F":[1.2,0.5,1.4,null,9.8,null,null,null,null,3.8,null,12.0,26.3,null],"VDF4N":[1.2,0.5,0.3,null,3.4,null,null,null,null,2.3,null,6.1,10.3,null],"VDF5F":[1.3,0.4,1.8,null,19.3,null,null,null,null,5.3,null,20.4,54.8,null],"VDF5N":[1.3,0.4,0.2,null,4.4,null,null,null,null,2.7,null,8.5,15.1,null]}],["JAWA TENGAH - PANTURA",{"VDF4F":[1.2,0.5,2.6,14.9,11.2,null,null,12.2,null,9.4,14.2,15.8,22.2,null],"VDF4N":[1.2,0.5,0.7,3.3,3.9,null,null,5.3,null,3.7,7.7,7.0,9.3,null],"VDF5F":[1.3,0.4,3.5,27.0,22.3,null,null,19.6,null,15.3,23.9,27.7,43.4,null],"VDF5N":[1.3,0.4,0.6,3.8,5.3,null,null,6.1,null,4.2,10.7,9.9,13.7,null]}],["JAWA TENGAH - LINTAS SELATAN",{"VDF4F":[1.2,0.5,0.9,null,13.5,20.7,16.4,null,null,7.4,11.1,16.4,15.3,null],"VDF4N":[1.2,0.5,0.3,null,4.4,4.8,4.9,null,null,5.0,8.1,7.5,8.4,null],"VDF5F":[1.3,0.4,1.1,null,26.8,47.0,29.4,null,null,10.5,17.0,28.7,27.4,null],"VDF5N":[1.3,0.4,0.2,null,5.8,6.3,5.6,null,null,6.3,10.9,10.3,11.9,null]}],["DAERAH ISTIMEWA YOGYAKARTA",{"VDF4F":[1.2,0.5,3.8,null,6.4,null,null,null,null,6.4,3.5,6.2,5.2,null],"VDF4N":[1.2,0.5,1.1,null,3.2,null,null,null,null,4.3,2.2,6.0,5.0,null],"VDF5F":[1.3,0.4,5.3,null,10.6,null,null,null,null,9.0,5.3,8.1,6.7,null],"VDF5N":[1.3,0.4,1.0,null,4.0,null,null,null,null,5.3,2.4,7.9,6.4,null]}],["JAWA TIMUR - PANTURA",{"VDF4F":[1.2,0.5,2.2,8.1,14.3,null,10.2,16.9,null,9.8,15.5,21.4,21.7,null],"VDF4N":[1.2,0.5,0.6,2.9,4.4,null,4.6,7.1,null,4.8,8.3,7.6,9.4,null],"VDF5F":[1.3,0.4,2.9,12.4,28.5,null,16.2,25.7,null,15.8,26.5,42.2,42.5,null],"VDF5N":[1.3,0.4,0.6,3.4,6.0,null,5.2,8.4,null,5.9,11.7,10.8,13.9,null]}],["JAWA TIMUR - JALAN LINTAS TENGAH",{"VDF4F":[1.2,0.5,2.7,10.3,18.8,null,29.0,18.2,null,11.8,16.9,21.4,35.4,null],"VDF4N":[1.2,0.5,0.7,3.1,5.5,null,7.6,8.1,null,7.6,10.3,7.1,12.8,null],"VDF5F":[1.3,0.4,3.7,16.5,35.3,null,53.9,26.7,null,17.2,27.2,46.5,70.1,null],"VDF5N":[1.3,0.4,0.7,3.6,7.5,null,9.1,9.8,null,9.9,14.4,11.3,19.2,null]}],["JAWA TIMUR - JALAN LINTAS SELATAN",{"VDF4F":[1.2,0.5,1.7,4.9,14.6,null,17.8,null,null,9.9,15.1,15.4,29.4,null],"VDF4N":[1.2,0.5,0.6,2.1,4.8,null,6.4,null,null,6.5,7.9,7.2,10.7,null],"VDF5F":[1.3,0.4,2.1,7.4,27.9,null,29.1,null,null,14.2,26.3,27.9,59.1,null],"VDF5N":[1.3,0.4,0.5,2.4,6.5,null,7.5,null,null,8.4,10.9,10.6,16.0,null]}],["JAWA TIMUR JALAN PENGHUBUNG LINTAS PULAU JAWA",{"VDF4F":[1.2,0.5,1.1,4.6,6.0,null,2.5,7.1,null,10.7,6.4,5.3,8.8,null],"VDF4N":[1.2,0.5,0.3,2.5,3.4,null,1.5,5.0,null,7.4,5.1,3.8,6.1,null],"VDF5F":[1.3,0.4,1.4,6.3,9.5,null,3.5,9.1,null,15.3,9.1,8.4,13.5,null],"VDF5N":[1.3,0.4,0.3,2.8,4.3,null,1.6,5.7,null,9.5,6.5,5.1,8.2,null]}],["KALIMANTAN BARAT / KALIMANTAN TENGAH",{"VDF4F":[1.2,0.5,1.5,null,4.9,null,null,null,null,2.6,5.1,3.9,7.6,null],"VDF4N":[1.2,0.5,0.4,null,2.5,null,null,null,null,2.4,5.1,3.9,4.3,null],"VDF5F":[1.3,0.4,1.9,null,8.7,null,null,null,null,3.3,6.8,5.2,13.3,null],"VDF5N":[1.3,0.4,0.4,null,3.2,null,null,null,null,3.0,6.8,5.2,5.9,null]}],["KALIMANTAN TIMUR",{"VDF4F":[1.2,0.5,1.8,null,6.7,null,null,null,null,4.2,6.9,1.8,0.6,null],"VDF4N":[1.2,0.5,0.6,null,3.8,null,null,null,null,3.2,5.3,1.8,0.6,null],"VDF5F":[1.3,0.4,2.3,null,10.7,null,null,null,null,5.8,9.9,2.6,0.5,null],"VDF5N":[1.3,0.4,0.5,null,4.9,null,null,null,null,4.0,6.9,2.6,0.5,null]}],["KALIMANTAN UTARA",{"VDF4F":[1.2,0.5,1.1,null,6.7,null,null,null,null,3.7,null,null,null,null],"VDF4N":[1.2,0.5,0.4,null,4.3,null,null,null,null,3.1,null,null,null,null],"VDF5F":[1.3,0.4,1.2,null,10.3,null,null,null,null,4.6,null,null,null,null],"VDF5N":[1.3,0.4,0.3,null,5.5,null,null,null,null,3.6,null,null,null,null]}],["KALIMANTAN SELATAN",{"VDF4F":[1.2,0.5,1.3,null,5.5,null,null,null,null,6.3,7.6,6.9,9.1,null],"VDF4N":[1.2,0.5,0.4,null,3.0,null,null,null,null,4.7,5.8,5.5,6.3,null],"VDF5F":[1.3,0.4,1.7,null,9.4,null,null,null,null,8.8,11.3,10.5,14.8,null],"VDF5N":[1.3,0.4,0.3,null,3.9,null,null,null,null,5.9,7.7,7.4,8.8,null]}],["SULAWESI UTARA",{"VDF4F":[1.2,0.5,1.2,9.0,13.2,null,null,null,null,10.6,11.5,null,31.8,null],"VDF4N":[1.2,0.5,0.5,2.4,4.9,null,null,null,null,7.0,7.3,null,11.5,null],"VDF5F":[1.3,0.4,1.3,15.5,25.2,null,null,null,null,15.3,17.6,null,64.3,null],"VDF5N":[1.3,0.4,0.4,2.8,6.5,null,null,null,null,9.0,9.9,null,17.2,null]}],["GORONTALO - SULTENG - SULTRA",{"VDF4F":[1.2,0.5,0.9,null,16.9,null,null,null,null,10.5,10.7,null,24.8,null],"VDF4N":[1.2,0.5,0.4,null,4.9,null,null,null,null,6.8,4.1,null,9.7,null],"VDF5F":[1.3,0.4,0.9,null,34.0,null,null,null,null,15.2,19.7,null,48.9,null],"VDF5N":[1.3,0.4,0.3,null,6.6,null,null,null,null,8.9,5.5,null,14.6,null]}],["SULAWESI BARAT",{"VDF4F":[1.2,0.5,2.1,6.4,11.5,null,null,null,null,5.9,2.0,null,null,null],"VDF4N":[1.2,0.5,0.6,2.3,4.4,null,null,null,null,4.3,2.0,null,null,null],"VDF5F":[1.3,0.4,2.9,9.9,21.3,null,null,null,null,8.5,2.2,null,null,null],"VDF5N":[1.3,0.4,0.5,2.6,5.8,null,null,null,null,5.4,2.2,null,null,null]}],["SULAWESI SELATAN",{"VDF4F":[1.2,0.5,1.7,8.1,6.3,null,null,null,null,5.9,9.5,6.4,5.4,null],"VDF4N":[1.2,0.5,0.5,2.9,3.8,null,null,null,null,4.3,6.4,5.1,3.7,null],"VDF5F":[1.3,0.4,2.2,12.9,10.2,null,null,null,null,7.9,14.5,9.2,8.4,null],"VDF5N":[1.3,0.4,0.5,3.4,5.0,null,null,null,null,5.3,8.5,6.6,4.6,null]}],["BALI",{"VDF4F":[1.2,0.5,3.8,7.4,12.4,null,null,null,null,8.0,5.0,11.2,7.1,null],"VDF4N":[1.2,0.5,1.0,2.6,4.7,null,null,null,null,4.9,4.2,5.2,5.5,null],"VDF5F":[1.3,0.4,5.2,11.6,23.4,null,null,null,null,12.3,7.2,20.7,11.9,null],"VDF5N":[1.3,0.4,1.0,3.0,6.2,null,null,null,null,6.3,5.6,7.6,8.5,null]}],["NUSA TENGGARA BARAT",{"VDF4F":[1.2,0.5,1.4,3.8,9.8,null,null,null,null,3.5,2.6,3.0,4.3,null],"VDF4N":[1.2,0.5,0.4,1.7,3.5,null,null,null,null,2.5,2.6,2.9,3.5,null],"VDF5F":[1.3,0.4,1.8,5.6,18.0,null,null,null,null,4.9,3.3,4.4,6.8,null],"VDF5N":[1.3,0.4,0.3,1.8,4.7,null,null,null,null,3.0,3.3,4.1,5.1,null]}],["PAPUA BARAT - PAPUA",{"VDF4F":[1.2,0.5,0.8,null,13.4,null,null,null,null,null,null,null,null,null],"VDF4N":[1.2,0.5,0.4,null,4.7,null,null,null,null,null,null,null,null,null],"VDF5F":[1.3,0.4,0.8,null,26.0,null,null,null,null,null,null,null,null,null],"VDF5N":[1.3,0.4,0.3,null,6.2,null,null,null,null,null,null,null,null,null]}]];
const CLS=['5B','6A','6B','7A1','7A2','7A3','7B1','7B2','7B3','7C1','7C2A','7C2B','7C3','7C4'];
const CLN={'5B':'Bus besar','6A':'Truk 2 sumbu ringan','6B':'Truk 2 sumbu sedang','7A1':'Truk 3 sumbu (11.2)','7A2':'Truk 3 sumbu (1.22)','7A3':'Truk 4 sumbu (11.22)','7B1':'Truk 4 sumbu (1.2+2.2)','7B2':'Truk 5 sumbu (11.2+2.2)','7B3':'Truk 5 sumbu (1.22+2.2)','7C1':'Truk 4 sumbu trailer (1.2-22)','7C2A':'Truk 5 sumbu trailer (1.22-22)','7C2B':'Truk 5 sumbu trailer (1.2-222)','7C3':'Truk 6 sumbu trailer','7C4':'Truk 7 sumbu trailer'};
const LHR0={'5B':100,'6A':150,'6B':200,'7A1':80,'7A2':50,'7A3':20};
const DLT={1:1,2:.8,3:.6,4:.5};
const title=s=>s.toLowerCase().replace(/(^|[\s(\/-])([a-z])/g,(m,a,b)=>a+b.toUpperCase()).replace(/\bDki\b/,'DKI').replace(/\bDaerah Istimewa\b/,'Daerah Istimewa');

/* ===== DATA BAGAN DESAIN (MDP 2024 Bab 6-8) ===== */
const B3=[
{id:'3(1)',ctb:150,pg:'7-14',r:[[1,6],[6,10],[10,20],[20,30],[30,40],[40,50],[50,80],[80,100],[100,150],[150,200]],
 wc:[40,40,50,40,40,40,40,50,40,40],bc1:[60,75,80,65,60,60,80,80,60,60],bc2:[0,0,0,70,0,0,0,0,0,0],ab1:[0,0,0,0,90,100,100,100,75,80],ab2:[0,0,0,0,0,0,0,0,75,90]},
{id:'3(2)',ctb:200,pg:'7-15',r:[[1,8],[8,15],[15,30],[30,50],[50,75],[75,95],[95,150],[150,200]],
 wc:[40,50,50,40,40,40,50,40],bc1:[60,70,80,70,60,70,80,60],bc2:[0,0,0,70,0,0,0,0],ab1:[0,0,0,0,100,100,100,75],ab2:[0,0,0,0,0,0,0,75]},
{id:'3(3)',ctb:250,pg:'7-16',r:[[1,9],[9,15],[15,30],[30,50],[50,75],[75,110],[110,200]],
 wc:[40,40,50,40,40,40,40],bc1:[60,70,80,60,70,65,80],bc2:[0,0,0,70,0,0,0],ab1:[0,0,0,0,80,100,100],ab2:[0,0,0,0,0,0,0]},
{id:'3(4)',ctb:300,pg:'7-17',r:[[1,10],[10,17],[17,30],[30,40],[40,60],[60,90],[90,150],[150,200]],
 wc:[40,40,50,50,40,50,50,50],bc1:[60,70,75,80,60,60,60,75],bc2:[0,0,0,0,70,0,0,0],ab1:[0,0,0,0,0,80,100,100],ab2:[0,0,0,0,0,0,0,0]}];
const B3A={pg:'7-18',r:[[0,2],[2,5],[5,10],[10,15],[15,30],[30,50],[50,100],[100,150],[150,200]],
 wc:[60,40,40,40,40,40,40,50,40],bc1:[0,65,75,75,60,60,75,80,60],bc2:[0,80,80,0,0,0,0,0,0],ab1:[0,0,0,100,80,85,100,100,80],ab2:[0,0,0,0,80,100,100,100,80],ab3:[0,0,0,0,0,0,0,0,90],tp:[0,0,200,200,200,200,200,200,200]};
const col=(r,x)=>{for(let i=0;i<r.length;i++)if(x>r[i][0]&&x<=r[i][1])return i;return x<=r[0][0]?-2:-1};
const SG=[[5,'SG5',200,200,200],[4,'SG4',200,200,200],[3,'SG3',300,400,400],[2.5,'SG2,5',300,600,600]];
const sgOf=cbr=>cbr>=6?null:SG.find(s=>cbr>=s[0])||(cbr<2.5?'low':SG[3]);
const KAKU=[[1,10,150,150,150],[10,50,200,180,180],[50,1e9,250,230,230]];
const C={asp:['#3b3f45','#4a4f57','#5a606a','#6b727d'],ctb:'#7f8fa6',lfa:'#c9a66b',tp:'#a77b4a',sg:'#8a6a4a'};

/* ===== UI ===== */
const css=document.createElement('style');css.textContent=`
#mdp{display:flex;flex-direction:column;color:inherit;font-family:inherit}
#mdp nav{display:flex;gap:8px;overflow-x:auto;padding:14px 4px 8px;scrollbar-width:thin}
#mdp nav button{flex:0 0 auto;border:1px solid var(--line,#8886);background:var(--card,transparent);color:inherit;border-radius:999px;padding:8px 14px;font:inherit;font-size:13.5px;cursor:pointer;white-space:nowrap}
#mdp nav button.on{border-color:var(--acc,#0aa);background:var(--chip,#0aa2);color:var(--acc,inherit);font-weight:600}
#mdp .mdb{padding:6px 4px 28px}
#mdp .mdh{font-size:12.5px;opacity:.75;margin:2px 0 12px;line-height:1.45}
#mdp .mdf{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:12px}
#mdp .mdf label{display:flex;flex-direction:column;gap:4px;font-size:12.5px;opacity:.95}
#mdp .mdf input,#mdp .mdf select{font:inherit;font-size:15px;padding:9px 10px;border-radius:10px;border:1px solid var(--line,#8886);background:var(--card,transparent);color:inherit;min-width:0}
#mdp h3{font-size:14px;margin:16px 0 8px;letter-spacing:.2px}
#mdp .mdk{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin:10px 0}
#mdp .mdk div{border:1px solid var(--line,#8886);border-radius:12px;padding:10px 12px;background:var(--card,transparent)}
#mdp .mdk b{display:block;font-size:19px;color:var(--acc,inherit)}#mdp .mdk small{opacity:.75;font-size:11.5px}
#mdp table{width:100%;border-collapse:collapse;font-size:13px;margin:6px 0 10px}
#mdp th,#mdp td{border-bottom:1px solid var(--line,#8884);padding:6px 6px;text-align:left;vertical-align:top}
#mdp td.n,#mdp th.n{text-align:right;font-variant-numeric:tabular-nums}
#mdp .tw{overflow-x:auto}
#mdp .w{border-left:3px solid #d49a00;background:#d49a0014;padding:8px 10px;border-radius:6px;font-size:12.5px;margin:8px 0;line-height:1.45}
#mdp .ok{border-left-color:#1f9d55;background:#1f9d5514}
#mdp .bad{border-left-color:#d64545;background:#d6454514}
#mdp button.cta{font:inherit;font-size:13.5px;padding:9px 14px;border-radius:10px;border:1px solid var(--acc,#0aa);background:var(--chip,#0aa2);color:inherit;cursor:pointer;margin:4px 6px 4px 0}
#mdp .alt{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 10px}
#mdp .alt button{font:inherit;font-size:12.5px;padding:6px 11px;border-radius:999px;border:1px solid var(--line,#8886);background:var(--card,transparent);color:inherit;cursor:pointer}
#mdp .alt button.on{border-color:var(--acc,#0aa);background:var(--chip,#0aa2);font-weight:600}
#mdp svg{width:100%;max-width:420px;display:block;margin:8px 0;color:inherit}
#mdp .src{font-size:11.5px;opacity:.65;margin-top:10px}
`;document.head.appendChild(css);

const kv=a=>'<div class="mdk">'+a.map(x=>`<div><small>${esc(x[0])}</small><b>${esc(x[1])}</b>${x[2]?`<small>${esc(x[2])}</small>`:''}</div>`).join('')+'</div>';
const tbl=(h,rows,num)=>`<div class="tw"><table><thead><tr>${h.map((x,i)=>`<th class="${num&&num.includes(i)?'n':''}">${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((x,i)=>`<td class="${num&&num.includes(i)?'n':''}">${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const wn=(t,c)=>`<div class="w ${c||''}">${t}</div>`;

function stackSvg(layers){
 const tot=layers.reduce((a,l)=>a+l[1],0),k=Math.max(.34,Math.min(.6,330/tot)),W=420;let y=14,s='';
 layers.forEach(l=>{const h=Math.max(16,l[1]*k);s+=`<rect x="10" y="${y}" width="200" height="${h}" fill="${l[2]}" stroke="currentColor" stroke-width="1" opacity=".92"/><text x="${220}" y="${y+h/2+4}" fill="currentColor" font-size="11.5">${esc(l[0])} - ${l[1]} mm</text>`;y+=h});
 s+=`<rect x="10" y="${y}" width="200" height="22" fill="${C.sg}" opacity=".55" stroke="currentColor"/><text x="220" y="${y+15}" fill="currentColor" font-size="11.5">Tanah dasar</text>`;
 return `<svg viewBox="0 0 ${W} ${y+34}" font-family="system-ui" aria-label="Skema lapis perkerasan">${s}</svg>`}

const V={lalin:{reg:'JAWA TENGAH - PANTURA',kon:'Normal',ur:20,i:4.8,dd:.5,lj:2,...Object.fromEntries(CLS.map(c=>['l'+c,LHR0[c]||0]))},
 lentur:{esa5:25,cbr:5,lj:2,alt:0},kaku:{jskn:20,lhrn:100,mst:8},rendah:{esa:0.3}};
let cur='lalin',root=null;

const TOOLS={};
/* ---------- 1. LALU LINTAS ---------- */
TOOLS.lalin={n:'Beban Lalu Lintas',i:'🚛',d:'CESA dari LHR, VDF regional (Lampiran H), umur rencana dan pertumbuhan',
 form(v){return `<p class="mdh">Rumus MDP 2024 (4.3): CESAL = ΣLHR × VDF × 365 × DD × DL × R. LHR = kendaraan niaga <b>dua arah</b> pada tahun pertama beroperasi. Contoh angka LHR di bawah hanya isian awal; ganti dengan data survei.</p>
 <div class="mdf"><label>Wilayah VDF (Lampiran H)<select data-k="reg">${VDF.map(r=>`<option value="${esc(r[0])}"${r[0]===v.reg?' selected':''}>${esc(title(r[0]))}</option>`).join('')}</select></label>
 <label>Kondisi beban<select data-k="kon"><option${v.kon==='Normal'?' selected':''}>Normal</option><option${v.kon==='Faktual'?' selected':''}>Faktual</option></select></label>
 <label>Umur rencana, UR (tahun)<input type="number" data-k="ur" value="${v.ur}" min="1" step="1"></label>
 <label>Pertumbuhan, i (%/tahun)<input type="number" data-k="i" value="${v.i}" min="0" step="0.01"></label>
 <label>Faktor arah, DD<input type="number" data-k="dd" value="${v.dd}" min="0.1" max="1" step="0.05"></label>
 <label>Jumlah lajur tiap arah<select data-k="lj">${[1,2,3,4].map(n=>`<option${n==v.lj?' selected':''}>${n}</option>`).join('')}</select></label></div>
 <h3>LHR kendaraan niaga dua arah (kend/hari)</h3><div class="mdf">${CLS.map(c=>`<label>${c} - ${esc(CLN[c])}<input type="number" min="0" data-k="l${c}" value="${v['l'+c]}"></label>`).join('')}</div>`},
 calc(v){const reg=(VDF.find(r=>r[0]===v.reg)||VDF[0])[1],f=v.kon==='Faktual'?'F':'N',v5=reg['VDF5'+f],v4=reg['VDF4'+f];
  const UR=+v.ur,i=+v.i,R=i>0?(Math.pow(1+.01*i,UR)-1)/(.01*i):UR,DL=DLT[v.lj]||1,DD=+v.dd;
  let s5=0,s4=0,lt=0,miss=[];const rows=CLS.map((c,k)=>{const L=+v['l'+c]||0;lt+=L;const a5=v5[k],a4=v4[k];if(L>0&&(a5==null))miss.push(c);s5+=L*(a5||0);s4+=L*(a4||0);return [c,esc(CLN[c]),N(L,0),a4==null?'-':N(a4,1),a5==null?'-':N(a5,1),N(L*(a5||0),1)]});
  const k=365*DD*DL*R,C5=s5*k,C4=s4*k;
  let h=kv([['CESA5 (juta)',N(C5/1e6,2),UR+' tahun, lajur rencana'],['CESA4 (juta)',N(C4/1e6,2),'untuk Bagan 5, 6, 7'],['R (pertumbuhan)',N(R,2),'Persamaan 4.1'],['DL (distribusi lajur)',N(DL*100,0)+'%','Tabel 4.2'],['Total LHR niaga',N(lt,0),'kend/hari 2 arah']]);
  h+=tbl(['Gol','Kendaraan','LHR','VDF4','VDF5','LHR×VDF5'],rows.filter(r=>r[2]!=='0'),[2,3,4,5]);
  if(miss.length)h+=wn('VDF golongan '+miss.join(', ')+' tidak tersedia pada wilayah ini (tanda "-"), dihitung 0. MDP menyarankan memakai VDF lokasi terdekat yang karakteristiknya sama.');
  if(lt===0)h+=wn('Isi LHR minimal satu golongan kendaraan niaga.');
  h+=`<button class="cta" data-go="lentur" data-esa5="${(C5/1e6).toFixed(3)}">Pakai ${N(C5/1e6,2)} juta ESA5 untuk rekomendasi struktur lentur</button><button class="cta" data-go="rendah" data-esa4="${(C4/1e6).toFixed(3)}">Pakai ESA4 ${N(C4/1e6,2)} juta untuk Bagan 5-7</button>`;
  h+=`<p class="src">Sumber: MDP 2024 Bab 4 (Tabel 4.1, 4.2; Pers. 4.1, 4.3) dan Lampiran H (VDF regional, kondisi ${v.kon.toLowerCase()}). Tidak termasuk faktor pengalihan lalu lintas (traffic diversion) dan perubahan tata guna lahan.</p>`;return h}};

/* ---------- 2. STRUKTUR LENTUR ---------- */
function altList(esa,cbr,lj){const A=[];
 B3.forEach(b=>{const c=col(b.r,esa);if(c>=0){const L=[['AC WC',b.wc[c],C.asp[0]],['AC BC',b.bc1[c],C.asp[1]],['AC BC (lapis 2)',b.bc2[c],C.asp[1]],['AC Base',b.ab1[c],C.asp[2]],['AC Base (lapis 2)',b.ab2[c],C.asp[2]],['CTB',b.ctb,C.ctb],['LFA Kelas B',150,C.lfa],['Timbunan pilihan / LFA C / stabilisasi semen',200,C.tp]].filter(x=>x[1]>0);A.push({id:'Bagan 3'+b.id.slice(1),t:'Aspal dengan CTB '+b.ctb+' mm',pg:b.pg,col:'F'+b.id.slice(1)+' '+(c+1),L,rng:b.r[c],asp:esa>=30?'PG70 (AC WC dan AC BC)':'Pen 60-70'})}});
 {const c=col(B3A.r,esa);if(c>=0){const tp=esa>5?(cbr>=30?0:cbr>=10?150:cbr>6?200:200):B3A.tp[c];const la=lj>2?Math.max(300,200):200;
  const L=[['AC WC',B3A.wc[c],C.asp[0]],['AC BC',B3A.bc1[c],C.asp[1]],['AC BC (lapis 2)',B3A.bc2[c],C.asp[1]],['AC Base',B3A.ab1[c],C.asp[2]],['AC Base (lapis 2)',B3A.ab2[c],C.asp[2]],['AC Base (lapis 3)',B3A.ab3[c],C.asp[2]],['LFA Kelas A',lj>2?300:200,C.lfa],['LFA Kelas B',150,C.lfa],['Timbunan pilihan / LFA C / stabilisasi semen',tp,C.tp]].filter(x=>x[1]>0);
  A.push({id:'Bagan 3A',t:'Aspal dengan lapis fondasi agregat',pg:B3A.pg,col:'FFF 3A-'+(c+1),L,rng:B3A.r[c],asp:esa>=30?'PG70 (AC WC dan AC BC)':'Pen 60-70',adj:esa>5})}}
 return A}
TOOLS.lentur={n:'Struktur Lentur',i:'🛣️',d:'Pilih tebal lapis dari Bagan Desain 3(1)-3(4), 3A, 3B dan fondasi Bagan 2',
 form(v){return `<p class="mdh">Masukkan beban rencana 20 tahun pada lajur rencana (juta ESA5) dan CBR tanah dasar. Tab Beban Lalu Lintas dapat menghitung ESA5 dari LHR.</p>
 <div class="mdf"><label>Beban rencana 20 th (juta ESA5)<input type="number" data-k="esa5" value="${v.esa5}" min="0" step="0.1"></label>
 <label>CBR tanah dasar (%)<input type="number" data-k="cbr" value="${v.cbr}" min="0" step="0.5"></label>
 <label>Jumlah lajur tiap arah<select data-k="lj">${[1,2,3,4].map(n=>`<option${n==v.lj?' selected':''}>${n}</option>`).join('')}</select></label></div>`},
 calc(v){const esa=+v.esa5,cbr=+v.cbr,lj=+v.lj;let h='';
  if(!(esa>0))return wn('Isi beban rencana (juta ESA5) lebih dari 0.');
  if(esa>200)return wn('Beban di atas 200 juta ESA5 berada di luar rentang bagan desain; diperlukan analisis mekanistik-empiris (MDP Bab 7.2) oleh ahli.','bad');
  const A=altList(esa,cbr,lj);
  if(!A.length)return wn('Tidak ada bagan yang cocok.','bad');
  let idx=Math.min(v.alt||0,A.length-1);
  h+='<h3>Alternatif struktur</h3><div class="alt">'+A.map((a,k)=>`<button data-alt="${k}" class="${k===idx?'on':''}">${esc(a.id)}</button>`).join('')+'</div>';
  const a=A[idx],tot=a.L.reduce((s,l)=>s+l[1],0),asp=a.L.filter(l=>l[0].startsWith('AC')).reduce((s,l)=>s+l[1],0);
  h+=kv([['Bagan',a.id,'MDP hlm. '+a.pg],['Kolom',a.col,'> '+a.rng[0]+' s.d. '+a.rng[1]+' juta ESA5'],['Tebal aspal',asp+' mm','AC WC + BC + Base'],['Total tebal',tot+' mm','di atas tanah dasar']]);
  h+=tbl(['Lapisan','Tebal (mm)'],a.L.map(l=>[esc(l[0]),String(l[1])]),[1])+stackSvg(a.L);
  h+=wn('Jenis aspal: '+a.asp+'. '+(esa>=30?'Beban ≥ 30 juta ESA5: aspal PG70 direkomendasikan; khusus AC Base tidak wajib PG70.':'Beban < 30 juta ESA5: aspal Pen 60/70.'));
  if(a.id==='Bagan 3A'){if(a.adj)h+=wn('Bagan 3B (beban > 5 juta ESA5): tebal timbunan pilihan/LFA C/stabilisasi semen disesuaikan dengan CBR: 6 < CBR < 10 → 200 mm; 10 ≤ CBR < 30 → 150 mm; CBR ≥ 30 → tidak diperlukan.');
   if(lj>2)h+=wn('Lebih dari 2 lajur per arah: LFA Kelas A minimal 300 mm (sudah dipakai di tabel).');
   if(esa<=2)h+=wn('Kolom < 2 juta ESA5: AC WC 60 mm memakai tumbukan Marshall 2 × 50.')}
  else h+=wn('Tebal aspal di atas CTB tidak kurang dari 100 mm. Lapis paling bawah dapat diganti LFA Kelas B 200 mm bila harganya sama atau lebih rendah (catatan bagan).');
  /* fondasi Bagan 2 */
  const sg=sgOf(cbr);let fh='';
  if(sg==='low')fh=wn('CBR < 2,5% atau tanah lunak: tebal tanah lunak > 1 m wajib penanganan geoteknik; ≤ 1 m dapat diganti timbunan setebal ketentuan SG2,5 (600 mm untuk beban > 10 juta ESA5, 300 mm bila lebih kecil).','bad');
  else if(!sg)fh=wn('CBR ≥ 6%: Bagan Desain-2 tidak mensyaratkan perbaikan tanah dasar minimum. Bila tanah dasar berbutir halus, tetap pasang lapisan 200 mm timbunan pilihan berbutir kasar (CBR ≥ 30%, PI 6-15, butir maks. 50 mm) atau LFA Kelas C atau stabilisasi semen (UCS 10 kg/cm²).','ok');
  else{const t=esa>10?sg[3]:sg[2];fh=wn(`Bagan Desain-2: tanah dasar ${sg[1]} (CBR ${cbr}%) → perbaikan minimum <b>${t} mm</b> timbunan pilihan (CBR ≥ 10%) untuk beban ${esa>10?'> 10':'< 10'} juta ESA5.`)}
  h+='<h3>Fondasi jalan minimum (Bagan Desain-2)</h3>'+fh;
  h+='<p class="src">Sumber: MDP 2024 Bab 6.9 dan 7.3 (Bagan Desain-2, 3(1)-3(4), 3A, 3B). Beban rencana 20 tahun; aspal modifikasi dan kondisi khusus (jembatan, terowongan, UR 40 th) memerlukan analisis lanjut.</p>';return h},
 on(el){el.querySelectorAll('[data-alt]').forEach(b=>b.onclick=()=>{V.lentur.alt=+b.dataset.alt;run()})}};

/* ---------- 3. KAKU ---------- */
TOOLS.kaku={n:'Perkerasan Kaku',i:'🧱',d:'Tebal beton minimum (Tabel 8.3), Bagan Desain 8 dan 8A',
 form(v){return `<p class="mdh">Perkerasan kaku didesain dari JSKN (jumlah kelompok sumbu kendaraan niaga selama UR), bukan ESA. Lalu lintas rendah memakai Bagan 8A (LHRN &lt; 500).</p>
 <div class="mdf"><label>JSKN rencana (juta)<input type="number" data-k="jskn" value="${v.jskn}" min="0" step="0.5"></label>
 <label>LHRN (kend. niaga/hari)<input type="number" data-k="lhrn" value="${v.lhrn}" min="0" step="10"></label>
 <label>Beban MST maks. (ton)<select data-k="mst"><option value="5"${v.mst==5?' selected':''}>5 (jalan lokal)</option><option value="8"${v.mst==8?' selected':''}>8 (jalan kolektor)</option></select></label></div>`},
 calc(v){const j=+v.jskn*1e6;let h='<h3>Lalu lintas berat (Bagan Desain-8, Tabel 8.3)</h3>';
  if(j<1e6)h+=wn('JSKN < 1 juta berada di bawah rentang Tabel 8.3; gunakan Bagan Desain-8A (di bawah) bila LHRN < 500.');
  else{const r=KAKU.find(x=>j>=x[0]*1e6&&j<x[1]*1e6)||KAKU[2];h+=kv([['JPCP',r[2]+' mm','beton bersambung tanpa tulangan'],['JRCP',r[3]+' mm','bersambung dengan tulangan'],['CRCP',r[4]+' mm','menerus dengan tulangan']]);
   h+=tbl(['Elemen','Ketentuan (Bagan Desain-8)'],[['Sambungan melintang','Dipotong 1/4-1/3 tebal; ruji BjTP 280, jarak 300 mm, panjang 450 mm, Ø ≥ 1/8 tebal beton'],['Sambungan memanjang','Tie bar BjTS 420A, jarak 600 mm, panjang 700 mm, Ø min. 16 mm'],['Bahu jalan','Monolit lebar min. 600 mm, atau dengan tie bar untuk bahu min. 1500 mm'],['Lapis drainase','LFA Kelas A 200 mm (2 lajur/arah); 300 mm (> 2 lajur/arah)'],['Pemecah ikatan','Membran kedap air min. 125 mikron di atas beton kurus'],['Rasio slab (JPCP)','Panjang/lebar sekitar 1,25']])}
  h+='<h3>Lalu lintas rendah (Bagan Desain-8A, SNI 8457:2017)</h3>';
  if(+v.lhrn>=500)h+=wn('LHRN ≥ 500: di luar lingkup Bagan 8A; pakai Bagan Desain-8 / analisis lengkap.','bad');
  else{const loc=+v.mst===5||+v.lhrn<50;const t=loc?['Jalan lokal','< 50','5 ton',150,3.5,13,600,'4 ≤ CBR < 6: 250; CBR > 6: 150']:['Jalan kolektor','50-500','8 ton',200,3.8,16,700,'sama'];
   h+=kv([['Tebal beton',t[3]+' mm',t[0]+', LHRN '+t[1]],['Kuat lentur min.',t[4]+' MPa'],['Beton kurus','100 mm','fc\' 8-10 MPa']]);
   h+=tbl(['Elemen','Nilai'],[['Beban MST maks.',t[2]],['Lapis fondasi agregat','250 mm (4% ≤ CBR < 6%); 150 mm (CBR > 6%)'],['Jarak sambungan melintang','4,0 m'],['Tie bar',`Ø ${t[5]} mm, L ${t[6]} mm, S 750 mm, BjTS 30`],['Ruji (dowel)',loc?'Tanpa ruji':'Ø 25 mm, L 450 mm, S 300 mm, BjTP 30']]);
   if(+v.lhrn<50&&+v.mst===8)h+=wn('LHRN < 50 dengan MST 8 ton: tabel Bagan 8A menetapkan jalan lokal maks. 5 ton; untuk 8 ton pakai kolom kolektor (200 mm).')}
  h+=wn('Tanah dasar perkerasan kaku: perbaikan minimum mengikuti Bagan Desain-2 (CBR 5/4%: 200 mm; 3%: 400 mm; 2,5%: 600 mm).');
  h+='<p class="src">Sumber: MDP 2024 Bab 8 (Tabel 8.3 hlm. 8-5; Bagan Desain-8 hlm. 8-5; Bagan Desain-8A hlm. 8-21). Jumlah sumbu per kelompok (Lampiran D) dan cek fatik/erosi tetap perlu dihitung penuh.</p>';return h}};

/* ---------- 4. LALU LINTAS RENDAH ---------- */
TOOLS.rendah={n:'Lalu Lintas Rendah',i:'🏘️',d:'Bagan Desain 4 (HRS), 5 (Burda), 6 (soil cement), 7 (improve subgrade)',
 form(v){return `<p class="mdh">Beban rencana 20 tahun pada lajur rencana, juta ESA4 (Bagan 5-7) atau juta ESA5 (Bagan 4). Untuk jalan desa dan lokal sampai 4 juta ESA.</p>
 <div class="mdf"><label>Beban rencana (juta ESA)<input type="number" data-k="esa" value="${v.esa}" min="0" step="0.05"></label></div>`},
 calc(v){const x=+v.esa;if(!(x>=0))return wn('Isi beban rencana.');let h='';
  if(x>4)return wn('Beban > 4 juta ESA berada di luar rentang Bagan 4-7. Gunakan tab Struktur Lentur atau Perkerasan Kaku.','bad');
  const b4=x<0.5?['HRS atau Penetrasi Makadam',[['HRS-WC / Penmak',50,C.asp[0]],['LFA Kelas A',150,C.lfa],['LFA Kelas B / kerikil alam / stabilisasi CBR > 10%',150,C.tp]]]:['HRS',[['HRS-WC',30,C.asp[0]],['HRS-Base',35,C.asp[1]],['LFA Kelas A',250,C.lfa],['LFA Kelas B / kerikil alam / stabilisasi CBR > 10%',150,C.tp]]];
  h+='<h3>Bagan Desain-4: lentur dengan HRS ('+(x<0.5?'FF1, < 0,5':'FF2, 0,5-4,0')+' juta ESA5)</h3>'+tbl(['Lapisan','Tebal (mm)'],b4[1].map(l=>[esc(l[0]),String(l[1])]),[1])+wn('Alternatif untuk daerah dengan riwayat kinerja HRS baik. HRS tidak sesuai untuk tanjakan curam dan perkotaan dengan beban > 2 juta ESA5.');
  const c=x<0.1?0:x<=0.5?1:2,b5=[[200,100],[250,110],[300,140]][c];
  h+=`<h3>Bagan Desain-5: berbutir dengan laburan (SD${c+1})</h3>`+tbl(['Lapisan','Tebal (mm)'],[['LFA Kelas A (padat 125-200 mm per lapis)',String(b5[0])],['LFA Kelas B / kerikil alam / stabilisasi CBR > 10% (subgrade CBR ≥ 5%)',String(b5[1])]],[1])+wn('Burda/Burtu dengan lapis fondasi agregat; perlu pengendalian mutu baik. Ketentuan fondasi Bagan 2 berlaku.');
  const b6=[160,220,300][c];
  h+=`<h3>Bagan Desain-6: soil cement (SC${c+1})</h3>`+tbl(['Lapisan','Tebal (mm)'],[['HRS WC / AC WC (Marshall 2×50)','50'],['Lapis fondasi tanah semen, target UCS 2,4 MPa',String(b6)]],[1]);
  const b7=[[160,110,160],[220,150,200],[300,200,260]][c];
  h+=`<h3>Bagan Desain-7: improve subgrade stabilisasi semen (SC${c+1})</h3>`+tbl(['Lapisan','Tebal (mm)'],[['HRS WC / AC WC (Marshall 2×50)','50'],['LFA Kelas A',String(b7[0])],['LFA Kelas B',String(b7[1])],['Stabilisasi tanah asli hingga CBR ekuivalen 6%',String(b7[2])]],[1])+wn('Bagan 7 untuk tanah dasar CBR > 2,5%. CBR ekuivalen: CBRis = CBRti × 2^(tebal lapis pilihan/stabilisasi (mm) / 150).');
  h+='<h3>Perkiraan lalu lintas jalan rendah (Tabel 4.5, UR 20 th, i = 1%, R = 22)</h3>'+tbl(['Deskripsi jalan','LHR 2 arah','Kend. berat','ESA4'],[['Jalan desa minor, akses kendaraan berat terbatas','50','5%','25.000'],['Jalan kecil dua arah','100','5%','45.000'],['Jalan lokal','500','10%','500.000']],[1,2,3]);
  h+='<p class="src">Sumber: MDP 2024 Bab 7.3.3-7.3.6 (hlm. 7-19 s.d. 7-21) dan Tabel 4.5. Bagan Desain-9 (tanpa penutup) berupa grafik; lihat dokumen MDP hlm. 9-2.</p>';return h}};

/* ---------- 5. TABEL ACUAN ---------- */
TOOLS.ref={n:'Tabel Acuan',i:'📋',d:'Umur rencana, pemilihan jenis perkerasan, pertumbuhan, distribusi lajur',
 form(){return ''},
 calc(){let h='<h3>Tabel 2.1 Umur rencana (UR) perkerasan jalan baru</h3>'+tbl(['Jenis','Elemen','UR (tahun)'],[['Lentur','Lapisan aspal dan berbutir, lapis fondasi jalan','20'],['Lentur','Lokasi tanpa kemungkinan overlay (perkotaan, underpass, jembatan, terowongan)','40'],['Kaku','Lapis fondasi atas/bawah, beton semen, fondasi jalan','40'],['Tanpa penutup','Semua elemen','10']],[2])+'<p class="src">Alternatif UR harus berdasar discounted lifecycle cost terendah. UR memperhatikan kapasitas jalan.</p>';
  h+='<h3>Tabel 3.1 Pemilihan jenis perkerasan (ESA5 juta, 20 tahun)</h3>'+tbl(['Struktur','Bagan','0-1','1-4','4-10','10-30','>30'],[['AC dengan CTB','3(1)-3(4)','-','-','-','2','-'],['AC dengan lapis fondasi agregat','3A, 3B','-','1, 2','1, 2','2','-'],['HRS tipis di atas LFA','4','2','2','-','-','-'],['Burda/Burtu dengan LFA','5','3','3','-','-','-'],['AC/HRS dengan soil cement','6','2','2','-','-','-'],['AC/HRS + LFA + stabilisasi semen subgrade','7','2','2','-','-','-'],['Perkerasan kaku lalu lintas berat','8','-','-','-','2','2'],['Perkerasan kaku lalu lintas rendah','8A','-','-','1, 2','-','-'],['Tanpa penutup (japat, kerikil)','9','1','-','-','-','-']])+'<p class="src">Tingkat kesulitan: 1 kontraktor kecil-medium; 2 kontraktor besar; 3 spesialis Burtu/Burda. Tabel tidak mutlak; pilih berdasarkan biaya siklus hidup terendah. (AC modifikasi/CTB untuk > 30 juta: lihat dokumen.)</p>';
  h+='<h3>Tabel 4.1 Laju pertumbuhan lalu lintas, i (%)</h3>'+tbl(['Jenis jalan','Jawa','Sumatera','Kalimantan','Rata-rata'],[['Arteri dan perkotaan','4,80','4,83','5,14','4,75'],['Kolektor rural','3,50','3,50','3,50','3,50'],['Jalan desa','1,00','1,00','1,00','1,00']],[1,2,3,4]);
  h+='<h3>Tabel 4.2 Faktor distribusi lajur (DL)</h3>'+tbl(['Lajur tiap arah','Kend. niaga pada lajur desain'],[['1','100%'],['2','80%'],['3','60%'],['4','50%']],[1])+'<p class="src">DD umumnya 0,50 untuk jalan dua arah. R = ((1 + 0,01 i)^UR − 1) / (0,01 i).</p>';return h}};

const TABS=['lalin','lentur','kaku','rendah','ref'];
function run(){if(!root)return;const T=TOOLS[cur],b=root.querySelector('.mdb');
 const keep=b.querySelector('#mdr');
 if(!keep){b.innerHTML=`<div id="mdf"></div><div id="mdr"></div><p class="src">Rekomendasi awal berdasarkan katalog Manual Desain Perkerasan Jalan 2024 (No. 03/M/BM/2024). Wajib diverifikasi perencana dan dokumen resmi.</p>`;
  b.querySelector('#mdf').innerHTML=T.form(V[cur]);
  b.querySelectorAll('[data-k]').forEach(e=>e.oninput=e.onchange=()=>{const k=e.dataset.k;V[cur][k]=e.type==='number'?(e.value===''?'':+e.value):e.value;if(cur==='lentur')V.lentur.alt=0;run()})}
 const r=b.querySelector('#mdr');try{r.innerHTML=T.calc(V[cur])}catch(e){r.innerHTML=wn('Parameter belum lengkap: '+esc(e.message),'bad')}
 if(T.on)T.on(r);
 r.querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>{const g=x.dataset.go;if(x.dataset.esa5)V.lentur.esa5=+x.dataset.esa5;if(x.dataset.esa4)V.rendah.esa=+x.dataset.esa4;V.lentur.alt=0;cur=g;draw()})}
function draw(){if(!root)return;
 root.innerHTML='<nav role="tablist">'+TABS.map(t=>`<button role="tab" data-t="${t}" class="${t===cur?'on':''}">${TOOLS[t].i} ${esc(TOOLS[t].n)}</button>`).join('')+'</nav><div class="mdb"></div>';
 root.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{cur=b.dataset.t;draw()});
 const ti=document.getElementById('ti');if(ti&&root.isConnected)ti.textContent='MDP 2024 - '+TOOLS[cur].n;
 run();const on=root.querySelector('nav .on');if(on&&on.scrollIntoView)try{on.scrollIntoView({inline:'center',block:'nearest'})}catch(e){}}

const D={lalin:TOOLS.lalin.d,lentur:TOOLS.lentur.d,kaku:TOOLS.kaku.d,rendah:TOOLS.rendah.d,ref:TOOLS.ref.d};
window.__MDPUI={tools:TABS.map(id=>({id,n:TOOLS[id].n,i:TOOLS[id].i,d:D[id]})),
 mount:(host,id)=>{if(id&&TOOLS[id])cur=id;if(!root){root=document.createElement('div');root.id='mdp'}host.innerHTML='';host.appendChild(root);draw()},
 unmount:()=>{if(root&&root.isConnected)root.remove()},isOpen:()=>!!(root&&root.isConnected),cur:()=>cur};
window.dispatchEvent(new Event('mdp-ready'));
})();
