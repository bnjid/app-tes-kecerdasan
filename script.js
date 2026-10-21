const levelConfigs = {
  mudah: {
    title: 'Mudah',
    description: 'Pola sederhana, hitungan cepat, dan logika dasar.',
    bank: [
      { question: 'Jika semua kucing adalah mamalia dan semua mamalia bernapas, maka ...', options: ['Semua kucing tidak bernapas', 'Semua kucing bernapas', 'Semua mamalia adalah kucing', 'Tidak ada kesimpulan'], answer: 'B', explanation: 'Semua kucing termasuk mamalia, dan semua mamalia bernapas.' },
      { question: '17 + 8 = ?', options: ['23', '24', '25', '26'], answer: 'C', explanation: '17 + 8 = 25.' },
      { question: 'Urutan angka 2, 4, 8, 16, ... angka berikutnya adalah?', options: ['18', '24', '32', '36'], answer: 'C', explanation: 'Dikalikan 2 setiap langkah, maka 16 × 2 = 32.' },
      { question: 'Setelah Selasa adalah ...', options: ['Senin', 'Rabu', 'Kamis', 'Minggu'], answer: 'B', explanation: 'Setelah Selasa adalah Rabu.' },
      { question: 'Bunga mawar berwarna merah. Semua bunga mawar berwarna merah. Maka ...', options: ['Semua bunga merah adalah mawar', 'Bunga mawar tidak mungkin hijau', 'Semua bunga adalah mawar', 'Semua bunga berwarna merah'], answer: 'B', explanation: 'Karena mawar bukan hanya bunga, tetapi semua mawar berwarna merah.' },
      { question: 'Jika semua siswa suka membaca, dan Rina adalah siswa, maka ...', options: ['Rina tidak suka membaca', 'Rina suka membaca', 'Rina bukan siswa', 'Tidak ada kesimpulan'], answer: 'B', explanation: 'Semua siswa suka membaca, maka Rina juga suka membaca.' },
      { question: '3 × 7 = ?', options: ['19', '20', '21', '22'], answer: 'C', explanation: '3 × 7 = 21.' },
      { question: 'Bangun dengan 3 sisi adalah ...', options: ['Persegi', 'Segitiga', 'Lingkaran', 'Kubus'], answer: 'B', explanation: 'Segitiga mempunyai 3 sisi.' },
      { question: '30% dari 200 adalah ...', options: ['30', '50', '60', '80'], answer: 'C', explanation: '30% × 200 = 60.' },
      { question: 'Pukul 03.00 ditambah 2 jam adalah ...', options: ['04.00', '05.00', '06.00', '07.00'], answer: 'B', explanation: '03.00 + 2 jam = 05.00.' },
      { question: 'Pola huruf A, C, E, G, ... huruf selanjutnya adalah?', options: ['H', 'I', 'J', 'K'], answer: 'B', explanation: 'Pola loncat satu huruf: A, C, E, G, I.' },
      { question: '13 + 12 = ?', options: ['24', '25', '26', '27'], answer: 'B', explanation: '13 + 12 = 25.' },
      { question: 'Satu lusin = ?', options: ['6', '10', '12', '20'], answer: 'C', explanation: 'Satu lusin = 12 buah.' },
      { question: '7² = ?', options: ['14', '21', '49', '56'], answer: 'C', explanation: '7² = 49.' },
      { question: 'Yang bukan mamalia adalah ...', options: ['Kucing', 'Ikan', 'Sapi', 'Kelinci'], answer: 'B', explanation: 'Ikan bukan termasuk mamalia.' },
      { question: 'Akar kuadrat dari 81 adalah ...', options: ['7', '8', '9', '10'], answer: 'C', explanation: '9 × 9 = 81.' },
      { question: 'Bulan setelah April adalah ...', options: ['Mei', 'Juni', 'Maret', 'Juli'], answer: 'A', explanation: 'April diikuti Mei.' },
      { question: 'Jika x = 5, maka 2x + 3 = ?', options: ['7', '10', '13', '15'], answer: 'C', explanation: '2(5) + 3 = 13.' },
      { question: 'Nama bilangan 1000 adalah ...', options: ['Seratus', 'Seribu', 'Sepuluh ribu', 'Satu juta'], answer: 'B', explanation: '1000 disebut seribu.' },
      { question: 'Kebalikan dari 4 adalah ...', options: ['1/4', '4', '1', '1/2'], answer: 'A', explanation: 'Kebalikan dari 4 adalah 1/4.' },
      { question: 'Sebuah kubus mempunyai ... sisi', options: ['3', '4', '5', '6'], answer: 'D', explanation: 'Kubus mempunyai 6 sisi.' },
      { question: '15 - 9 = ?', options: ['5', '6', '7', '8'], answer: 'B', explanation: '15 - 9 = 6.' },
      { question: 'Jika semua mobil beroda empat, maka ...', options: ['Semua kendaraan beroda empat adalah mobil', 'Mobil tidak mungkin beroda 5', 'Semua mobil adalah kendaraan', 'Tidak ada kesimpulan'], answer: 'C', explanation: 'Mobil merupakan bagian dari kendaraan.' },
      { question: 'Bentuk jamak dari anak adalah ...', options: ['Anak-anak', 'Anaks', 'Anakku', 'Anaknya'], answer: 'A', explanation: 'Bentuk jamak yang benar adalah anak-anak.' },
      { question: '9 + 6 = ?', options: ['14', '15', '16', '17'], answer: 'B', explanation: '9 + 6 = 15.' },
      { question: 'Pola 5, 10, 15, 20, ... angka berikutnya adalah?', options: ['21', '22', '25', '30'], answer: 'C', explanation: 'Selisih 5, jadi 20 + 5 = 25.' },
      { question: 'Ibu kota Indonesia adalah ...', options: ['Bandung', 'Jogja', 'Jakarta', 'Surabaya'], answer: 'C', explanation: 'Jakarta adalah ibu kota Indonesia.' },
      { question: '1 meter = ... sentimeter', options: ['10', '50', '100', '1000'], answer: 'C', explanation: '1 meter = 100 sentimeter.' },
      { question: 'Urutan vokal yang benar adalah ...', options: ['A, I, U, E, O', 'A, E, I, O, U', 'O, U, E, I, A', 'E, A, I, O, U'], answer: 'B', explanation: 'Urutan vokal yang benar adalah A, E, I, O, U.' },
      { question: '50 ÷ 5 = ?', options: ['5', '10', '15', '20'], answer: 'B', explanation: '50 ÷ 5 = 10.' },
      { question: 'Sudut 90° disebut sudut ...', options: ['Lancip', 'Tumpul', 'Siku-siku', 'Refleks'], answer: 'C', explanation: 'Sudut 90° adalah sudut siku-siku.' },
      { question: 'Dua hari sebelum Minggu adalah ...', options: ['Jumat', 'Sabtu', 'Kamis', 'Senin'], answer: 'B', explanation: 'Minggu lalu dua hari sebelumnya adalah Sabtu.' }
    ]
  },
  sedang: {
    title: 'Sedang',
    description: 'Penalaran logis lebih kompleks dan pola numerik yang variatif.',
    bank: [
      { question: 'Jika semua A adalah B dan semua B adalah C, maka ...', options: ['Semua A adalah C', 'Semua C adalah A', 'Semua B bukan C', 'Tidak ada kesimpulan'], answer: 'A', explanation: 'A masuk ke B dan B masuk ke C, jadi semua A adalah C.' },
      { question: 'Pola 3, 6, 12, 24, ... angka berikutnya adalah?', options: ['36', '40', '48', '54'], answer: 'C', explanation: 'Setiap angka dikalikan 2, maka 24 × 2 = 48.' },
      { question: '18 ÷ 3 + 4 × 2 = ?', options: ['10', '12', '14', '16'], answer: 'C', explanation: '18 ÷ 3 = 6, 4 × 2 = 8, total = 14.' },
      { question: 'Jika x + 7 = 19, maka x = ?', options: ['10', '11', '12', '13'], answer: 'C', explanation: '19 - 7 = 12.' },
      { question: 'Pola bilangan 7, 14, 28, 56, ...', options: ['84', '98', '112', '120'], answer: 'C', explanation: 'Setiap suku dikali 2, jadi 56 × 2 = 112.' },
      { question: 'Diskon 20% dari Rp150.000 adalah ...', options: ['Rp25.000', 'Rp30.000', 'Rp35.000', 'Rp40.000'], answer: 'B', explanation: '20% × 150.000 = 30.000.' },
      { question: 'Jika 3x - 5 = 16, maka x = ?', options: ['6', '7', '8', '9'], answer: 'B', explanation: '3x = 21, x = 7.' },
      { question: 'Ada 5 buku lebih banyak daripada 2 buku. Selisihnya adalah ...', options: ['2', '3', '4', '5'], answer: 'B', explanation: '5 - 2 = 3.' },
      { question: 'Pola A, C, F, J, ...', options: ['N', 'M', 'O', 'P'], answer: 'A', explanation: 'Selisih +2, +3, +4, jadi +5 → N.' },
      { question: 'Volume kubus 125 cm³. Panjang rusuknya adalah ...', options: ['4 cm', '5 cm', '6 cm', '7 cm'], answer: 'B', explanation: '5 × 5 × 5 = 125.' },
      { question: 'Dari 50 siswa, 30 suka matematika dan 20 suka IPA. Jika 10 siswa suka keduanya, siswa yang hanya suka matematika adalah ...', options: ['10', '20', '30', '40'], answer: 'B', explanation: '30 - 10 = 20.' },
      { question: 'Jika A lebih tua dari B dan B lebih tua dari C, maka ...', options: ['A paling muda', 'C paling tua', 'A lebih tua dari C', 'B paling tua'], answer: 'C', explanation: 'A > B > C, jadi A lebih tua dari C.' },
      { question: 'Persamaan garis y = 2x + 3 memotong sumbu Y di ...', options: ['0', '2', '3', '5'], answer: 'C', explanation: 'Saat x = 0, y = 3.' },
      { question: 'Pola 8, 11, 15, 20, ...', options: ['24', '25', '26', '27'], answer: 'C', explanation: 'Selisih 3, 4, 5, lalu +6 = 26.' },
      { question: 'Rata-rata 6, 8, 10, 12 adalah ...', options: ['8', '9', '10', '11'], answer: 'B', explanation: '(6 + 8 + 10 + 12)/4 = 9.' },
      { question: 'Jika suatu bilangan dibagi 6 sisanya 2, bilangan itu mungkin ...', options: ['14', '16', '18', '20'], answer: 'D', explanation: '20 ÷ 6 = 3 sisa 2.' },
      { question: 'Tiga kali suatu bilangan ditambah 4 sama dengan 19. Bilangan itu adalah ...', options: ['3', '4', '5', '6'], answer: 'C', explanation: '3x + 4 = 19 → x = 5.' },
      { question: '12 siswa laki-laki dan 18 siswa perempuan. Persentase siswa laki-laki adalah ...', options: ['30%', '35%', '40%', '45%'], answer: 'C', explanation: '12/30 × 100% = 40%.' },
      { question: '1, 1, 2, 3, 5, 8, ...', options: ['11', '12', '13', '14'], answer: 'C', explanation: 'Deret Fibonacci: 5 + 8 = 13.' },
      { question: 'Jika 2a = 24, maka a = ?', options: ['10', '11', '12', '13'], answer: 'C', explanation: '24 ÷ 2 = 12.' }
    ]
  },
  sulit: {
    title: 'Sulit',
    description: 'Logika tingkat lanjut, analisis pola, dan berpikir strategis.',
    bank: [
      { question: 'Jika semua P adalah Q, semua Q adalah R, semua R adalah S, maka semua P adalah ...', options: ['Q', 'R', 'S', 'Semua benar'], answer: 'D', explanation: 'Semua P adalah Q, Q adalah R, R adalah S, jadi semua P adalah S. Semua jawaban yang masuk akal benar secara bertingkat.' },
      { question: 'Pola 2, 5, 11, 23, ...', options: ['35', '47', '46', '48'], answer: 'B', explanation: 'Setiap suku = 2 × prev + 1, jadi 23 × 2 + 1 = 47.' },
      { question: 'Jika x² = 81 dan x > 0, maka x = ?', options: ['7', '8', '9', '10'], answer: 'C', explanation: 'x = 9 karena 9² = 81.' },
      { question: '12 + 3 × (8 - 2) = ?', options: ['18', '21', '24', '30'], answer: 'D', explanation: '8 - 2 = 6, 3 × 6 = 18, 12 + 18 = 30.' },
      { question: 'Dalam kelas ada 30 siswa. 18 suka musik, 14 suka olahraga, 7 suka keduanya. Yang tidak suka keduanya adalah ...', options: ['5', '6', '7', '8'], answer: 'A', explanation: 'Suka salah satu atau keduanya = 18 + 14 - 7 = 25. Jadi tidak suka keduanya = 30 - 25 = 5.' },
      { question: 'Pola 1, 2, 4, 7, 11, ...', options: ['14', '15', '16', '18'], answer: 'C', explanation: 'Selisih 1, 2, 3, 4, kemudian +5 = 16.' },
      { question: 'Tiga orang dapat menyelesaikan pekerjaan dalam 12 hari. Enam orang dengan kecepatan sama membutuhkan ...', options: ['4 hari', '6 hari', '8 hari', '10 hari'], answer: 'B', explanation: '3 × 12 = 36 orang-hari. 36 ÷ 6 = 6 hari.' },
      { question: 'Rata-rata 12, 10, 8, 6, 4 adalah ...', options: ['8', '9', '10', '11'], answer: 'A', explanation: '(12 + 10 + 8 + 6 + 4)/5 = 40/5 = 8.' },
      { question: 'Jika a = 5, b = 3, c = 2, maka (a+b) × c = ?', options: ['14', '15', '16', '18'], answer: 'C', explanation: '(5 + 3) × 2 = 8 × 2 = 16.' },
      { question: 'Pola huruf B, E, I, N, ...', options: ['Q', 'R', 'S', 'T'], answer: 'D', explanation: 'Selisih +3, +4, +5, lalu +6: B → E → I → N → T.' },
      { question: 'Jika semua ilmuwan pandai, dan Andi pandai, maka ...', options: ['Andi seorang ilmuwan', 'Semua pandai adalah ilmuwan', 'Andi mungkin ilmuwan', 'Semua ilmuwan pandai'], answer: 'C', explanation: 'Pandai tidak berarti semua pandai adalah ilmuwan; Andi mungkin ilmuwan, tetapi belum tentu.' },
      { question: 'Luas persegi panjang 84 cm² dengan lebar 7 cm. Panjangnya adalah ...', options: ['10 cm', '11 cm', '12 cm', '13 cm'], answer: 'C', explanation: '84 ÷ 7 = 12 cm.' },
      { question: '2x + 6 = 18, maka x = ?', options: ['4', '5', '6', '7'], answer: 'C', explanation: '2x = 12, x = 6.' },
      { question: 'Kubus dengan luas permukaan 216 cm². Panjang rusuknya adalah ...', options: ['4 cm', '5 cm', '6 cm', '7 cm'], answer: 'C', explanation: '6s² = 216, s² = 36, s = 6 cm.' },
      { question: 'Pola 81, 27, 9, 3, ...', options: ['2', '1', '0', '-1'], answer: 'B', explanation: 'Setiap suku dibagi 3, jadi 3 ÷ 3 = 1.' },
      { question: 'Median dari 4, 8, 6, 10, 12, 14 adalah ...', options: ['8', '9', '10', '11'], answer: 'B', explanation: 'Urutkan: 4, 6, 8, 10, 12, 14. Median = (8 + 10)/2 = 9.' },
      { question: 'Jika uang A = Rp80.000 dan B = 25% dari A, maka B = ...', options: ['Rp15.000', 'Rp20.000', 'Rp25.000', 'Rp30.000'], answer: 'B', explanation: '25% × 80.000 = 20.000.' },
      { question: 'Pola 3, 9, 27, 81, ...', options: ['162', '243', '324', '405'], answer: 'B', explanation: 'Setiap suku dikali 3, 81 × 3 = 243.' },
      { question: 'Jumlah sudut dalam segi-8 adalah ...', options: ['540°', '720°', '900°', '1080°'], answer: 'D', explanation: '(8 - 2) × 180° = 1080°.' },
      { question: '4x - 7 = 17, maka x = ?', options: ['5', '6', '7', '8'], answer: 'B', explanation: '4x = 24, x = 6.' }
    ]
  }
};

