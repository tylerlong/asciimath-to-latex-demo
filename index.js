const asciimath2latex = require('asciimath-to-latex').default
const asciimath = '2=(((3-x)xx2)/(3-x))'
console.log(`asciimath: ${asciimath}`)
const latex = asciimath2latex(asciimath)
console.log(`latex: ${latex}`)
