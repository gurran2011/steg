input.onGesture(Gesture.Shake, function () {
    antal_steg += 1
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    sätt_antal_steg = 0
})
let antal_steg = 0
let sätt_antal_steg = 0
basic.showString("start")
sätt_antal_steg = 0
basic.forever(function () {
    basic.showNumber(antal_steg)
})