const levelOrder = Object.keys(levelConfigs);
let currentLevel = null;
let currentQuestions = [];
let currentIndex = 0;

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

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

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
        <span class="level-badge">10 soal / tes</span>
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

function startQuiz(levelKey) {
  const config = levelConfigs[levelKey];
  currentLevel = levelKey;
  currentQuestions = shuffle(config.bank).slice(0, 10).map((item) => ({
    ...item,
    selected: null
  }));
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
      renderQuestion();
    });

    answersWrap.appendChild(optionButton);
  });

  nextBtn.textContent = currentIndex === currentQuestions.length - 1 ? 'Selesai' : 'Lanjut';
}

function showResult() {
  const correctAnswers = currentQuestions.filter((q) => q.selected === q.answer).length;
  const wrongAnswers = currentQuestions.length - correctAnswers;
  const bankTotal = levelConfigs[currentLevel].bank.length;

  finalScore.textContent = String(correctAnswers);
  correctCount.textContent = String(correctAnswers);
  wrongCount.textContent = String(wrongAnswers);
  bankCount.textContent = String(bankTotal);

  const percentage = (correctAnswers / currentQuestions.length) * 100;
  let message = 'Tetap semangat! Latihan lanjutan akan membuat kemampuan logika Anda bertambah.';

  if (percentage >= 90) {
    message = 'Luar biasa! Anda sangat konsisten dalam menganalisis pola dan logika.';
  } else if (percentage >= 70) {
    message = 'Bagus! Kemampuan berpikir logis Anda sudah sangat kuat.';
  } else if (percentage >= 50) {
    message = 'Cukup baik. Tingkatkan fokus dan kecepatan berpikir agar skor lebih optimal.';
  } else if (percentage >= 30) {
    message = 'Semangat! Anda masih berada di tahap belajar. Lanjutkan latihan rutin.';
  }

  resultMessage.textContent = message;

  answerKeyList.innerHTML = currentQuestions.map((q, index) => {
    const selected = q.selected || 'Belum dijawab';
    const isCorrect = q.selected === q.answer;
    return `
      <li>
        <strong>Soal ${index + 1}</strong><br>
        <span>${q.question}</span><br>
        <span>Jawaban Anda: ${selected} · Kunci: ${q.answer} · ${isCorrect ? 'Benar' : 'Salah'}</span>
      </li>
    `;
  }).join('');

  showScreen('result');
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  showResult();
});

