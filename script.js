const quotes = [
  {
    text: 'Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum sampai mereka mengubah keadaan diri mereka sendiri.',
    author: "Qur'an, Surah Ar-Ra'd (13:11)",
  },
  {
    text: 'Orang yang paling baik adalah yang paling bermanfaat bagi orang lain.',
    author: 'Nabi Muhammad SAW',
  },
  {
    text: 'Janganlah kamu merasa lemah dan janganlah kamu bersedih hati, sebab kamu paling tinggi derajatnya jika kamu beriman.',
    author: "Qur'an, Surah Ali Imran (3:139)",
  },
  {
    text: 'Barangsiapa yang bertakwa kepada Allah, niscaya Dia akan membukakan jalan keluar baginya.',
    author: "Qur'an, Surah At-Talaq (65:2-3)",
  },
  {
    text: 'Sesungguhnya bersama kesulitan ada kemudahan.',
    author: "Qur'an, Surah Al-Insyirah (94:5-6)",
  },
  {
    text: 'Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita.',
    author: "Qur'an, Surah At-Taubah (9:40)",
  },
  {
    text: 'Tidak ada balasan kebaikan kecuali kebaikan pula.',
    author: "Qur'an, Surah Ar-Rahman (55:60)",
  },
  {
    text: 'Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia.',
    author: 'Nabi Muhammad SAW',
  },
  {
    text: 'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.',
    author: "Qur'an, Surah Al-Baqarah (2:286)",
  },
  {
    text: 'Sesungguhnya Allah mencintai orang-orang yang berbuat baik.',
    author: "Qur'an, Surah Al-Baqarah (2:195)",
  },
  {
    text: 'Jadilah engkau di dunia ini seperti orang asing atau orang yang sedang dalam perjalanan.',
    author: 'Nabi Muhammad SAW',
  },
  {
    text: 'Barangsiapa yang bersungguh-sungguh, maka dia akan mendapatkan kesuksesan.',
    author: "Imam Syafi'i",
  },
  {
    text: 'Ilmu itu kehidupan hati dari kebodohan, cahaya penglihatan dari kezaliman, dan kekuatan jiwa dari kelemahan.',
    author: 'Imam Al-Ghazali',
  },
  {
    text: 'Janganlah engkau berduka atas apa yang telah berlalu, karena itu tidak akan kembali lagi.',
    author: 'Umar bin Khattab',
  },
  {
    text: 'Kesabaran itu ada dua macam: sabar atas sesuatu yang tidak kau inginkan dan sabar menahan diri dari sesuatu yang kau inginkan.',
    author: 'Ali bin Abi Thalib',
  },
];

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const newQuote = document.querySelector('#new-quote');

function generateQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = randomQuote.text;
  author.textContent = `~ ${randomQuote.author}`;
}

newQuote.addEventListener('click', generateQuote);

generateQuote();
