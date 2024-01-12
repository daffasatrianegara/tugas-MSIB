const prompt = require('prompt-sync')();

const test = (num) => {
    let hasil = ''
    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            if(i % 2 === 0) {
                j % 2 === 0 ? hasil += '*' : hasil += j
            } else {
                j % 2 !== 0 ? hasil += '*' : hasil += j
            }
        }
        hasil += '\n'
    }
    const ket = `Output: \n${hasil}`
    return ket
}

const input = prompt('input: ')
console.log(test(input));