const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  let arr = [];
  let res = '';

  for (let k = 0; k < expr.length; k += 10) {
    let nextWord = expr.slice(k, k + 10);
    arr.push(nextWord);
  }

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '**********') {
      res += ' ';
    } else {
      let word = +arr[i];
      let key = '';

      while (word % 100 !== 0) {
        let wordStr = word / (String(word).length - 2);
        let symb = +wordStr === 10 ? '.' : '-';
        key += symb;
        word = word / 100;
      }

      res += MORSE_TABLE[key];
    }
  }

  return res;
}

module.exports = {
  decode
};
