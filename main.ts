let temperatur = 0
let antal = 0
basic.forever(function () {
    temperatur = input.temperature()
    antal = Math.constrain(Math.floor(temperatur / 2 - 9), 0, 5)
    basic.showNumber(antal)
})
