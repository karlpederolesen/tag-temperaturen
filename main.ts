let temperatur = 0
let antal = 0
basic.forever(function () {
    temperatur = input.temperature() - 2
    antal = Math.constrain(Math.floor(temperatur / 2 - 9), 0, 5)
    for (let indeks = 0; indeks <= 4; indeks++) {
        if (indeks <= antal - 1) {
            led.plot(indeks, 2)
        } else {
            led.unplot(indeks, 2)
        }
    }
})
