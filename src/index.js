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
        ' ':  ' ',
};

function decode(expression) {
    const result = []

    for (let i = 0; i < expression.length - 1; i += 10) {
        result.push(
            MORSE_TABLE[
                expression
                    .slice(i, i + 10)
                    .replace(/00/g, '')
                    .replace(/10/g, '.')
                    .replace(/11/g, '-')
                    .replace(/\*{10}/g, ' ')
            ]
        )
    }

    return result.join('')
}

module.exports = {
    decode
}