import asciimath2latex from 'asciimath-to-latex'
const asciimath = '2=(((3-x)xx2)/(3-x))'
console.log(`asciimath: ${asciimath}`)
const latex = asciimath2latex(asciimath)
console.log(`latex: ${latex}`)
