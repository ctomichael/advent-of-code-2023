const fs = require('fs');

const data = fs.readFileSync('./1-Trebuchet-input.txt', { encoding: 'utf8', flag: 'r' })

const lines = data.split('\n')
const allExceptNumbersPattern = /[^(0-9)]/gi

const sum = lines
	.map(l => l.replaceAll(allExceptNumbersPattern, ''))
	.map(l => `${l[0]}${l[l.length - 1]}`)
	.map(l => Number(l))
	.reduce((prev, cur) => (cur + prev))

console.log(sum)