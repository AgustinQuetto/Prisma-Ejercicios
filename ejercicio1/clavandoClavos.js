function solution (a, b, n, c, m) {
  if (a.length !== b.length) return -1

  let d = []
  let pass = 0

  for (let index = 0; index < a.length; index++) {
    d[index] = [a[index], b[index]]
  }
  for (let index = 0; index < d.length; index++) {
    if ((n >= index >= 0) && (a[index] <= c[index] <= b[index]) && (index <= c[index])) {
      pass++
      if (pass === d.length) {
        return pass
      }
    } else {
      return -1
    }
  }

  return -1
}

const a = [1, 4, 5, 8]
const b = [4, 5, 9, 10]
const c = [4, 6, 7, 10, 2]
let n = 0
let m = 0

a.map(num => {
  n += num
})

b.map(num => {
  n += num
})

c.map(num => {
  m += num
})

console.log('Clavando clavos en solution: ' + solution(a, b, n, c, m))
console.log('Clavando clavos en solution: ' + solution([1, 4, 5, 8], [4, 5, 9], n, c, m))
