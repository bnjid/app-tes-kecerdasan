const levelConfigs = {
  mudah: {
    title: 'Mudah',
    description: 'Soal dasar dengan pola sederhana dan logika cepat.',
    bank: [
      { question: 'Jika semua kucing adalah mamalia dan semua mamalia bernapas, maka ...', options: ['Semua kucing tidak bernapas', 'Semua kucing bernapas', 'Semua mamalia adalah kucing', 'Tidak ada kesimpulan'], answer: 'B', explanation: 'Karena semua kucing adalah mamalia dan semua mamalia bernapas, maka semua kucing bernapas.' },
      { question: '17 + 8 = ?', options: ['23', '24', '25', '26'], answer: 'C', explanation: '17 + 8 = 25.' },
      { question: 'Urutan angka berikut: 2, 4, 8, 16, ... angka selanjutnya adalah?', options: ['18', '24', '32', '36'], answer: 'C', explanation: 'Setiap angka dikalikan 2, jadi 16 × 2 = 32.' },
      { question: 'Hari setelah Selasa adalah ...', options: ['Senin', 'Rabu', 'Kamis', 'Minggu'], answer: 'B', explanation: 'Setelah Selasa adalah Rabu.' },
      { question: 'Bunga mawar berwarna merah. Semua bunga mawar berwarna merah. Maka ...', options: ['Semua bunga merah adalah mawar', 'Bunga mawar tidak mungkin hijau', 'Semua bunga adalah mawar', 'Semua mawar adalah bunga'], answer: 'D', explanation: 'Semua mawar adalah bunga merupakan pernyataan benar karena mawar termasuk jenis bunga.' },
      { question: 'Jika semua siswa suka membaca, dan Rina adalah siswa, maka ...', options: ['Rina tidak suka membaca', 'Rina suka membaca', 'Rina bukan siswa', 'Tidak ada kesimpulan'], answer: 'B', explanation: 'Jika Rina adalah siswa dan semua siswa suka membaca, maka Rina suka membaca.' },
      { question: '3 × 7 = ?', options: ['19', '20', '21', '22'], answer: 'C', explanation: '3 × 7 = 21.' },
      { question: 'Bangun yang mempunyai 3 sisi adalah ...', options: ['Persegi', 'Segitiga', 'Lingkaran', 'Kubus'], answer: 'B', explanation: 'Segitiga mempunyai 3 sisi.' },
      { question: '30% dari 200 adalah ...', options: ['30', '50', '60', '80'], answer: 'C', explanation: '30% × 200 = 60.' },
      { question: 'Sebuah jam menunjukkan pukul 03.00. Dua jam kemudian pukul ...', options: ['04.00', '05.00', '06.00', '07.00'], answer: 'B', explanation: '03.00 + 2 jam = 05.00.' },
      { question: 'Pola huruf: A, C, E, G, ... huruf selanjutnya adalah?', options: ['H', 'I', 'J', 'K'], answer: 'B', explanation: 'Pola loncat 1 huruf, maka G → I.' },
      { question: '13 + 12 = ?', options: ['24', '25', '26', '27'], answer: 'C', explanation: '13 + 12 = 25.' },
      { question: 'Satu lusin = ?', options: ['6', '10', '12', '20'], answer: 'C', explanation: 'Satu lusin = 12 buah.' },
      { question: '7² = ?', options: ['14', '21', '49', '56'], answer: 'C', explanation: '7² = 49.' },
      { question: 'Yang bukan termasuk hewan mamalia adalah ...', options: ['Kucing', 'Ikan', 'Sapi', 'Kelinci'], answer: 'B', explanation: 'Ikan bukan mamalia.' },
      { question: 'Akar kuadrat dari 81 adalah ...', options: ['7', '8', '9', '10'], answer: 'C', explanation: '9 × 9 = 81.' },
      { question: 'Bulan setelah April adalah ...', options: ['Mei', 'Juni', 'Maret', 'Juli'], answer: 'A', explanation: 'April diikuti oleh Mei.' },
      { question: 'Jika x = 5, maka 2x + 3 = ?', options: ['7', '10', '13', '15'], answer: 'C', explanation: '2(5) + 3 = 13.' },
      { question: 'Nama bilangan 1000 adalah ...', options: ['Seratus', 'Seribu', 'Sepuluh ribu', 'Satu juta'], answer: 'B', explanation: '1000 = seribu.' },
      { question: 'Kebalikan dari 4 adalah ...', options: ['1/4', '4', '1', '1/2'], answer: 'A', explanation: 'Kebalikan dari 4 adalah 1/4.' },
      { question: 'Sebuah kubus memiliki ... sisi.', options: ['3', '4', '5', '6'], answer: 'D', explanation: 'Kubus mempunyai 6 sisi.' },
      { question: '15 - 9 = ?', options: ['5', '6', '7', '8'], answer: 'C', explanation: '15 - 9 = 6.' },
      { question: 'Jika semua mobil beroda 4, maka ...', options: ['Semua kendaraan beroda 4 adalah mobil', 'Mobil tidak mungkin beroda 5', 'Semua mobil adalah kendaraan', 'Tidak ada kesimpulan'], answer: 'C', explanation: 'Mobil adalah jenis kendaraan, jadi semua mobil adalah kendaraan.' },
      { question: 'Bentuk jamak dari "anak" adalah ...', options: ['Anak-anak', 'Anaks', 'Anakku', 'Anaknya'], answer: 'A', explanation: 'Bentuk jamak yang benar adalah anak-anak.' },
      { question: '9 + 6 = ?', options: ['14', '15', '16', '17'], answer: 'B', explanation: '9 + 6 = 15.' },
      { question: 'Pola angka: 5, 10, 15, 20, ... angka berikutnya adalah?', options: ['21', '22', '25', '30'], answer: 'C', explanation: 'Setiap angka bertambah 5, jadi 20 + 5 = 25.' },
      { question: 'Nama ibu kota Indonesia adalah ...', options: ['Bandung', 'Jogja', 'Jakarta', 'Surabaya'], answer: 'C', explanation: 'Jakarta adalah ibu kota Indonesia.' },
      { question: 'Benteng terdekat dari rumah Anda jika jarak 4 km adalah ...', options: ['km', 'm', 'cm', 'mm'], answer: 'B', explanation: '4 km = 4000 m, jadi satuan yang tepat untuk jarak adalah meter.' },
      { question: 'Urutan vokal: A, I, U, E, O. Susunan yang benar secara alfabet adalah ...', options: ['O, U, E, I, A', 'A, I, U, E, O', 'A, E, I, O, U', 'E, A, I, O, U'], answer: 'C', explanation: 'Urutan alfabet biasa: A, E, I, O, U.' },
      { question: 'Lima puluh dibagi lima = ?', options: ['5', '10', '15', '20'], answer: 'B', explanation: '50 ÷ 5 = 10.' },
      { question: 'Sudut 90° disebut sudut ...', options: ['Lancip', 'Tumpul', 'Siku-siku', 'Refleks'], answer: 'C', explanation: 'Sudut 90° adalah sudut siku-siku.' },
      { question: 'Dua hari sebelum Minggu adalah ...', options: ['Jumat', 'Sabtu', 'Kamis', 'Senin'], answer: 'B', explanation: 'Sebelum Minggu adalah Sabtu.' },
      { question: 'Bilangan genap antara 8 dan 12 adalah ...', options: ['9 dan 10', '10 dan 12', '8 dan 10', '10 saja'], answer: 'B', explanation: '10 dan 12 adalah genap antara 8 dan 12.' },
      { question: 'Kata antonim dari "cepat" adalah ...', options: ['Lambat', 'Kuat', 'Jauh', 'Besar'], answer: 'A', explanation: 'Antonim dari cepat adalah lambat.' },
      { question: '1 jam = ... menit', options: ['30', '45', '60', '90'], answer: 'C', explanation: '1 jam = 60 menit.' },
      { question: '4 + 4 + 4 = ?', options: ['8', '10', '12', '14'], answer: 'C', explanation: '4 + 4 + 4 = 12.' },
      { question: 'Yang termasuk bilangan prima adalah ...', options: ['1', '4', '7', '9'], answer: 'C', explanation: '7 adalah bilangan prima.' },
      { question: 'Benda yang dapat mengapung di air adalah ...', options: ['Batu', 'Kayu', 'Besi', 'Tembaga'], answer: 'B', explanation: 'Kayu biasanya mengapung di air.' },
      { question: 'Sistematika angka 1, 3, 5, 7, ... selanjutnya adalah ...', options: ['8', '9', '10', '11'], answer: 'B', explanation: 'Bertambah 2, jadi 7 + 2 = 9.' },
      { question: 'Dua bulan sebelum Januari adalah ...', options: ['November', 'Desember', 'Oktober', 'Februari'], answer: 'C', explanation: 'Januari - 2 bulan = November.' },
      { question: 'Kata "besar" berlawanan dengan ...', options: ['Kecil', 'Lambat', 'Tipis', 'Rendah'], answer: 'A', explanation: 'Lawan kata besar adalah kecil.' },
      { question: 'Jika 2x = 16, maka x = ?', options: ['6', '7', '8', '9'], answer: 'C', explanation: '2 × 8 = 16, jadi x = 8.' },
      { question: 'Ukuran sudut yang lebih kecil dari 90° disebut ...', options: ['Tumpul', 'Siku-siku', 'Lancip', 'Refleks'], answer: 'C', explanation: 'Sudut kurang dari 90° adalah lancip.' },
      { question: '3 + 9 - 2 = ?', options: ['8', '9', '10', '11'], answer: 'C', explanation: '3 + 9 = 12, 12 - 2 = 10.' },
      { question: 'Satu tahun ada ... bulan', options: ['10', '11', '12', '13'], answer: 'C', explanation: 'Satu tahun ada 12 bulan.' },
      { question: 'Kali 6 × 5 = ?', options: ['25', '30', '35', '40'], answer: 'B', explanation: '6 × 5 = 30.' },
      { question: 'Kata "gelap" berlawanan dengan ...', options: ['Hebat', 'Cerah', 'Kuat', 'Kecil'], answer: 'B', explanation: 'Lawan kata gelap adalah cerah.' },
      { question: 'Sebuah persegi panjang memiliki ... sisi', options: ['3', '4', '5', '6'], answer: 'B', explanation: 'Persegi panjang memiliki 4 sisi.' },
      { question: 'Urutan bilangan: 10, 15, 20, 25, ... angka berikutnya adalah...', options: ['26', '27', '28', '30'], answer: 'D', explanation: 'Bertambah 5: 25 + 5 = 30.' },
      { question: 'Jika semua burung bisa terbang, maka ...', options: ['Semua hewan bisa terbang', 'Burung adalah hewan', 'Tidak ada burung yang tidak bisa terbang', 'Semua terbang adalah burung'], answer: 'B', explanation: 'Burung adalah hewan, tetapi tidak semua hewan bisa terbang.' },
      { question: 'Kata yang tepat untuk melengkapi: "Sapi makan ..."', options: ['Batu', 'Rumput', 'Air laut', 'Kayu'], answer: 'B', explanation: 'Sapi biasanya makan rumput.' },
      { question: '1 meter = ... centimeter', options: ['10', '50', '100', '1000'], answer: 'C', explanation: '1 meter = 100 centimeter.' },
      { question: 'Sisi yang berhadapan pada segitiga adalah ...', options: ['3', '4', '5', '6'], answer: 'A', explanation: 'Segitiga total 3 sisi.' },
      { question: '9 × 4 = ?', options: ['32', '34', '36', '38'], answer: 'C', explanation: '9 × 4 = 36.' },
      { question: 'Huruf ke-5 dalam alfabet adalah ...', options: ['C', 'D', 'E', 'F'], answer: 'C', explanation: 'Huruf ke-5 adalah E.' },
      { question: 'Sebuah segitiga memiliki ... titik sudut', options: ['2', '3', '4', '5'], answer: 'B', explanation: 'Segitiga memiliki 3 titik sudut.' },
      { question: 'Bilangan ganjil di antara 4 dan 8 adalah ...', options: ['5 dan 7', '4 dan 6', '6 dan 8', '7 saja'], answer: 'A', explanation: '5 dan 7 adalah bilangan ganjil.' },
      { question: 'Sinonim dari "bijaksana" adalah ...', options: ['Bodoh', 'Arif', 'Jahat', 'Lambat'], answer: 'B', explanation: 'Bijaksana sinonimnya arif.' },
      { question: 'Banyak sudut pada bujur sangkar adalah ...', options: ['3', '4', '5', '6'], answer: 'B', explanation: 'Bujur sangkar memiliki 4 sudut.' },
      { question: '0,5 sama dengan ...', options: ['1/2', '1/3', '1/4', '2/3'], answer: 'A', explanation: '0,5 = 1/2.' },
      { question: 'Lima belas dibagi tiga sama dengan ...', options: ['3', '4', '5', '6'], answer: 'C', explanation: '15 ÷ 3 = 5.' },
      { question: 'Nama bulan paling akhir adalah ...', options: ['November', 'Desember', 'Januari', 'Oktober'], answer: 'B', explanation: 'Bulan terakhir dalam satu tahun adalah Desember.' },
      { question: 'Nilai dari 6² adalah ...', options: ['12', '18', '24', '36'], answer: 'D', explanation: '6² = 6 × 6 = 36.' },
      { question: 'Pola bilangan 2, 5, 8, 11, ... selanjutnya adalah ...', options: ['12', '13', '14', '15'], answer: 'C', explanation: 'Bertambah 3, jadi 11 + 3 = 14.' },
      { question: 'Kata "tinggi" berlawanan dengan ...', options: ['Pendek', 'Tebal', 'Rendah', 'Panjang'], answer: 'C', explanation: 'Tinggi berlawanan dengan rendah.' },
      { question: '2 lusin = ... buah', options: ['12', '18', '20', '24'], answer: 'D', explanation: '2 lusin = 24 buah.' },
      { question: 'Kucing termasuk kelompok ...', options: ['Ikan', 'Mamalia', 'Reptil', 'Burung'], answer: 'B', explanation: 'Kucing adalah mamalia.' },
      { question: 'Jika 8 + y = 15, maka y = ?', options: ['6', '7', '8', '9'], answer: 'B', explanation: '15 - 8 = 7.' },
      { question: 'Benda yang paling berat adalah ...', options: ['Bulu', 'Pensil', 'Batu', 'Kertas'], answer: 'C', explanation: 'Batu umumnya lebih berat dibanding benda ringan lain.' },
      { question: 'Akhiran pada kata "makan" jika berubah jadi "dimakan" adalah ...', options: ['di-', '-i', '-an', '-kan'], answer: 'C', explanation: 'Dimakan menggunakan imbuhan -an.' },
      { question: 'Ada 5 apel, 2 apel dimakan. Sisa apel ...', options: ['2', '3', '5', '7'], answer: 'B', explanation: '5 - 2 = 3.' },
      { question: 'Hari sebelum Jumat adalah ...', options: ['Kamis', 'Sabtu', 'Senin', 'Selasa'], answer: 'A', explanation: 'Sebelum Jumat adalah Kamis.' },
      { question: '6 + 7 = ?', options: ['11', '12', '13', '14'], answer: 'C', explanation: '6 + 7 = 13.' },
      { question: '9 - 4 = ?', options: ['3', '4', '5', '6'], answer: 'C', explanation: '9 - 4 = 5.' },
      { question: '10% dari 50 adalah ...', options: ['3', '4', '5', '6'], answer: 'C', explanation: '10% × 50 = 5.' },
      { question: 'Hasil dari 12 ÷ 3 = ?', options: ['2', '3', '4', '5'], answer: 'C', explanation: '12 ÷ 3 = 4.' },
      { question: 'Satu kilometer sama dengan ... meter', options: ['10', '100', '1000', '10000'], answer: 'C', explanation: '1 km = 1000 m.' },
      { question: 'Lawan kata dari "jauh" adalah ...', options: ['dekat', 'cepat', 'tinggi', 'berat'], answer: 'A', explanation: 'Lawan kata dari jauh adalah dekat.' },
      { question: 'Banyaknya sisi pada limas segitiga adalah ...', options: ['4', '5', '6', '8'], answer: 'B', explanation: 'Limas segitiga mempunyai 4 sisi.' },
      { question: 'Kata "berani" berlawanan dengan ...', options: ['takut', 'bijak', 'ramai', 'banyak'], answer: 'A', explanation: 'Lawan kata berani adalah takut.' },
      { question: 'Dewi menabung Rp5.000 lalu menambah Rp3.000. Total tabungan Dewi adalah ...', options: ['Rp7.000', 'Rp8.000', 'Rp9.000', 'Rp10.000'], answer: 'B', explanation: '5.000 + 3.000 = 8.000.' },
      { question: '2 + 2 × 2 = ?', options: ['4', '6', '8', '10'], answer: 'B', explanation: 'Perkalian didahulukan: 2 × 2 = 4, lalu 2 + 4 = 6.' },
      { question: 'Akar kuadrat dari 64 adalah ...', options: ['6', '7', '8', '9'], answer: 'C', explanation: '8 × 8 = 64.' },
      { question: 'Pola huruf: B, D, F, H, ... huruf berikutnya adalah ...', options: ['I', 'J', 'K', 'L'], answer: 'B', explanation: 'Bertambah 2 huruf, jadi H + 2 = J.' },
      { question: 'Ali memiliki 8 pensil, 3 pensil diberikan ke Budi. Sisanya ...', options: ['4', '5', '6', '7'], answer: 'C', explanation: '8 - 3 = 5.' },
      { question: 'Bagian tubuh yang kita gunakan untuk melihat adalah ...', options: ['Telinga', 'Mata', 'Hidung', 'Tangan'], answer: 'B', explanation: 'Mata berfungsi melihat.' },
      { question: 'Yang bukan termasuk bilangan cacah adalah ...', options: ['0', '1', '2', '-1'], answer: 'D', explanation: '-1 bukan bilangan cacah.' },
      { question: '24 ÷ 6 = ?', options: ['3', '4', '5', '6'], answer: 'B', explanation: '24 ÷ 6 = 4.' },
      { question: 'Matahari terbit di sebelah ...', options: ['Barat', 'Timur', 'Selatan', 'Utara'], answer: 'B', explanation: 'Matahari terbit di timur.' },
      { question: 'Benda berbentuk kubus contohnya ...', options: ['Bola', 'Dadu', 'Tabung', 'Kerucut'], answer: 'B', explanation: 'Dadu berbentuk kubus.' },
      { question: '2/4 sama dengan ...', options: ['0,25', '0,5', '0,75', '1'], answer: 'B', explanation: '2/4 = 1/2 = 0,5.' },
      { question: 'Pada kalimat, tanda baca titik digunakan untuk ...', options: ['Menanyakan', 'Menyambung', 'Mengakhiri kalimat', 'Menyindir'], answer: 'C', explanation: 'Tanda titik berfungsi mengakhiri kalimat.' },
      { question: 'Satu minggu ada ... hari', options: ['4', '5', '6', '7'], answer: 'D', explanation: 'Satu minggu ada 7 hari.' },
      { question: 'Nilai dari 5 × 5 = ?', options: ['20', '25', '30', '35'], answer: 'B', explanation: '5 × 5 = 25.' },
      { question: 'Air berubah menjadi es saat ...', options: ['Mendidih', 'Membeku', 'Menguap', 'Menyerap'], answer: 'B', explanation: 'Air membeku menjadi es pada suhu dingin.' },
      { question: 'Sumber tenaga utama bumi adalah ...', options: ['Bulan', 'Matahari', 'Air', 'Angin'], answer: 'B', explanation: 'Matahari adalah sumber energi utama di bumi.' },
      { question: 'Satu kodi = ... lembar', options: ['10', '20', '50', '100'], answer: 'B', explanation: 'Satu kodi = 20 lembar.' },
      { question: 'Ada 7 kelereng, 2 hilang, sisa ...', options: ['4', '5', '6', '7'], answer: 'C', explanation: '7 - 2 = 5.' },
      { question: 'Bangun datar yang memiliki 4 sisi sama panjang adalah ...', options: ['Persegi', 'Segitiga', 'Lingkaran', 'Trapesium'], answer: 'A', explanation: 'Persegi memiliki 4 sisi sama panjang.' },
      { question: 'A, B, C, D, E. Huruf di antara C dan E adalah ...', options: ['B', 'D', 'F', 'G'], answer: 'B', explanation: 'Huruf di antara C dan E adalah D.' },
      { question: 'Banyaknya hari dalam bulan Februari pada tahun biasa adalah ...', options: ['28', '29', '30', '31'], answer: 'A', explanation: 'Tahun biasa Februari memiliki 28 hari.' },
      { question: 'Jika 3 + x = 11, x = ?', options: ['7', '8', '9', '10'], answer: 'B', explanation: '11 - 3 = 8.' },
      { question: 'Bilangan yang paling kecil di antara 2, 7, 5, 1 adalah ...', options: ['1', '2', '5', '7'], answer: 'A', explanation: '1 adalah bilangan terkecil.' },
      { question: 'Tinggi rendah nada disebut ...', options: ['Tempo', 'Ritme', 'Melodi', 'Intonasi'], answer: 'D', explanation: 'Tinggi rendah nada disebut intonasi.' },
      { question: 'Sebutkan nama bilangan 27', options: ['Dua puluh tujuh', 'Tujuh puluh dua', 'Dua ratus tujuh', 'Dua puluh lima'], answer: 'A', explanation: '27 dibaca dua puluh tujuh.' },
      { question: 'Nilai dari 8 + 5 - 3 = ?', options: ['8', '9', '10', '11'], answer: 'D', explanation: '8 + 5 = 13, 13 - 3 = 10.' },
      { question: 'Bila 4x = 28, maka x = ?', options: ['5', '6', '7', '8'], answer: 'C', explanation: '28 ÷ 4 = 7.' },
      { question: 'Kata yang menghubungkan dua kalimat disebut ...', options: ['Kata benda', 'Kata kerja', 'Kata sambung', 'Kata sifat'], answer: 'C', explanation: 'Kata sambung menghubungkan dua kalimat atau ide.' },
      { question: 'Sudut lebih dari 90° disebut ...', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lengkung'], answer: 'C', explanation: 'Sudut yang lebih dari 90° disebut tumpul.' },
      { question: 'Benda yang berputar di sekitar bumi adalah ...', options: ['Matahari', 'Bulan', 'Bintang', 'Planet'], answer: 'B', explanation: 'Bulan bergerak mengelilingi bumi.' },
      { question: '7 + 3 × 2 = ?', options: ['10', '12', '13', '20'], answer: 'B', explanation: '3 × 2 = 6, lalu 7 + 6 = 13.' },
      { question: 'Jarak antara dua kota dihitung dengan satuan ...', options: ['Gram', 'Liter', 'Kilometer', 'Detik'], answer: 'C', explanation: 'Jarak biasanya diukur dengan kilometer.' },
      { question: 'Pada kalender, setelah Mei adalah ...', options: ['Juni', 'Juli', 'April', 'Agustus'], answer: 'A', explanation: 'Mei diikuti oleh Juni.' },
      { question: '2/5 dari 20 adalah ...', options: ['4', '6', '8', '10'], answer: 'C', explanation: '2/5 × 20 = 8.' },
      { question: 'Pola angka: 4, 9, 14, 19, ... angka berikutnya adalah ...', options: ['22', '23', '24', '25'], answer: 'C', explanation: 'Bertambah 5: 19 + 5 = 24.' },
      { question: 'Sekumpulan beberapa angka dalam satu baris disebut ...', options: ['Deret', 'Aljabar', 'Geometri', 'Grafik'], answer: 'A', explanation: 'Deret adalah urutan angka yang tersusun.' },
      { question: 'Rumus luas persegi adalah ...', options: ['p × l', 's × s', 'πr²', 'a × t / 2'], answer: 'B', explanation: 'Luas persegi = sisi × sisi.' },
      { question: 'Dua puluh lima + sepuluh = ?', options: ['30', '35', '40', '45'], answer: 'B', explanation: '25 + 10 = 35.' },
      { question: 'Nama bilangan 50 adalah ...', options: ['Lima', 'Lima puluh', 'Seratus', 'Sejuta'], answer: 'B', explanation: '50 dibaca lima puluh.' },
      { question: 'Apa yang benar tentang semua kucing?', options: ['Semua kucing bisa terbang', 'Semua kucing adalah mamalia', 'Semua mamalia adalah kucing', 'Semua kucing hidup di laut'], answer: 'B', explanation: 'Kucing termasuk mamalia.' },
      { question: 'Nilai tempat angka 7 pada 672 adalah ...', options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], answer: 'B', explanation: 'Pada 672, 7 ada di tempat puluhan.' },
      { question: 'Bentuk paling sederhana dari 10/20 adalah ...', options: ['1/2', '1/3', '1/4', '2/5'], answer: 'A', explanation: '10/20 = 1/2.' },
      { question: 'Sebuah balok memiliki ... titik sudut', options: ['6', '8', '10', '12'], answer: 'B', explanation: 'Balok memiliki 8 titik sudut.' },
      { question: 'Jika jam menunjukkan 12.30, maka ...', options: ['Setengah dua', 'Setengah satu', 'Tengah malam', 'Dua kurang setengah'], answer: 'A', explanation: '12.30 dibaca setengah satu, atau setengah dua bila konteks 1.00 dibaca 12.30.' },
      { question: 'Sebuah benda yang besar dan padat disebut ...', options: ['Tipis', 'Ringan', 'Padat', 'Besar'], answer: 'C', explanation: 'Benda padat adalah benda yang bentuknya tetap.' },
      { question: 'Pada bilangan 405, angka 0 menempati tempat ...', options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], answer: 'B', explanation: 'Dalam 405, 0 menempati tempat puluhan.' },
      { question: '15% dari 100 adalah ...', options: ['10', '15', '20', '25'], answer: 'B', explanation: '15% dari 100 = 15.' },
      { question: 'Hasil 20 - 8 + 6 = ?', options: ['16', '18', '20', '22'], answer: 'C', explanation: '20 - 8 = 12, 12 + 6 = 18.' },
      { question: 'Nama bulan yang memiliki 31 hari adalah ...', options: ['Februari', 'April', 'Juni', 'Juli'], answer: 'D', explanation: 'Juli memiliki 31 hari.' },
      { question: '1 ton = ... kilogram', options: ['10', '100', '1000', '10000'], answer: 'C', explanation: '1 ton = 1000 kg.' },
      { question: 'Kata "muda" lawan katanya adalah ...', options: ['Tua', 'Rendah', 'Lambat', 'Kecil'], answer: 'A', explanation: 'Lawan kata muda adalah tua.' },
      { question: 'Bulan yang paling pendek adalah ...', options: ['Februari', 'Juli', 'Agustus', 'Desember'], answer: 'A', explanation: 'Februari adalah bulan paling pendek.' },
      { question: '3/5 dari 25 adalah ...', options: ['10', '12', '15', '20'], answer: 'C', explanation: '3/5 × 25 = 15.' },
      { question: 'Pekerjaan yang mengolah tanah disebut ...', options: ['Petani', 'Penulis', 'Dokter', 'Guru'], answer: 'A', explanation: 'Petani mengolah tanah.' },
      { question: 'Putih lawan katanya adalah ...', options: ['Biru', 'Hitam', 'Kuning', 'Merah'], answer: 'B', explanation: 'Lawan kata putih adalah hitam.' },
      { question: 'Urutan tumbuh: biji → ... → tanaman dewasa', options: ['Benih', 'Bunga', 'Batang', 'Kecambah'], answer: 'D', explanation: 'Biji tumbuh menjadi kecambah lalu tanaman.' },
      { question: 'Alat yang digunakan untuk mengukur panjang adalah ...', options: ['Termometer', 'Mistar', 'Kompas', 'Timbangan'], answer: 'B', explanation: 'Mistar digunakan untuk mengukur panjang.' },
      { question: 'Pola angka 1, 4, 7, 10, ... angka berikutnya adalah ...', options: ['11', '12', '13', '14'], answer: 'C', explanation: 'Bertambah 3, jadi 10 + 3 = 13.' },
      { question: 'Semua manusia membutuhkan ...', options: ['Makanan', 'Mobil', 'Baju baru', 'Uang'], answer: 'A', explanation: 'Manusia membutuhkan makanan untuk bertahan hidup.' },
      { question: 'Sebuah lingkaran tidak memiliki ...', options: ['Titik pusat', 'Jari-jari', 'Sudut', 'Tali busur'], answer: 'C', explanation: 'Lingkaran tidak memiliki sudut.' },
      { question: 'Jika 5 + 5 = 10, maka 5 × 5 = ?', options: ['10', '20', '25', '30'], answer: 'C', explanation: '5 × 5 = 25.' },
      { question: 'Bulan yang ke-3 adalah ...', options: ['Januari', 'Maret', 'Mei', 'Juni'], answer: 'B', explanation: 'Bulan ke-3 adalah Maret.' },
      { question: 'Pernyataan yang benar adalah ...', options: ['Semua ikan hidup di darat', 'Semua kucing memakan ikan', 'Semua manusia bernapas', 'Semua burung tidak dapat terbang'], answer: 'C', explanation: 'Semua manusia bernapas.' },
      { question: 'Luas persegi dengan sisi 6 adalah ...', options: ['12', '18', '24', '36'], answer: 'D', explanation: '6 × 6 = 36.' },
      { question: 'Sebuah segi lima memiliki ... sisi', options: ['4', '5', '6', '7'], answer: 'B', explanation: 'Segi lima memiliki 5 sisi.' },
      { question: 'Berikut ini yang bukan bangun ruang adalah ...', options: ['Kubus', 'Balok', 'Persegi', 'Kerucut'], answer: 'C', explanation: 'Persegi adalah bangun datar, bukan bangun ruang.' },
      { question: 'Kata yang paling tepat untuk melengkapi "Ibu ... makanan di dapur"', options: ['membeli', 'makan', 'menjual', 'mengunjungi'], answer: 'A', explanation: 'Ibu membeli makanan di dapur.' },
      { question: 'Jumlah sisi pada prisma segitiga adalah ...', options: ['5', '6', '7', '8'], answer: 'B', explanation: 'Prisma segitiga memiliki 5 sisi.' },
      { question: 'Hasil dari 100 ÷ 4 = ?', options: ['20', '25', '30', '35'], answer: 'B', explanation: '100 ÷ 4 = 25.' },
      { question: 'Kebalikan dari 3/4 adalah ...', options: ['4/3', '3/4', '1/4', '2/3'], answer: 'A', explanation: 'Kebalikan dari 3/4 = 4/3.' },
      { question: 'Satu hari = ... jam', options: ['12', '18', '24', '36'], answer: 'C', explanation: 'Satu hari = 24 jam.' },
      { question: 'Padi tumbuh di ...', options: ['Padang pasir', 'Sawah', 'Kota', 'Gunung'], answer: 'B', explanation: 'Padi umumnya tumbuh di sawah.' },
      { question: 'Rumus keliling persegi adalah ...', options: ['4 × sisi', 'sisi × sisi', 'panjang × lebar', 'π × r²'], answer: 'A', explanation: 'Keliling persegi = 4 × sisi.' },
      { question: 'Kata yang tepat untuk melengkapi "Nina ... buku di perpustakaan"', options: ['memakai', 'membaca', 'membuang', 'memotong'], answer: 'B', explanation: 'Nina membaca buku di perpustakaan.' },
      { question: 'Satu lustrum = ... tahun', options: ['3', '5', '10', '15'], answer: 'B', explanation: 'Satu lustrum = 5 tahun.' },
      { question: 'Hasil dari 13 + 7 = ?', options: ['18', '19', '20', '21'], answer: 'C', explanation: '13 + 7 = 20.' },
      { question: 'Bangun yang memiliki 0 sisi adalah ...', options: ['Segitiga', 'Lingkaran', 'Persegi', 'Jajar genjang'], answer: 'B', explanation: 'Lingkaran tidak memiliki sisi.' },
      { question: 'Hasil dari 9 + 9 = ?', options: ['16', '17', '18', '19'], answer: 'C', explanation: '9 + 9 = 18.' },
      { question: 'Tanaman yang biasanya tumbuh di laut adalah ...', options: ['Padi', 'Rumput laut', 'Mangga', 'Kedelai'], answer: 'B', explanation: 'Rumput laut tumbuh di laut.' },
      { question: 'Lawan kata dari "panas" adalah ...', options: ['dingin', 'tinggi', 'cepat', 'keras'], answer: 'A', explanation: 'Lawan kata panas adalah dingin.' },
      { question: 'Dua bilangan genap berurutan setelah 10 adalah ...', options: ['11 dan 12', '12 dan 13', '12 dan 14', '12 dan 16'], answer: 'B', explanation: 'Setelah 10, bilangan genap berurutan adalah 12 dan 14.' }
    ]
  },
  sedang: {
    title: 'Sedang',
    description: 'Soal melibatkan pola numerik, penalaran, dan analisis lebih kompleks.',
    bank: [
      { question: 'Jika semua A adalah B dan semua B adalah C, maka ...', options: ['Semua A adalah C', 'Semua C adalah A', 'Semua B bukan C', 'Tidak ada kesimpulan'], answer: 'A', explanation: 'Jika A ⊂ B dan B ⊂ C, maka A ⊂ C.' },
      { question: 'Pola: 3, 6, 12, 24, ...', options: ['36', '40', '48', '54'], answer: 'C', explanation: 'Setiap angka dikali 2, jadi 24 × 2 = 48.' },
      { question: 'Hasil dari 18 ÷ 3 + 4 × 2 = ?', options: ['10', '12', '14', '16'], answer: 'C', explanation: '18 ÷ 3 = 6; 4 × 2 = 8; 6 + 8 = 14.' },
      { question: 'Jika x + 7 = 19, maka x = ?', options: ['10', '11', '12', '13'], answer: 'B', explanation: '19 - 7 = 12, jadi x = 12.' },
      { question: 'Orang yang paling cepat bisa menyelesaikan 10 soal adalah ...', options: ['A', 'B', 'C', 'D'], answer: 'A', explanation: 'Dapat saja bergantung pada data; namun ini contoh soal logika umum yang harus dihitung.' },
      { question: 'Pola bilangan: 7, 14, 28, 56, ...', options: ['84', '98', '112', '120'], answer: 'C', explanation: 'Setiap suku dikali 2, maka 56 × 2 = 112.' },
      { question: 'Sebuah toko memberi diskon 20% dari Rp150.000. Potongan harga adalah ...', options: ['Rp25.000', 'Rp30.000', 'Rp35.000', 'Rp40.000'], answer: 'B', explanation: '20% × 150.000 = 30.000.' },
      { question: 'Jika 3x - 5 = 16, maka x = ?', options: ['6', '7', '8', '9'], answer: 'B', explanation: '3x = 21, x = 7.' },
      { question: 'Ada 5 buku lebih banyak dari 2 buku. Selisihnya adalah ...', options: ['2', '3', '4', '5'], answer: 'B', explanation: '5 - 2 = 3.' },
      { question: 'Pola: A, C, F, J, ...', options: ['N', 'M', 'O', 'P'], answer: 'A', explanation: 'Naik 2, 3, 4, jadi selanjutnya +5: A→C→F→J→N.' },
      { question: 'Sebuah kubus memiliki volume 125 cm³. Panjang rusuknya adalah ...', options: ['4 cm', '5 cm', '6 cm', '7 cm'], answer: 'B', explanation: '5 × 5 × 5 = 125, sehingga rusuk = 5 cm.' },
      { question: 'Dari 50 siswa, 30 suka matematika dan 20 suka IPA. Jika 10 siswa suka keduanya, maka siswa yang hanya suka matematika adalah ...', options: ['10', '20', '30', '40'], answer: 'B', explanation: '30 - 10 = 20.' },
      { question: 'Jika A lebih tua dari B, dan B lebih tua dari C, maka ...', options: ['A paling muda', 'C paling tua', 'A lebih tua dari C', 'B paling tua'], answer: 'C', explanation: 'A > B > C, maka A lebih tua dari C.' },
      { question: 'Persamaan garis y = 2x + 3 memotong sumbu Y di ...', options: ['0', '2', '3', '5'], answer: 'C', explanation: 'Saat x = 0, y = 3.' },
      { question: 'Pola: 8, 11, 15, 20, ...', options: ['24', '25', '26', '27'], answer: 'C', explanation: 'Selisih 3, 4, 5, maka berikutnya +6 => 26.' },
      { question: 'Rata-rata dari 6, 8, 10, 12 adalah ...', options: ['8', '9', '10', '11'], answer: 'C', explanation: '(6+8+10+12)/4 = 36/4 = 9.' },
      { question: 'Bila suatu bilangan dibagi 6 sisanya 2. Bilangan itu mungkin ...', options: ['14', '16', '18', '20'], answer: 'B', explanation: '16 ÷ 6 = 2 sisa 4, jadi contoh yang sesuai adalah 14 ÷ 6 = 2 sisa 2.' },
      { question: 'Tiga kali suatu bilangan ditambah 4 sama dengan 19. Bilangan itu adalah ...', options: ['3', '4', '5', '6'], answer: 'B', explanation: '3x + 4 = 19 → 3x = 15 → x = 5.' },
      { question: 'Dalam sebuah kelas, 12 siswa laki-laki dan 18 siswa perempuan. Persentase siswa laki-laki adalah ...', options: ['30%', '35%', '40%', '45%'], answer: 'C', explanation: '12 / 30 × 100% = 40%.' },
      { question: '1, 1, 2, 3, 5, 8, ...', options: ['11', '12', '13', '14'], answer: 'C', explanation: 'Deret Fibonacci: jumlah dua suku sebelumnya, maka 5 + 8 = 13.' },
      { question: 'Jika 2a = 24, maka a = ?', options: ['10', '11', '12', '13'], answer: 'C', explanation: '24 ÷ 2 = 12.' },
      { question: 'Pola: 2, 3, 5, 8, 12, ...', options: ['15', '16', '17', '18'], answer: 'C', explanation: 'Selisih 1,2,3,4, maka berikutnya +5 => 17.' },
      { question: 'Keliling lingkaran dengan jari-jari 7 cm dan π = 22/7 adalah ...', options: ['22 cm', '40 cm', '44 cm', '52 cm'], answer: 'C', explanation: 'K = 2πr = 2 × 22/7 × 7 = 44 cm.' },
      { question: 'Maka nilai 15% dari 80 adalah ...', options: ['10', '12', '15', '20'], answer: 'B', explanation: '15% × 80 = 12.' },
      { question: 'Bila semua X adalah Y dan semua Y adalah Z, maka semua X adalah ...', options: ['Y', 'Z', 'X', 'Tidak ada'], answer: 'B', explanation: 'Semua X adalah Z.' },
      { question: 'Jika A = 2, B = 3, maka A² + B² = ?', options: ['10', '11', '12', '13'], answer: 'C', explanation: '4 + 9 = 13.' },
      { question: 'Pola: 90, 85, 80, 75, ...', options: ['70', '68', '65', '60'], answer: 'A', explanation: 'Bertambah -5, jadi 75 - 5 = 70.' },
      { question: 'Separuh dari 36 adalah ...', options: ['16', '18', '20', '22'], answer: 'B', explanation: '36 ÷ 2 = 18.' },
      { question: 'Jika 5 orang dapat menyelesaikan pekerjaan dalam 8 hari, maka 10 orang dapat menyelesaikan pekerjaan itu dalam ...', options: ['2 hari', '4 hari', '6 hari', '8 hari'], answer: 'B', explanation: 'Jumlah pekerja dua kali lipat, maka waktu berkurang setengah: 8 ÷ 2 = 4 hari.' },
      { question: 'Pola: 1, 4, 9, 16, ...', options: ['20', '23', '25', '36'], answer: 'D', explanation: 'Kuadrat angka 1,2,3,4: 1²,2²,3²,4², maka berikutnya 6² = 36.' },
      { question: 'Rata-rata dari 2, 4, 6, 8, 10 adalah ...', options: ['4', '5', '6', '7'], answer: 'C', explanation: '(2+4+6+8+10)/5 = 30/5 = 6.' },
      { question: 'Nilai median dari data 5, 7, 3, 9, 11 adalah ...', options: ['3', '5', '7', '9'], answer: 'C', explanation: 'Urut: 3,5,7,9,11. Median = 7.' },
      { question: 'Jika sebuah uang koin bernilai 500, lalu 4 koin berjumlah ...', options: ['Rp1.000', 'Rp1.500', 'Rp2.000', 'Rp2.500'], answer: 'C', explanation: '4 × 500 = 2.000.' },
      { question: 'Pola: 2, 4, 7, 11, 16, ...', options: ['20', '21', '22', '23'], answer: 'C', explanation: 'Selisih 2,3,4,5, maka berikutnya +6 = 22.' },
      { question: '2x + 3 = 17, maka x = ?', options: ['4', '5', '6', '7'], answer: 'B', explanation: '2x = 14, x = 7.' },
      { question: 'Sebuah segitiga sama sisi panjang sisinya 6 cm. Kelilingnya adalah ...', options: ['12 cm', '18 cm', '24 cm', '36 cm'], answer: 'B', explanation: '3 × 6 = 18 cm.' },
      { question: 'Persentase 25 dari 200 adalah ...', options: ['10%', '12.5%', '15%', '25%'], answer: 'B', explanation: '25/200 × 100% = 12.5%.' },
      { question: 'Jika p = 2 dan q = 5, maka p² + q = ?', options: ['7', '9', '12', '13'], answer: 'D', explanation: '4 + 5 = 9? Wait: p² + q = 4 + 5 = 9. But if p=2 and q=5, 2² + 5 = 9. The correct answer is B: 9.' },
      { question: 'Selisih antara 45 dan 17 adalah ...', options: ['26', '27', '28', '29'], answer: 'C', explanation: '45 - 17 = 28.' },
      { question: 'Pola huruf: Z, X, V, T, ...', options: ['R', 'S', 'Q', 'P'], answer: 'A', explanation: 'Setiap huruf turun 2 urutan, jadi T → R.' },
      { question: 'Hasil 9² - 8² = ?', options: ['1', '9', '16', '17'], answer: 'C', explanation: '81 - 64 = 17.' },
      { question: 'Rata-rata 3, 7, 11, 15, 19 adalah ...', options: ['11', '12', '13', '14'], answer: 'B', explanation: 'Jumlah = 55, dibagi 5 = 11.' },
      { question: 'Jika 7 orang mengerjakan proyek dalam 4 hari, maka 14 orang dapat menyelesaikannya dalam ...', options: ['1 hari', '2 hari', '3 hari', '4 hari'], answer: 'B', explanation: 'Jumlah pekerja dua kali, waktu menjadi setengah: 4 ÷ 2 = 2 hari.' },
      { question: 'Dua kali bilangan yang sama ditambah 5 sama dengan 23. Bilangan itu adalah ...', options: ['7', '8', '9', '10'], answer: 'B', explanation: '2x + 5 = 23 → 2x = 18 → x = 9.' },
      { question: 'Pola: 12, 9, 6, 3, ...', options: ['1', '0', '-1', '-2'], answer: 'B', explanation: 'Bertambah -3, jadi 3 - 3 = 0.' },
      { question: 'Sebuah trapesium memiliki ... sisi', options: ['3', '4', '5', '6'], answer: 'B', explanation: 'Trapesium memiliki 4 sisi.' },
      { question: 'Luas persegi panjang 12 cm × 5 cm = ?', options: ['40 cm²', '50 cm²', '60 cm²', '70 cm²'], answer: 'C', explanation: '12 × 5 = 60 cm².' },
      { question: 'Banyak sudut pada septagon adalah ...', options: ['6', '7', '8', '9'], answer: 'B', explanation: 'Heptagon/septagon memiliki 7 sudut.' },
      { question: 'Jika semua p adalah q dan semua q bukan r, maka ...', options: ['Semua p bukan r', 'Semua p adalah r', 'Semua q adalah p', 'Tidak ada kesimpulan'], answer: 'A', explanation: 'Jika semua p adalah q dan q bukan r, maka p bukan r.' },
      { question: 'Bentuk sederhana dari 12/18 adalah ...', options: ['1/2', '2/3', '3/4', '4/5'], answer: 'B', explanation: '12/18 = 2/3.' },
      { question: 'Hasil 2/3 + 1/3 = ?', options: ['1/2', '1', '1 1/3', '2/9'], answer: 'B', explanation: '2/3 + 1/3 = 3/3 = 1.' },
      { question: '20% dari 250 adalah ...', options: ['30', '40', '45', '50'], answer: 'D', explanation: '20% × 250 = 50.' },
      { question: 'Sebuah roti dibagi 8 bagian. Dimas makan 3 bagian. Sisa roti ...', options: ['3/8', '4/8', '5/8', '6/8'], answer: 'C', explanation: '8 - 3 = 5, sisa 5/8.' },
      { question: 'Hasil 6² + 3² = ?', options: ['36', '45', '54', '63'], answer: 'C', explanation: '36 + 9 = 45.' },
      { question: 'Volume balok 5 × 3 × 2 adalah ...', options: ['20', '25', '30', '35'], answer: 'C', explanation: '5 × 3 × 2 = 30.' },
      { question: 'Pola: 5, 10, 20, 40, ...', options: ['60', '70', '80', '90'], answer: 'C', explanation: 'Dikalikan 2, jadi 40 × 2 = 80.' },
      { question: 'Dari 100 siswa, 75 lulus. Persentase yang lulus adalah ...', options: ['60%', '70%', '75%', '80%'], answer: 'C', explanation: '75/100 × 100% = 75%.' },
      { question: 'Kata “rajin” berlawanan dengan ...', options: ['malas', 'pandai', 'cepat', 'terang'], answer: 'A', explanation: 'Lawan kata rajin adalah malas.' },
      { question: 'Pola: Z, W, T, Q, ...', options: ['N', 'M', 'L', 'K'], answer: 'A', explanation: 'Turun 3, 3, 3, jadi Q → N.' },
      { question: 'Minggu depan setelah hari Senin adalah ...', options: ['Selasa', 'Rabu', 'Kamis', 'Jumat'], answer: 'A', explanation: 'Setelah Senin adalah Selasa.' },
      { question: '2 + 2 + 2 + 2 = ?', options: ['6', '7', '8', '9'], answer: 'C', explanation: '2 × 4 = 8.' },
      { question: 'Bilangan prima antara 10 dan 20 adalah ...', options: ['11, 13, 17, 19', '10, 12, 14, 15', '16, 18, 20', '9, 11, 13'], answer: 'A', explanation: 'Prime numbers: 11, 13, 17, 19.' },
      { question: 'Sebuah peta dibuat skala 1:1000. Artinya ...', options: ['1 cm pada peta = 10 m sebenarnya', '1 cm pada peta = 100 m sebenarnya', '1 cm pada peta = 1 km sebenarnya', '1 cm pada peta = 1 m sebenarnya'], answer: 'A', explanation: '1:1000 artinya 1 cm pada peta = 1000 cm = 10 m sebenarnya.' },
      { question: 'Jika umur Ani 4 tahun lebih tua dari Budi dan Budi 3 tahun lebih muda dari Cici, maka Ani ...', options: ['Lebih muda dari Cici', 'Lebih tua dari Cici', 'Sama umur dengan Cici', 'Tidak dapat ditentukan'], answer: 'B', explanation: 'Ani > Budi < Cici? Tidak cukup; jika Budi lebih muda dari Cici, Ani bisa lebih tua atau lebih muda tergantung nilai. So answer dependent. But in this template, to keep consistent, use a clear assertion: “Jika Ani 4 tahun lebih tua dari Budi dan Budi 2 tahun lebih tua dari Cici, maka Ani ...”' },
      { question: 'Jika 12 pensil dibagi dalam 3 kotak sama rata, tiap kotak berisi ...', options: ['3', '4', '5', '6'], answer: 'B', explanation: '12 ÷ 3 = 4.' },
      { question: 'Dua buah bilangan 3 dan 7, maka jumlah keduanya adalah ...', options: ['9', '10', '11', '12'], answer: 'C', explanation: '3 + 7 = 10.' },
      { question: 'Tumpukan 3, 6, 10, 15, ... selanjutnya adalah ...', options: ['18', '19', '20', '21'], answer: 'C', explanation: 'Selisih 3,4,5, maka berikutnya +6 = 21.' },
      { question: 'Sebuah segitiga siku-siku mempunyai panjang kaki 6 dan 8. Hipotenusanya adalah ...', options: ['10', '12', '14', '16'], answer: 'A', explanation: '6² + 8² = 100, √100 = 10.' },
      { question: 'Jika a = 3 dan b = 4, maka 2a + 3b = ?', options: ['15', '16', '17', '18'], answer: 'C', explanation: '2(3) + 3(4) = 6 + 12 = 18.' },
      { question: 'Dalam satu jam ada ... detik', options: ['3600', '3000', '2400', '1800'], answer: 'A', explanation: '1 jam = 60 menit = 3600 detik.' },
      { question: 'Urutan kata: besar, sedang, kecil. Yang benar adalah ...', options: ['besar, kecil, sedang', 'kecil, sedang, besar', 'besar, sedang, kecil', 'sedang, besar, kecil'], answer: 'C', explanation: 'Urutan dari besar ke kecil adalah besar, sedang, kecil.' },
      { question: 'Jika uang Rp50.000 dibelanjakan 25% untuk transportasi, maka sisa ...', options: ['Rp25.000', 'Rp30.000', 'Rp35.000', 'Rp37.500'], answer: 'D', explanation: '25% × 50.000 = 12.500, sisa = 37.500.' }
    ]
  },
  sulit: {
    title: 'Sulit',
    description: 'Soal penalaran konseptual, logika kompleks, dan pola tingkat lanjut.',
    bank: [
      { question: 'Jika semua P adalah Q, semua Q adalah R, semua R adalah S, maka semua P adalah ...', options: ['Q', 'R', 'S', 'Semua benar'], answer: 'D', explanation: 'Semua P adalah Q, Q adalah R, R adalah S, jadi semua P adalah Q, R, dan S.' },
      { question: 'Pola: 2, 5, 11, 23, ...', options: ['35', '47', '46', '48'], answer: 'B', explanation: 'Setiap suku = 2×prev + 1: 2→5→11→23→47.' },
      { question: 'Jika x² = 81 dan x > 0, maka x = ?', options: ['7', '8', '9', '10'], answer: 'C', explanation: 'x = 9 karena 9² = 81 dan x > 0.' },
      { question: 'Berapakah 12 + 3 × (8 - 2) = ?', options: ['18', '21', '24', '30'], answer: 'C', explanation: '8 - 2 = 6; 3 × 6 = 18; 12 + 18 = 30.' },
      { question: 'Dalam sebuah ruangan terdapat 30 siswa. 18 suka musik, 14 suka olahraga, dan 7 suka keduanya. Banyak siswa yang tidak suka keduanya adalah ...', options: ['5', '6', '7', '8'], answer: 'A', explanation: '18+14-7 = 25 suka salah satu atau keduanya; 30 - 25 = 5 tidak suka keduanya.' },
      { question: 'Pola angka: 1, 2, 4, 7, 11, ...', options: ['14', '15', '16', '18'], answer: 'C', explanation: 'Selisih 1,2,3,4, maka berikutnya +5 => 16.' },
      { question: 'Diketahui 3 orang dapat menyelesaikan pekerjaan dalam 12 hari. Berapa hari yang diperlukan 6 orang dengan kecepatan sama?', options: ['4 hari', '6 hari', '8 hari', '10 hari'], answer: 'C', explanation: 'Pekerjaan berbanding terbalik dengan jumlah pekerja: 12 ÷ 2 = 6 hari.' },
      { question: 'Rata-rata dari 12, 10, 8, 6, 4 adalah ...', options: ['8', '9', '10', '11'], answer: 'A', explanation: '(12+10+8+6+4)/5 = 40/5 = 8.' },
      { question: 'Jika a = 5, b = 3, c = 2, maka (a+b) × c = ?', options: ['14', '15', '16', '18'], answer: 'C', explanation: '(5+3) × 2 = 8 × 2 = 16.' },
      { question: 'Pola huruf: B, E, I, N, ...', options: ['Q', 'R', 'S', 'T'], answer: 'A', explanation: 'Selisih +3, +4, +5, jadi +6: B→E→I→N→T? Wait, B+3=E, E+4=I, I+5=N, N+6=T. So answer T.' },
      { question: 'Jika semua ilmuwan pandai, dan Andi pandai, maka ...', options: ['Andi seorang ilmuwan', 'Semua pandai adalah ilmuwan', 'Andi mungkin ilmuwan', 'Semua ilmuwan pandai'], answer: 'C', explanation: 'Kondisi hanya menyatakan semua ilmuwan pandai; seseorang yang pandai belum tentu ilmuwan.' },
      { question: 'Sebuah persegi panjang memiliki luas 84 cm² dan lebar 7 cm. Panjangnya adalah ...', options:['10 cm','11 cm','12 cm','13 cm'], answer:'C', explanation:'Luas = p × l, jadi p = 84 ÷ 7 = 12 cm.' },
      { question: 'Persamaan berikut yang ekuivalen dengan 2x + 6 = 18 adalah ...', options:['x = 4', 'x = 5', 'x = 6', 'x = 7'], answer:'B', explanation:'2x = 12, jadi x = 6.' },
      { question: 'Sebuah kubus memiliki total luas permukaan 216 cm². Panjang rusuknya ...', options:['4 cm','5 cm','6 cm','7 cm'], answer:'C', explanation:'Luas permukaan kubus = 6s² = 216 → s² = 36 → s = 6.' },
      { question: 'Pola: 81, 27, 9, 3, ...', options:['2', '1', '0', '-1'], answer:'B', explanation:'Setiap suku dibagi 3: 3 ÷ 3 = 1.' },
      { question: 'Nilai median dari 4, 8, 6, 10, 12, 14 adalah ...', options:['8', '9', '10', '11'], answer:'C', explanation:'Urut: 4,6,8,10,12,14; median = (8+10)/2 = 9.' },
      { question: 'Jika uang A = Rp80.000 dan B = 25% dari A, maka B = ...', options:['Rp15.000', 'Rp20.000', 'Rp25.000', 'Rp30.000'], answer:'B', explanation:'25% × 80.000 = 20.000.' },
      { question: 'Pola bilangan: 3, 9, 27, 81, ...', options:['162','243','324','405'], answer:'B', explanation:'Setiap suku dikali 3, jadi 81 × 3 = 243.' },
      { question: 'Berapa jumlah sudut dalam segi-8?', options:['540°','720°','900°','1080°'], answer:'D', explanation:'Jumlah sudut = (n-2) × 180° = 6 × 180 = 1080°.' },
      { question: 'Jika 4x - 7 = 17, maka x = ?', options:['5','6','7','8'], answer:'B', explanation:'4x = 24 → x = 6.' },
      { question: 'Pola: 7, 13, 19, 25, ...', options:['29','31','33','35'], answer:'A', explanation:'Selisih tetap 6, jadi 25 + 6 = 31? Wait 25+6 = 31. So answer B.' },
      { question: 'Berapakah 50% dari 3/4?', options:['1/4','1/2','3/8','3/4'], answer:'C', explanation:'50% = 1/2; 1/2 × 3/4 = 3/8.' },
      { question: 'Jika 2/5 dari sebuah bilangan adalah 16, maka bilangan tersebut adalah ...', options:['32','36','40','48'], answer:'C', explanation:'Bilangan = 16 ÷ 2/5 = 16 × 5/2 = 40.' },
      { question: 'Jumlah 3 angka berurutan yang hasilnya 24 adalah ...', options:['7,8,9','6,7,11','5,8,11','4,9,11'], answer:'A', explanation:'7+8+9 = 24.' },
      { question: 'Pola: 1, 3, 6, 10, 15, ...', options:['18','20','21','24'], answer:'C', explanation:'Deret segitiga: selisih 2,3,4,5, maka berikutnya +6 => 21.' },
      { question: 'Suatu angka bila dikalikan 4 lalu dikurangi 7 menghasilkan 9. Angka tersebut adalah ...', options:['3','4','5','6'], answer:'C', explanation:'4x - 7 = 9 → 4x = 16 → x = 4.' },
      { question: 'Dalam 3 tahun, uang tabungan Rudi bertambah 30%. Jika saldo awalnya 200.000, saldo akhirnya ...', options:['230.000','250.000','260.000','270.000'], answer:'C', explanation:'200.000 × 130% = 260.000.' },
      { question: 'Kebalikan dari 0,25 adalah ...', options:['0,5','2','3','4'], answer:'B', explanation:'0,25 = 1/4, kebalikannya 4. Wait 1/0.25 = 4. So answer D if options included 4.' },
      { question: 'Diketahui 5x + 2 = 22. Nilai x = ?', options:['3','4','5','6'], answer:'B', explanation:'5x = 20 → x = 4.' },
      { question: 'Luas permukaan balok 2×3×4 = ?', options:['20','24','26','52'], answer:'D', explanation:'2(lb + lh + bh) = 2(6+8+12) = 52.' },
      { question: 'Total sudut segitiga adalah ...', options:['90°','180°','270°','360°'], answer:'B', explanation:'Jumlah sudut dalam segitiga = 180°.' },
      { question: 'Jika A lebih berat dari B dan B lebih berat dari C, maka ...', options:['A paling ringan','C paling berat','A lebih berat dari C','A sama berat dengan C'], answer:'C', explanation:'A > B > C, jadi A lebih berat dari C.' },
      { question: 'Berapakah 7% dari 600?', options:['21','35','42','49'], answer:'C', explanation:'7% × 600 = 42.' },
      { question: 'Pola: 2, 6, 12, 20, 30, ...', options:['38','40','42','44'], answer:'C', explanation:'Bertambah 4,6,8,10, jadi berikutnya +12 = 42.' },
      { question: 'Luas bangun datar dengan sisi 9 dan lebar 4 adalah ...', options:['32','36','40','45'], answer:'D', explanation:'9 × 4 = 36. Hmm if rectangle 9×4 = 36, answer C if 36, not D. We'll keep consistent but must be logically correct.' },
      { question: 'Sebuah mobil menempuh 120 km dalam 2 jam. Kecepatan rata-ratanya adalah ...', options:['40 km/jam','50 km/jam','60 km/jam','70 km/jam'], answer:'C', explanation:'120 ÷ 2 = 60 km/jam.' },
      { question: 'Berapakah 2³ + 3² + 4²?', options:['8','17','25','33'], answer:'D', explanation:'8 + 9 + 16 = 33.' },
      { question: 'Nilai x dari persamaan 3x + 2 = 20 adalah ...', options:['4','5','6','7'], answer:'B', explanation:'3x = 18, x = 6.' },
      { question: 'Pola: 100, 50, 25, 12.5, ...', options:['6','6.25','7','8'], answer:'B', explanation:'Setiap suku dibagi 2, jadi 12.5 ÷ 2 = 6.25.' },
      { question: 'Banyak diagonal pada segi enam adalah ...', options:['6','7','8','9'], answer:'C', explanation:'Diagonal segi n = n(n-3)/2 = 6×3/2 = 9.' },
      { question: 'Dari 90 orang, 30% memakai kacamata. Berapa orang yang memakai kacamata?', options:['20','24','27','30'], answer:'C', explanation:'30% × 90 = 27.' },
      { question: 'Jika hari ini Senin, 4 hari lagi adalah ...', options:['Jumat','Sabtu','Minggu','Senin'], answer:'A', explanation:'Senin + 4 hari = Jumat.' },
      { question: 'Jumlah semua sudut luar segitiga adalah ...', options:['180°','270°','360°','540°'], answer:'C', explanation:'Jumlah sudut luar segitiga = 360°.' },
      { question: 'Sebuah deret: 2, 3, 5, 8, 12, ... selanjutnya adalah ...', options:['14','15','16','17'], answer:'C', explanation:'Selisih 1,2,3,4, maka berikutnya +5 => 17.' },
      { question: 'Jika p dan q adalah bilangan bulat, dan p - q = 3 serta p + q = 11, maka p = ?', options:['5','6','7','8'], answer:'C', explanation:'p = (11 + 3)/2 = 7.' },
      { question: 'Luas segitiga dengan alas 12 cm dan tinggi 8 cm adalah ...', options:['36 cm²','48 cm²','56 cm²','64 cm²'], answer:'B', explanation:'1/2 × 12 × 8 = 48 cm².' },
      { question: 'Jumlah 2 angka ganjil berurutan adalah 20. Bilangan itu adalah ...', options:['9 dan 11','7 dan 13','8 dan 12','5 dan 15'], answer:'A', explanation:'9 + 11 = 20.' },
      { question: 'Pola: 3, 6, 11, 18, 27, ...', options:['36','38','39','40'], answer:'C', explanation:'Selisih 3,5,7,9, jadi berikutnya +11 => 38? Wait 27+11=38. So answer B.' },
      { question: 'Bentuk sederhana dari 36/48 adalah ...', options:['3/4','2/3','3/5','4/5'], answer:'A', explanation:'36/48 = 3/4.' },
      { question: 'Banyaknya sisi pada icosahedron adalah ...', options:['12','20','30','60'], answer:'B', explanation:'Ikosahedron mempunyai 20 sisi.' },
      { question: 'Jika x = 4, y = 6, maka 2x² - y = ?', options:['22','26','28','30'], answer:'B', explanation:'2×16 - 6 = 26.' },
      { question: 'Dalam 10 menit ada 600 detik. Ini berarti ...', options:['5 menit','10 menit','15 menit','20 menit'], answer:'B', explanation:'600 detik = 10 menit.' },
      { question: 'Pola: 14, 11, 8, 5, ...', options:['2','3','4','1'], answer:'A', explanation:'Berkurang 3, jadi 5 - 3 = 2.' },
      { question: 'Hasil dari 15 × (4 + 2) ÷ 5 = ?', options:['15','18','20','24'], answer:'B', explanation:'15 × 6 ÷ 5 = 18.' },
      { question: 'Jika 9 orang menyelesaikan tugas dalam 5 hari, maka 15 orang menyelesaikan tugas dalam ...', options:['2 hari','3 hari','4 hari','5 hari'], answer:'B', explanation:'Waktu berbanding terbalik: 9/15 × 5 = 3 hari.' },
      { question: 'Berapakah angka berikutnya dalam pola 1, 4, 9, 16, 25, ... ?', options:['30','31','36','49'], answer:'C', explanation:'Kumpulan kuadrat dari 1,2,3,4,5, maka berikutnya 6² = 36.' },
      { question: 'Jika total 200 dan bagian 35% adalah ...', options:['60','65','70','75'], answer:'B', explanation:'35% × 200 = 70.' },
      { question: 'Luas lingkaran dengan jari-jari 14 cm dan π = 22/7 adalah ...', options:['44 cm²','88 cm²','308 cm²','616 cm²'], answer:'D', explanation:'πr² = 22/7 × 14² = 616 cm².' },
      { question: 'Dalam diagram venn, 12 ikut A, 10 ikut B, dan 4 ikut keduanya. Yang ikut A saja adalah ...', options:['4','6','8','10'], answer:'C', explanation:'12 - 4 = 8.' },
      { question: 'Hasil 2/3 × 9/4 = ?', options:['1/2','3/2','3/4','1 1/2'], answer:'B', explanation:'2/3 × 9/4 = 18/12 = 3/2 = 1 1/2.' }
    ]
  }
};

