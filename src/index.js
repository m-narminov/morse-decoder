const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

  let wordsCount = expr.length / 10;
  let arr = []; 
  let res = '';

  for (let k = 0; k < wordsCount; k++) {
    let nextWord = ''
    for (let i = k * 10; i < expr.length; i++) {
      if (k % 9 !== 0) {
        nextWord += expr[i];
      }
    }
    arr.push(nextWord);
  }

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '**********') {
      res += ' ';
    } else {

      let word = +arr[i];
      let key = '';

      while (word % 100 !== 0) {
        let wordStr = word / String(word).length - 2;
        let symb = wordStr === 10 ? '.' : '-'
        key += symb;
        word = word / 100 
      }
      
      res += MORSE_TABLE[key];
    }
  }

  return res;
}

module.exports = {
    decode
}
