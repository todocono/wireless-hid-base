radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        modules.hidMouse1.move(value, 0)
        led.plotBarGraph(
        value,
        0
        )
    } else if (name == "y") {
        modules.hidMouse1.move(0, value)
    } else if (name == "adown") {
        modules.hidMouse1.setButton(jacdac.HidMouseButton.Left, jacdac.HidMouseButtonEvent.Down)
    } else if (name == "aup") {
        modules.hidMouse1.setButton(jacdac.HidMouseButton.Left, jacdac.HidMouseButtonEvent.Up)
    } else {
    	
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
