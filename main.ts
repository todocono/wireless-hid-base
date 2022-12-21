modules.gamepad1.onEvent(jacdac.GamepadEvent.ButtonsChanged, function () {
    if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.A)) {
        if (mouse_click) {
            mouse_click = 0
            radio.sendValue("adown", 1)
            basic.pause(100)
        } else {
            mouse_click = 1
            radio.sendValue("aup", 1)
            basic.pause(100)
        }
    }
})
let mouse_click = 0
radio.setGroup(1)
basic.forever(function () {
    if (Math.abs(modules.gamepad1.x()) >= 10) {
        radio.sendValue("x", modules.gamepad1.x() / 2)
        led.plotBarGraph(
        modules.gamepad1.x(),
        0
        )
    }
    if (Math.abs(modules.gamepad1.y()) >= 10) {
        radio.sendValue("y", modules.gamepad1.y() / 2)
    }
})