retryBtn.addEventListener('click', () => startQuiz(currentLevel));
backHomeBtn.addEventListener('click', () => showScreen('home'));

supportBtn.addEventListener('click', () => {
  supportModal.classList.add('open');
  supportModal.setAttribute('aria-hidden', 'false');
  supportBtn.setAttribute('aria-expanded', 'true');
});

closeModalBtn.addEventListener('click', () => {
  supportModal.classList.remove('open');
  supportModal.setAttribute('aria-hidden', 'true');
  supportBtn.setAttribute('aria-expanded', 'false');
});

supportModal.addEventListener('click', (event) => {
  if (event.target === supportModal) {
    supportModal.classList.remove('open');
    supportModal.setAttribute('aria-hidden', 'true');
    supportBtn.setAttribute('aria-expanded', 'false');
  }
});

const copyButton = document.querySelector('.support-copy-btn');
copyButton.addEventListener('click', async () => {
  const value = '0000000000';
  try {
    await navigator.clipboard.writeText(value);
    copyButton.textContent = 'Nomor disalin';
    setTimeout(() => {
      copyButton.textContent = 'Salin nomor QRIS';
    }, 1600);
  } catch (error) {
    copyButton.textContent = 'Salin gagal';
    setTimeout(() => {
      copyButton.textContent = 'Salin nomor QRIS';
    }, 1600);
  }
});

renderLevelButtons();
showScreen('home');

