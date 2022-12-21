modules.gamepad1.onEvent(jacdac.GamepadEvent.ButtonsChanged, function () {
    if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.A)) {
        if (mouse_click) {
            mouse_click = 0
            modules.hidMouse1.setButton(jacdac.HidMouseButton.Left, jacdac.HidMouseButtonEvent.Up)
            basic.pause(100)
        } else {
            mouse_click = 1
            modules.hidMouse1.setButton(jacdac.HidMouseButton.Left, jacdac.HidMouseButtonEvent.Down)
            basic.pause(100)
        }
    }
})
let mouse_click = 0
radio.setGroup(1)
basic.forever(function () {
    if (Math.abs(modules.gamepad1.x()) >= 10) {
        modules.hidMouse1.move(modules.gamepad1.x() / 2, 0)
    }
    if (Math.abs(modules.gamepad1.y()) >= 10) {
        modules.hidMouse1.move(0, modules.gamepad1.y() / 2)
    }
})
