// my attempt at a pretty distribution of random points. i would use poisson but idk how it works

// found here: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function randomInt(min, max) {
  return [
    Math.floor(Math.random() * (max - min + 1)) + min,
    Math.floor(Math.random() * (max - min + 1)) + min,
  ]
}

function checkPoint(point1, point2, r) {
  const dist = getDistance(point1[0], point1[1], point2[0], point2[1])

  return dist > r
}

function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1
  let x = y2 - y1

  return Math.sqrt(x * x + y * y)
}

export default function distribute(count, min, max) {
  let arr = []
  for (var i = 0; i < count; i++) {
    if (arr.length > 0) {
      var test = null
      var r = 30
      for (var repeat = 0; repeat < 8; repeat++) {
        var track = false
        test = randomInt(min, max)
        arr.forEach((e) => {
          track = checkPoint(test, e, r)
        })

        if (repeat > 5) {
          r += -5
        }
        if (track) {
          break
        }
      }
      arr.push(test)
    } else {
      arr.push(randomInt(min, max))
    }
  }
  return arr
}
