// buscando por medio de un vector de combinaciones posibles
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

// buscando por medio de la creacion de un vector con los indices pasados encontrados
function solution2 (a, b) {
  a = a.toUpperCase()
  b = b.toUpperCase()
  let counting = 0
  let indexFound = []
  for (let indexA = 0; indexA < a.length; indexA++) {
    for (let indexB = 0; indexB < b.length; indexB++) {
      for (let indexUsed = 0; indexUsed < indexFound.length; indexUsed++) {
        if (indexB === indexFound[indexUsed]) {
          break
        }
      }
      if (a[indexA] === b[indexB]) {
        indexFound.push(indexB)
      }
    }
    if (indexFound.length === b.length) {
      counting++
      indexFound = []
    }
  }
  return counting++
}

console.log('Buscando anagramas en metodo solution: ' + solution('hola, que buena ola Laomir', 'OAL'))
console.log('BUscando anagramas en metodo solution2: ' + solution2('hola, que buena ola Laomir', 'OAL'))
