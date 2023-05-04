radio.onReceivedNumber(function (receivedNumber) {
    Item = receivedNumber
    if (Item == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (Item == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
    if (Item == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
    if (Item == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 160)
    }
    if (Item == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 160)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (Item == 5) {
        maqueen.servoRun(maqueen.Servos.S2, 150)
    }
    if (Item == 6) {
        maqueen.servoRun(maqueen.Servos.S1, 30)
    }
    if (Item == 7) {
        maqueen.servoRun(maqueen.Servos.S2, 25)
    }
    if (Item == 8) {
        maqueen.servoRun(maqueen.Servos.S1, 170)
    }
    if (Item == 9) {
        maqueen.servoRun(maqueen.Servos.S2, 90)
    }
})
let Item = 0
radio.setGroup(1)
let color = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
led.plot(2, 0)
