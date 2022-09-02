let Hindrinig = 0
bitbot.select_model(BBModel.XL)
basic.forever(function () {
    Hindrinig = bitbot.sonar(BBPingUnit.Centimeters)
    if (Hindrinig < 10) {
        bitbot.stop(BBStopMode.Coast)
        bitbot.setLedColor(0xFF0000)
        music.playMelody("F A F A F A F A ", 300)
        bitbot.rotatems(BBRobotDirection.Left, 20, 1200)
    } else {
        bitbot.go(BBDirection.Forward, 20)
        bitbot.setLedColor(0x18E600)
    }
})
