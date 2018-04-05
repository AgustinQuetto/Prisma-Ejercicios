function solution (a, b) {
  function permute (b) {
    var ret = []
    if (b.length === 1) return [b]
    if (b.length === 2) return [b, b[1] + b[0]]
    b.split('').forEach((chr, idx, arr) => {
      var sub = [].concat(arr)
      sub.splice(idx, 1)
      permute(sub.join('')).forEach(perm => {
        ret.push(chr + perm)
      })
    })
    return ret
  }
  let aArray = a.toUpperCase().split(' ')
  let bArray = permute(b)
  let cantidadEncontrada = 0
  aArray.forEach(word => {
    bArray.forEach(element => {
      if (word.indexOf(element) > -1) {
        cantidadEncontrada++
        console.log(word, element)
      }
    })
  })
  return cantidadEncontrada
}

console.log(solution('hola, que buena ola Laomir', 'OAL'))


function solution2 (a, b) {
  a = a.toUpperCase()
  b = b.join('')
  let indexUsed = []
  for (let indexA = 0; indexA < a.length; indexA++) {
    for (let indexB = 0; indexB < b.length; indexB++) {
      let found = false
      for (let indexUsed = 0; indexUsed < array.length; indexUsed++) {
        if(b[indexB] === indexUsed[indexUsed]) {
          found = true
        }
      }
      if(a[indexA] === b[indexB]) {
        indexUsed.push(indexB)
      }
    }
  }
}
