'use client';

import Link from 'next/link';
import { useState } from 'react';
import { enrichment } from '@/lib/handbookEnrichment';

// Enriched data model matching references/menu.jsx
const hardwareData = [
  {
    category: "🔌 Core Controllers & Computing",
    categoryKey: "Core_Controllers_&_Computing",
    color: '#e1ccfa',
    items: [
      { id: 'arduino-uno', name: 'Arduino Uno R3', shortName: 'Arduino', badge: 'Hardware Component', color: '#e1ccfa', placeholder: 'https://placehold.co/150x150/e0cbfb/000000?text=Arduino', description: 'The standard microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, an ICSP header and a reset button. Perfect for learning the basics of electronics and coding.', price: '25 Credits', syntax: [{ title: 'Basic Structure', code: 'void setup() {\n  // put your setup code here, to run once:\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}' }, { title: 'Digital Write', code: 'pinMode(13, OUTPUT);\ndigitalWrite(13, HIGH); // Turn on LED\ndelay(1000);            // Wait 1 sec' }] },
      { id: 'esp32', name: 'ESP32 Development Board', shortName: 'ESP32', badge: 'Hardware Component', color: '#e1ccfa', placeholder: 'https://placehold.co/150x150/e0cbfb/000000?text=ESP32', description: 'A low-cost, low-power system on a chip (SoC) microcontroller with integrated Wi-Fi and dual-mode Bluetooth. Highly favored in Solarpunk IoT projects for remote monitoring of environmental data.', price: '15 Credits', syntax: [{ title: 'Wi-Fi Connection', code: '#include <WiFi.h>\n\nconst char* ssid = "Solarpunk_Net";\nconst char* pass = "earth_first";\n\nWiFi.begin(ssid, pass);' }] }
    ]
  },
  {
    category: "🧱 Prototyping Hardware",
    categoryKey: "Prototyping_Hardware",
    color: '#c8e6c9',
    items: [
      { id: 'breadboards', name: 'Breadboards', shortName: 'Breadboard', badge: 'Prototyping Tool', color: '#c8e6c9', placeholder: 'https://placehold.co/150x150/d1e8e2/000000?text=Breadboard', description: 'A solderless device for temporary prototype with electronics and test circuit designs. Essential for quickly iterating on hardware setups without permanent commitment.', price: '5 Credits', syntax: [{ title: 'Usage Convention', code: '// Top/Bottom Rails (Horizontal): Power (+ red) & Ground (- blue/black)\n// Middle Rows (Vertical): Connected nodes for components' }] },
      { id: 'jumpers', name: 'Jumper Wires (M-M, M-F, F-F)', shortName: 'Jumpers', badge: 'Wiring', color: '#c8e6c9', placeholder: 'https://placehold.co/150x150/d1e8e2/000000?text=Jumpers', description: 'Electrical wires with connector pins at each end, used to interconnect components of a breadboard or test circuit, internally or with other equipment.', price: '2 Credits / bundle', syntax: [{ title: 'Standard Color Coding', code: 'RED   -> VCC / 5V / 3.3V (Power)\nBLACK -> GND (Ground)\nOTHER -> Data / Signal lines' }] },
      { id: 'usb-cables', name: 'USB Programming Cables', shortName: 'USB Cables', badge: 'Accessory', color: '#c8e6c9', placeholder: 'https://placehold.co/150x150/d1e8e2/000000?text=USB+Cables', description: 'Used to connect microcontrollers to computers for flashing compiled code and establishing serial communication for debugging.', price: '3 Credits', syntax: [{ title: 'Serial Debugging', code: '// Ensure baud rate matches your Serial Monitor\nSerial.begin(115200);\nSerial.println("System Initialized.");' }] },
      { id: 'power-supply', name: 'Breadboard Power Supply Module', shortName: 'Power Mod', badge: 'Accessory', color: '#c8e6c9', placeholder: 'https://placehold.co/150x150/d1e8e2/000000?text=Power+Mod', description: 'A module that plugs directly into a breadboard to provide regulated 3.3V or 5V power output.', price: '4 Credits', syntax: [{ title: 'Setup', code: '// Slide switch to select 3.3V or 5V\n// Connect barrel jack or USB for input power' }] },
      { id: 'dc-barrel', name: 'DC Barrel Connectors', shortName: 'DC Barrel', badge: 'Connector', color: '#c8e6c9', placeholder: 'https://placehold.co/150x150/d1e8e2/000000?text=DC+Barrel', description: 'Standard connectors for DC power supply connections, commonly used with Arduino and other dev boards.', price: '1 Credit', syntax: [{ title: 'Pinout', code: '// Center Pin: Positive (+)\n// Outer Shell: Ground (-)' }] },
      { id: 'screw-terminals', name: 'Screw Terminal Blocks', shortName: 'Terminals', badge: 'Connector', color: '#c8e6c9', placeholder: 'https://placehold.co/150x150/d1e8e2/000000?text=Terminals', description: 'Used for making secure, semi-permanent wire connections. Simply insert wire and tighten the screw.', price: '1 Credit', syntax: [{ title: 'Usage', code: '// Strip wire ~5mm\n// Insert into terminal hole\n// Tighten screw firmly' }] }
    ]
  },
  {
    category: "🌿 Sensors",
    categoryKey: "Sensors",
    color: '#f9e79f',
    items: [
      { id: 'ldr', name: 'LDR Module (Light)', shortName: 'LDR', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=LDR', description: 'A light-dependent resistor module that changes resistance based on light intensity. Used in auto-brightness and solar tracking applications.', price: '3 Credits', syntax: [{ title: 'Analog Read', code: 'int lightValue = analogRead(A0);\nSerial.println(lightValue);' }] },
      { id: 'light-intensity', name: 'Light Intensity Sensor', shortName: 'Light', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Light', description: 'A digital light sensor for precise lux measurement. Ideal for environmental monitoring stations.', price: '5 Credits', syntax: [{ title: 'I2C Read', code: '#include <BH1750.h>\nBH1750 lightMeter;\nlightMeter.begin();\nfloat lux = lightMeter.readLightLevel();' }] },
      { id: 'pir', name: 'PIR Motion Sensor', shortName: 'PIR', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=PIR', description: 'Passive Infrared sensor that detects motion by measuring changes in infrared radiation. Used in security and automation systems.', price: '4 Credits', syntax: [{ title: 'Digital Read', code: 'int motion = digitalRead(PIR_PIN);\nif (motion == HIGH) {\n  Serial.println("Motion detected!");\n}' }] },
      { id: 'ir-proximity', name: 'IR Proximity Sensor', shortName: 'IR', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=IR', description: 'Infrared proximity sensor for short-range obstacle detection. Used in line-following robots and proximity alerts.', price: '3 Credits', syntax: [{ title: 'Basic Usage', code: 'int obstacle = digitalRead(IR_PIN);\n// LOW = obstacle detected\n// HIGH = clear path' }] },
      { id: 'ultrasonic', name: 'Ultrasonic Distance Sensor', shortName: 'Ultrasonic', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Ultrasonic', description: 'HC-SR04 sensor that measures distance using sound waves. Range: 2cm to 400cm. Essential for robotics navigation.', price: '4 Credits', syntax: [{ title: 'Distance Measurement', code: 'digitalWrite(TRIG, HIGH);\ndelayMicroseconds(10);\ndigitalWrite(TRIG, LOW);\nlong duration = pulseIn(ECHO, HIGH);\nfloat distance = duration * 0.034 / 2;' }] },
      { id: 'laser-distance', name: 'Laser Distance Sensor', shortName: 'Laser', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Laser', description: 'High-precision laser-based time-of-flight distance sensor for accurate measurements up to 2 meters.', price: '12 Credits', syntax: [{ title: 'VL53L0X Usage', code: '#include <VL53L0X.h>\nVL53L0X sensor;\nsensor.init();\nint distance = sensor.readRangeSingleMillimeters();' }] },
      { id: 'soil-moisture', name: 'Soil Moisture Sensor', shortName: 'Soil', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Soil', description: 'Measures the volumetric water content in soil. A key component in automated irrigation and urban farming projects.', price: '3 Credits', syntax: [{ title: 'Analog Read', code: 'int moisture = analogRead(SOIL_PIN);\n// Higher value = dryer soil\n// Lower value = wetter soil' }] },
      { id: 'gas-sensor', name: 'Gas Sensor (MQ Series)', shortName: 'Gas', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Gas', description: 'MQ series gas detection sensor for monitoring air quality. Can detect CO, methane, smoke, and other gases.', price: '5 Credits', syntax: [{ title: 'Analog Read', code: 'int gasLevel = analogRead(MQ_PIN);\nif (gasLevel > THRESHOLD) {\n  Serial.println("WARNING: Gas detected!");\n}' }] },
      { id: 'combo-sensor', name: 'Combo Sensor (BME/DHT+MQ)', shortName: 'Combo', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Combo', description: 'A combination environmental sensor that measures temperature, humidity, and air quality in a single package.', price: '8 Credits', syntax: [{ title: 'BME280 Read', code: '#include <BME280.h>\nfloat temp = bme.readTemperature();\nfloat humidity = bme.readHumidity();\nfloat pressure = bme.readPressure();' }] },
      { id: 'touch-sensor', name: 'Touch Sensor', shortName: 'Touch', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Touch', description: 'Capacitive touch sensor module for detecting finger touch input. Used in interactive installations.', price: '2 Credits', syntax: [{ title: 'Digital Read', code: 'int touched = digitalRead(TOUCH_PIN);\nif (touched == HIGH) {\n  // Touch detected\n}' }] },
      { id: 'push-button', name: 'Push Button Switch', shortName: 'Button', badge: 'Input', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Button', description: 'A momentary tactile push button switch. The most basic form of digital input for microcontroller projects.', price: '1 Credit', syntax: [{ title: 'With Pull-up', code: 'pinMode(BTN_PIN, INPUT_PULLUP);\nint state = digitalRead(BTN_PIN);\n// LOW = pressed, HIGH = released' }] },
      { id: 'piezo', name: 'Piezoelectric Sensor', shortName: 'Piezo', badge: 'Sensor', color: '#f9e79f', placeholder: 'https://placehold.co/150x150/f9e79f/000000?text=Piezo', description: 'A sensor that generates voltage when pressure or vibration is applied. Used in impact detection and energy harvesting experiments.', price: '3 Credits', syntax: [{ title: 'Knock Detection', code: 'int knock = analogRead(PIEZO_PIN);\nif (knock > THRESHOLD) {\n  Serial.println("Knock detected!");\n}' }] }
    ]
  },
  {
    category: "⚙️ Actuators",
    categoryKey: "Actuators",
    color: '#f1948a',
    items: [
      { id: 'servo', name: 'Micro Servo Motor', shortName: 'Servo', badge: 'Actuator', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=Servo', description: 'A small servo motor (SG90) used for precise angular positioning. Can rotate 0-180 degrees with signal control.', price: '5 Credits', syntax: [{ title: 'Servo Control', code: '#include <Servo.h>\nServo myServo;\nmyServo.attach(9);\nmyServo.write(90); // Move to 90 degrees' }] },
      { id: 'vibration-motor', name: 'Vibration Motor', shortName: 'Vibration', badge: 'Actuator', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=Vibration', description: 'A small coin-type vibration motor for haptic feedback in wearable or interactive projects.', price: '2 Credits', syntax: [{ title: 'Basic Control', code: 'digitalWrite(MOTOR_PIN, HIGH);\ndelay(500);\ndigitalWrite(MOTOR_PIN, LOW);' }] },
      { id: 'water-pump', name: 'Mini Water Pump Motor', shortName: 'Pump', badge: 'Actuator', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=Pump', description: 'A submersible mini water pump for automated irrigation and water circulation systems.', price: '6 Credits', syntax: [{ title: 'Relay Control', code: '// Use relay module for pump control\ndigitalWrite(RELAY_PIN, HIGH); // Pump ON\ndelay(5000);\ndigitalWrite(RELAY_PIN, LOW);  // Pump OFF' }] },
      { id: 'buzzer', name: 'Buzzer', shortName: 'Buzzer', badge: 'Output', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=Buzzer', description: 'A piezo buzzer for generating tones, alarms, and simple melodies in electronics projects.', price: '1 Credit', syntax: [{ title: 'Tone Generation', code: 'tone(BUZZER_PIN, 1000); // 1kHz tone\ndelay(500);\nnoTone(BUZZER_PIN);' }] },
      { id: 'dc-motors', name: 'DC Geared Motors', shortName: 'DC Motor', badge: 'Actuator', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=DC+Motor', description: 'Geared DC motors for mobile robotics. Provide higher torque at lower speeds for wheeled platforms.', price: '8 Credits', syntax: [{ title: 'H-Bridge Control', code: '// Using L298N Motor Driver\ndigitalWrite(IN1, HIGH);\ndigitalWrite(IN2, LOW);\nanalogWrite(ENA, 200); // Speed: 0-255' }] },
      { id: 'motor-driver', name: 'Motor Driver Module', shortName: 'Motor Drv', badge: 'Driver', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=Motor+Drv', description: 'L298N dual H-Bridge motor driver for controlling DC motors and stepper motors from a microcontroller.', price: '7 Credits', syntax: [{ title: 'Dual Motor', code: '// Motor A\ndigitalWrite(IN1, HIGH);\ndigitalWrite(IN2, LOW);\n// Motor B\ndigitalWrite(IN3, LOW);\ndigitalWrite(IN4, HIGH);' }] },
      { id: 'relay', name: 'Relay Module', shortName: 'Relay', badge: 'Switch', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=Relay', description: 'An electromagnetic relay module for switching high-power devices using a low-power signal from your MCU.', price: '4 Credits', syntax: [{ title: 'Toggle Control', code: 'digitalWrite(RELAY_PIN, HIGH); // Relay ON (NO closed)\ndelay(2000);\ndigitalWrite(RELAY_PIN, LOW);  // Relay OFF' }] },
      { id: 'solenoid', name: 'Solenoid Valve', shortName: 'Solenoid', badge: 'Actuator', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=Solenoid', description: 'An electromechanical solenoid valve for controlling water or air flow in automated systems.', price: '8 Credits', syntax: [{ title: 'Control via Relay', code: '// Always use a relay or MOSFET to drive solenoids\ndigitalWrite(RELAY_PIN, HIGH); // Valve OPEN\ndelay(3000);\ndigitalWrite(RELAY_PIN, LOW);  // Valve CLOSED' }] },
      { id: 'fan', name: 'Cooling Fan (5V)', shortName: 'Fan', badge: 'Output', color: '#f1948a', placeholder: 'https://placehold.co/150x150/f1948a/000000?text=Fan', description: 'A small 5V DC cooling fan for thermal management in enclosures and project housings.', price: '3 Credits', syntax: [{ title: 'PWM Speed', code: 'analogWrite(FAN_PIN, 128); // 50% speed\n// 0 = off, 255 = full speed' }] }
    ]
  },
  {
    category: "💡 Indicators & Output Devices",
    categoryKey: "Indicators_&_Output",
    color: '#faddco',
    items: [
      { id: 'leds', name: 'LEDs (Red/Green/Blue/Yellow)', shortName: 'LEDs', badge: 'Indicator', color: '#fce4ec', placeholder: 'https://placehold.co/150x150/faddco/000000?text=LEDs', description: 'Standard through-hole LEDs in multiple colors. The most basic output component for indicating states and signals.', price: '1 Credit / pack', syntax: [{ title: 'Blink LED', code: 'pinMode(LED_PIN, OUTPUT);\ndigitalWrite(LED_PIN, HIGH);\ndelay(1000);\ndigitalWrite(LED_PIN, LOW);' }] },
      { id: 'rgb-leds', name: 'RGB LEDs', shortName: 'RGB LED', badge: 'Indicator', color: '#fce4ec', placeholder: 'https://placehold.co/150x150/faddco/000000?text=RGB+LED', description: 'Common-cathode RGB LEDs for producing any color by mixing red, green, and blue intensities.', price: '2 Credits', syntax: [{ title: 'Color Mixing', code: 'analogWrite(RED_PIN, 255);\nanalogWrite(GREEN_PIN, 128);\nanalogWrite(BLUE_PIN, 0);\n// Result: Orange' }] },
      { id: 'resistors', name: 'Resistor Kit', shortName: 'Resistors', badge: 'Passive', color: '#fce4ec', placeholder: 'https://placehold.co/150x150/faddco/000000?text=Resistors', description: 'Assorted resistor kit with common values (220Ω, 1kΩ, 10kΩ, etc). Essential for current limiting and voltage dividers.', price: '2 Credits', syntax: [{ title: 'Ohms Law', code: '// V = I * R\n// LED with 5V source:\n// R = (5V - 2V) / 0.02A = 150Ω\n// Use 220Ω for safety' }] },
      { id: 'potentiometers', name: 'Potentiometers', shortName: 'Pots', badge: 'Input', color: '#fce4ec', placeholder: 'https://placehold.co/150x150/faddco/000000?text=Pots', description: 'Variable resistors (10kΩ) for creating analog user inputs like volume knobs and brightness dimmers.', price: '2 Credits', syntax: [{ title: 'Analog Read', code: 'int val = analogRead(POT_PIN);\n// Returns 0-1023\nint mapped = map(val, 0, 1023, 0, 255);' }] },
      { id: 'oled-lcd', name: 'Small OLED / LCD (I2C)', shortName: 'Display', badge: 'Display', color: '#fce4ec', placeholder: 'https://placehold.co/150x150/faddco/000000?text=Display', description: 'A 0.96" OLED display module for showing text, graphics, and sensor data via I2C communication.', price: '8 Credits', syntax: [{ title: 'OLED Hello', code: '#include <SSD1306.h>\ndisplay.init();\ndisplay.drawString(0, 0, "Hello Solarpunk!");\ndisplay.display();' }] }
    ]
  },
  {
    category: "🔋 Power System",
    categoryKey: "Power_System",
    color: '#d7bde2',
    items: [
      { id: '9v-battery', name: '9V Batteries', shortName: '9V', badge: 'Power', color: '#d7bde2', placeholder: 'https://placehold.co/150x150/d7bde2/000000?text=9V+Battery', description: 'Standard 9V alkaline batteries for portable project power supply.', price: '2 Credits', syntax: [{ title: 'Voltage Note', code: '// 9V can power Arduino via barrel jack\n// Use voltage regulator for 5V/3.3V components' }] },
      { id: '18650', name: '18650 Li-ion Cells', shortName: '18650', badge: 'Power', color: '#d7bde2', placeholder: 'https://placehold.co/150x150/d7bde2/000000?text=18650s', description: 'Rechargeable lithium-ion cells (3.7V nominal). High energy density, ideal for battery packs in robotics.', price: '6 Credits', syntax: [{ title: 'Safety Warning', code: '// CAUTION: Li-ion cells require:\n// - Proper charging circuit (TP4056)\n// - Over-discharge protection\n// - Short circuit protection' }] },
      { id: 'battery-holders', name: 'Battery Holders', shortName: 'Holders', badge: 'Accessory', color: '#d7bde2', placeholder: 'https://placehold.co/150x150/d7bde2/000000?text=Holders', description: 'Various battery holder formats for 18650, AA, and 9V batteries with wire leads.', price: '2 Credits', syntax: [{ title: 'Series Connection', code: '// 2x 18650 in series = ~7.4V\n// 3x AA in series = ~4.5V\n// Use holder with switch for convenience' }] },
      { id: 'power-banks', name: 'Power Banks', shortName: 'Power Bank', badge: 'Power', color: '#d7bde2', placeholder: 'https://placehold.co/150x150/d7bde2/000000?text=Power+Bank', description: 'USB power banks for providing stable 5V power to microcontrollers and peripherals in the field.', price: '10 Credits', syntax: [{ title: 'Usage', code: '// Connect via USB to MCU\n// Provides stable 5V at 1-2A\n// Great for portable demonstrations' }] },
      { id: 'buck-converter', name: 'Step-Down Converter (Buck)', shortName: 'Buck', badge: 'Regulator', color: '#d7bde2', placeholder: 'https://placehold.co/150x150/d7bde2/000000?text=Buck+Mod', description: 'A DC-DC step-down (buck) converter for efficiently reducing voltage. Critical when mixing different voltage components.', price: '4 Credits', syntax: [{ title: 'Adjustment', code: '// Turn potentiometer to set output voltage\n// Measure with multimeter before connecting load\n// Input: 7-35V -> Output: 1.25-30V' }] },
      { id: 'voltage-reg', name: 'Voltage Regulator Module', shortName: 'V Reg', badge: 'Regulator', color: '#d7bde2', placeholder: 'https://placehold.co/150x150/d7bde2/000000?text=V+Reg', description: 'Linear voltage regulator (LM7805) for providing stable 5V output from higher voltage sources.', price: '2 Credits', syntax: [{ title: 'LM7805 Wiring', code: '// Pin 1 (IN):  Connect to V+ (7-35V)\n// Pin 2 (GND): Connect to Ground\n// Pin 3 (OUT): Regulated 5V output' }] },
      { id: 'solar-panels', name: 'Small Solar Panels', shortName: 'Solar', badge: 'Power', color: '#d7bde2', placeholder: 'https://placehold.co/150x150/d7bde2/000000?text=Solar', description: 'Miniature solar panels (5V / 6V) for sustainable energy harvesting in Solarpunk field deployments.', price: '8 Credits', syntax: [{ title: 'Solar Setup', code: '// Solar Panel -> Charge Controller -> Battery\n// Battery -> Buck Converter -> MCU\n// Add diode to prevent backflow' }] }
    ]
  }
];

type SyntaxBlock = { title: string; code: string };
type HardwareItem = {
    id: string; name: string; shortName: string; badge: string;
    color: string; placeholder: string; description: string;
    price: string; syntax: SyntaxBlock[];
};

// Detail View Component
function DetailView({ item, categoryIcon, categoryName, onBack }: { item: HardwareItem, categoryIcon: string, categoryName: string, onBack: () => void }) {
    return (
        <div>
            {/* Back Button */}
            <button
                onClick={onBack}
                className="pill-back-btn"
                style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none', marginBottom: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
                ← back to digest
            </button>

            <div style={{ backgroundColor: 'white', border: '3px solid black', borderRadius: '24px', boxShadow: '12px 12px 0 0 #000', overflow: 'hidden' }}>
                {/* Header Bar */}
                <div style={{ padding: '32px', borderBottom: '3px solid black', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', backgroundColor: item.color }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '0.875rem', opacity: 0.8, marginBottom: '8px' }}>
                            <span>{categoryIcon}</span>
                            <span>{categoryName}</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', margin: 0 }}>{item.name}</h1>
                    </div>
                    <div style={{ backgroundColor: 'white', border: '3px solid black', borderRadius: '12px', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '4px 4px 0 0 #000', fontWeight: 'bold', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
                        💰 {item.price}
                    </div>
                </div>

                <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
                    {/* Left Column: Image & Quick Stats */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ aspectRatio: '1', backgroundColor: '#f4f4f5', border: '3px solid black', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
                            <img src={item.placeholder} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px' }} />
                        </div>

                        <div style={{ backgroundColor: '#ffe1a8', border: '3px solid black', borderRadius: '12px', padding: '20px', boxShadow: '4px 4px 0 0 #000' }}>
                            <h3 style={{ fontWeight: 900, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginTop: 0 }}>
                                ⚡ Quick Specs
                            </h3>
                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.2)', paddingBottom: '4px', fontWeight: 'bold', fontSize: '0.875rem' }}>
                                    <span>Classification</span><span>{item.badge}</span>
                                </li>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.2)', paddingBottom: '4px', fontWeight: 'bold', fontSize: '0.875rem' }}>
                                    <span>Reusability</span><span>{enrichment[item.id]?.reusability ?? 'High'}</span>
                                </li>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.2)', paddingBottom: '4px', fontWeight: 'bold', fontSize: '0.875rem' }}>
                                    <span>Difficulty</span><span>{enrichment[item.id]?.difficulty ?? 'Beginner'}</span>
                                </li>
                                {enrichment[item.id]?.operatingVoltage && <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.2)', paddingBottom: '4px', fontWeight: 'bold', fontSize: '0.875rem' }}>
                                    <span>Voltage</span><span>{enrichment[item.id].operatingVoltage}</span>
                                </li>}
                                {enrichment[item.id]?.communication && <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.2)', paddingBottom: '4px', fontWeight: 'bold', fontSize: '0.875rem' }}>
                                    <span>Protocol</span><span>{enrichment[item.id].communication}</span>
                                </li>}
                            </ul>
                        </div>

                        {/* Compatible With */}
                        {enrichment[item.id]?.compatibleWith && (
                            <div style={{ backgroundColor: '#e8f5e9', border: '3px solid black', borderRadius: '12px', padding: '20px', boxShadow: '4px 4px 0 0 #000' }}>
                                <h3 style={{ fontWeight: 900, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginTop: 0 }}>
                                    🔗 Works With
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {enrichment[item.id].compatibleWith.map((c, i) => (
                                        <span key={i} style={{ backgroundColor: 'white', border: '2px solid black', borderRadius: '20px', padding: '4px 10px', fontSize: '0.75rem', fontWeight: 'bold' }}>{c}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Description, Specs, Tips, Warnings, Syntax */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {/* Equipment Log */}
                        <section>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px', marginTop: 0 }}>📋 Equipment Log</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333', margin: 0 }}>{item.description}</p>
                        </section>

                        {/* Technical Specs Table */}
                        {enrichment[item.id]?.specs && (
                            <section>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>📐 Technical Specifications</h2>
                                <div style={{ border: '3px solid black', borderRadius: '12px', overflow: 'hidden', boxShadow: '4px 4px 0 0 #000' }}>
                                    {Object.entries(enrichment[item.id].specs).map(([key, value], idx) => (
                                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', fontWeight: 'bold', fontSize: '0.875rem', borderBottom: idx < Object.entries(enrichment[item.id].specs).length - 1 ? '1px solid rgba(0,0,0,0.15)' : 'none', backgroundColor: idx % 2 === 0 ? 'white' : '#f8f8f8' }}>
                                            <span style={{ color: '#666' }}>{key}</span>
                                            <span style={{ textAlign: 'right' }}>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Use Cases */}
                        {enrichment[item.id]?.useCases && (
                            <section>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>🌍 Real-World Use Cases</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {enrichment[item.id].useCases.map((uc, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 14px', backgroundColor: 'white', border: '2px solid black', borderRadius: '10px', fontSize: '0.95rem', fontWeight: 'bold' }}>
                                            <span style={{ flexShrink: 0 }}>→</span>
                                            <span>{uc}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Pro Tips */}
                        {enrichment[item.id]?.tips && (
                            <section>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>💡 Pro Tips</h2>
                                <div style={{ backgroundColor: '#e8f5e9', border: '3px solid black', borderRadius: '12px', padding: '20px', boxShadow: '4px 4px 0 0 #000' }}>
                                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {enrichment[item.id].tips.map((tip, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                                <span style={{ flexShrink: 0, fontWeight: 900 }}>✓</span>
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}

                        {/* Warnings */}
                        {enrichment[item.id]?.warnings && (
                            <section>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>⚠️ Warnings & Precautions</h2>
                                <div style={{ backgroundColor: '#fff3e0', border: '3px solid black', borderRadius: '12px', padding: '20px', boxShadow: '4px 4px 0 0 #000' }}>
                                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {enrichment[item.id].warnings.map((warn, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', lineHeight: 1.5, color: '#b71c1c' }}>
                                                <span style={{ flexShrink: 0, fontWeight: 900 }}>⚡</span>
                                                <span>{warn}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}

                        {/* Syntax */}
                        <section>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
                                💻 Necessary Syntax
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                {item.syntax.map((block, idx) => (
                                    <div key={idx} style={{ borderRadius: '12px', overflow: 'hidden', border: '3px solid black', boxShadow: '6px 6px 0 0 #000' }}>
                                        <div style={{ backgroundColor: '#e0f7f6', borderBottom: '3px solid black', padding: '8px 16px', fontWeight: 'bold', fontSize: '0.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span>{block.title}</span>
                                            <div style={{ display: 'flex', gap: '6px' }}>
                                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid black', backgroundColor: '#f87171' }}></div>
                                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid black', backgroundColor: '#facc15' }}></div>
                                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid black', backgroundColor: '#4ade80' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ backgroundColor: '#1e1e2e', padding: '16px', overflowX: 'auto' }}>
                                            <pre style={{ color: '#a6accd', fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                                <code>{block.code}</code>
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function HandbookDigestPage() {
    const [selectedItem, setSelectedItem] = useState<{ item: HardwareItem, categoryIcon: string, categoryName: string } | null>(null);

    return (
        <div>
            {/* Hero Section */}
            <div className="hero">
                <div style={{ textAlign: "center", marginBottom: "40px", position: "relative" }}>
                    <Link
                        href="/"
                        className="pill-back-btn"
                    >
                        ← back to home
                    </Link>

                    <h1>handbook digest</h1>
                    <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#555', maxWidth: '600px', marginInline: 'auto' }}>
                        Your ultimate component guide for electronics, robotics, and solarpunk prototyping.
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <div className="general-info-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                {!selectedItem ? (
                    /* --- LIST VIEW --- */
                    <div>
                        {hardwareData.map((categoryData, i) => (
                            <div key={i} style={{ marginBottom: '60px' }}>
                                {/* Section Header */}
                                <h2 style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 900,
                                    letterSpacing: '-0.5px',
                                    marginBottom: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    color: 'black'
                                }}>
                                    <span style={{ fontSize: '1rem', lineHeight: 1 }}>●</span>
                                    <span>{categoryData.category.replace(/ /g, '_')}</span>
                                </h2>

                                {/* Equipment Grid */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '24px' }}>
                                    {categoryData.items.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => setSelectedItem({ item, categoryIcon: categoryData.category.split(' ')[0], categoryName: categoryData.categoryKey.replace(/_/g, ' ') })}
                                            className="info-block"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                padding: '16px',
                                                cursor: 'pointer',
                                                marginBottom: 0
                                            }}
                                        >
                                            {/* Colored Square Box */}
                                            <div style={{
                                                width: '96px',
                                                height: '96px',
                                                flexShrink: 0,
                                                borderRadius: '12px',
                                                border: '3px solid black',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '0.875rem',
                                                textAlign: 'center',
                                                padding: '8px',
                                                backgroundColor: item.color
                                            }}>
                                                {item.shortName}
                                            </div>

                                            {/* Text Content */}
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', flexGrow: 1 }}>
                                                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, lineHeight: 1.2, margin: 0 }}>
                                                    {item.name}
                                                </h3>
                                                <span style={{
                                                    background: item.color,
                                                    padding: '4px 12px',
                                                    borderRadius: '20px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 'bold',
                                                    border: '1px solid black',
                                                    display: 'inline-block'
                                                }}>
                                                    {item.badge}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Section Divider */}
                                <div style={{ width: '100%', borderBottom: '3px solid black', marginTop: '60px', opacity: 0.5 }}></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* --- DETAIL VIEW --- */
                    <DetailView
                        item={selectedItem.item}
                        categoryIcon={selectedItem.categoryIcon}
                        categoryName={selectedItem.categoryName}
                        onBack={() => setSelectedItem(null)}
                    />
                )}
            </div>
        </div>
    );
}