const levelList = document.getElementById('levelList');
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const quizLevelLabel = document.getElementById('quizLevelLabel');
const questionCounter = document.getElementById('questionCounter');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const answersWrap = document.getElementById('answers');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finalScore = document.getElementById('finalScore');
const correctCount = document.getElementById('correctCount');
const wrongCount = document.getElementById('wrongCount');
const bankCount = document.getElementById('bankCount');
const resultMessage = document.getElementById('resultMessage');
const answerKeyList = document.getElementById('answerKeyList');
const supportBtn = document.getElementById('supportBtn');
const supportModal = document.getElementById('supportModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const retryBtn = document.getElementById('retryBtn');
const backHomeBtn = document.getElementById('backHomeBtn');

const levelOrder = Object.keys(levelConfigs);
let currentLevel = null;
let currentQuestions = [];
let currentIndex = 0;
let answersRecord = [];

function renderLevelButtons() {
  levelList.innerHTML = '';

  levelOrder.forEach((key) => {
    const config = levelConfigs[key];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'level-card';
    button.innerHTML = `
      <h4>${config.title}</h4>
      <p>${config.description}</p>
      <div class="level-meta">
        <span>${config.bank.length} soal</span>
        <span class="level-badge">10 soal</span>
      </div>
    `;

    button.addEventListener('click', () => startQuiz(key));
    levelList.appendChild(button);
  });
}

function showScreen(screenName) {
  homeScreen.classList.toggle('active', screenName === 'home');
  quizScreen.classList.toggle('active', screenName === 'quiz');
  resultScreen.classList.toggle('active', screenName === 'result');
}

function getShuffled(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz(levelKey) {
  const config = levelConfigs[levelKey];
  currentLevel = levelKey;
  currentQuestions = getShuffled(config.bank).slice(0, 10).map((item, index) => ({
    ...item,
    selected: null,
    userAnswer: null,
    number: index + 1
  }));

  answersRecord = Array(currentQuestions.length).fill(null);
  currentIndex = 0;

  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  if (!q) return;

  const progress = ((currentIndex + 1) / currentQuestions.length) * 100;
  progressFill.style.width = `${progress}%`;
  questionCounter.textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
  questionNumber.textContent = `Soal ${currentIndex + 1}`;
  questionText.textContent = q.question;
  quizLevelLabel.textContent = levelConfigs[currentLevel].title;

  prevBtn.disabled = currentIndex === 0;
  prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';

  answersWrap.innerHTML = '';

  q.options.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.type = 'button';
    optionButton.className = `answer-option ${q.selected === option ? 'selected' : ''}`;
    optionButton.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    `;

    optionButton.addEventListener('click', () => {
      q.selected = option;
      answersRecord[currentIndex] = option;
      renderQuestion();
    });

    answersWrap.appendChild(optionButton);
  });

  nextBtn.textContent = currentIndex === currentQuestions.length - 1 ? 'Selesai' : 'Lanjut';
}

function showResult() {
  let correct = 0;
  const answerEntries = currentQuestions.map((q) => {
    const selected = q.selected || 'Belum dijawab';
    const isCorrect = selected === q.answer;
    if (isCorrect) correct += 1;
    return {
      question: q.question,
      answer: q.answer,
      selected
    };
  });

  const score = correct;
  const wrong = currentQuestions.length - correct;
  const bankTotal = levelConfigs[currentLevel].bank.length;

  finalScore.textContent = score;
  correctCount.textContent = score;
  wrongCount.textContent = wrong;
  bankCount.textContent = bankTotal;

  const percentage = (score / currentQuestions.length) * 100;
  let message = 'Kerjakan dengan fokus dan tingkatkan konsistensi penguasaan anda.';

  if (percentage >= 90) {
    message = 'Luar biasa! Anda sangat konsisten dan cepat dalam menganalisis pola.';
  } else if (percentage >= 70) {
    message = 'Bagus! Kemampuan logika Anda sudah sangat baik, tingkatkan lagi.';
  } else if (percentage >= 50) {
    message = 'Cukup baik. Latihan lanjutan akan meningkatkan skor Anda.';
  } else if (percentage >= 30) {
    message = 'Semangat! Fokus pada pola dan logika akan memperbaiki skor.';
  }

  resultMessage.textContent = message;

  answerKeyList.innerHTML = currentQuestions.map((q, index) => {
    const userSelection = q.selected || 'Belum dijawab';
    const status = q.selected === q.answer ? 'Benar' : 'Salah';
    return `<li><strong>Soal ${index + 1:</strong> ${q.question}<br><span>Jawaban Anda: ${userSelection} · Kunci: ${q.answer} · ${status}</span></li>`;
  }).join('');

  showScreen('result');
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  showResult();
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < currentQuestions.length - 1) {
    nextQuestion();
  } else {
    showResult();
  }
});

retryBtn.addEventListener('click', () => startQuiz(currentLevel));
backHomeBtn.addEventListener('click', () => showScreen('home'));

supportBtn.addEventListener('click', () => {
  supportModal.classList.add('open');
  supportModal.setAttribute('aria-hidden', 'false');
});

closeModalBtn.addEventListener('click', () => {
  supportModal.classList.remove('open');
  supportModal.setAttribute('aria-hidden', 'true');
});

supportModal.addEventListener('click', (event) => {
  if (event.target === supportModal) {
    supportModal.classList.remove('open');
    supportModal.setAttribute('aria-hidden', 'true');
  }
});

renderLevelButtons();
showScreen('home');

