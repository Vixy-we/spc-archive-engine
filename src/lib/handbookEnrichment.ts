// Enrichment data keyed by item ID — merged at render time in DetailView
export type EnrichmentData = {
    oneLiner: string;
    specs: Record<string, string>;
    useCases: string[];
    tips: string[];
    warnings: string[];
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    reusability: 'High' | 'Medium' | 'Low' | 'Consumable';
    compatibleWith: string[];
    operatingVoltage?: string;
    communication?: string;
};

export const enrichment: Record<string, EnrichmentData> = {
    'arduino-uno': {
        oneLiner: 'The classic beginner microcontroller — reliable, well-documented, and endlessly versatile.',
        specs: { 'MCU': 'ATmega328P', 'Clock': '16 MHz', 'Flash': '32 KB', 'SRAM': '2 KB', 'Digital I/O': '14 pins (6 PWM)', 'Analog In': '6 pins', 'Operating Voltage': '5V', 'Input Voltage': '7–12V', 'Dimensions': '68.6 × 53.4 mm' },
        useCases: ['LED blink circuits & basic I/O', 'Sensor data logging stations', 'Servo and motor control for small robots', 'Automated plant watering systems', 'Interactive art installations'],
        tips: ['Use the built-in LED on pin 13 for quick debugging', 'Always connect a 220Ω resistor in series with external LEDs', 'Use Serial.println() to monitor sensor values in real-time', 'Prefer external power supply for motor projects to avoid USB current limits'],
        warnings: ['Max current per I/O pin is 20mA — exceeding this will damage the board', 'Do not supply more than 5V to any I/O pin', 'Disconnect power before rewiring to prevent short circuits'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Breadboards', 'Jumper Wires', 'USB Programming Cables', 'All sensors & actuators in this digest'],
        operatingVoltage: '5V', communication: 'UART, SPI, I2C'
    },
    'esp32': {
        oneLiner: 'A dual-core powerhouse with built-in Wi-Fi and Bluetooth for IoT projects.',
        specs: { 'MCU': 'Xtensa Dual-Core 32-bit LX6', 'Clock': '240 MHz', 'Flash': '4 MB', 'SRAM': '520 KB', 'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'v4.2 BR/EDR + BLE', 'GPIO': '34 pins', 'ADC': '18 channels (12-bit)', 'Operating Voltage': '3.3V', 'Dimensions': '55 × 28 mm' },
        useCases: ['IoT environmental monitoring dashboards', 'Wireless sensor mesh networks', 'Smart home automation controllers', 'Solar panel output tracking over Wi-Fi', 'Bluetooth-enabled wearable prototypes'],
        tips: ['GPIO 34-39 are input-only — cannot be used as output', 'Use deep sleep mode for battery-powered field deployments', 'Flash at 115200 baud for reliable uploads', 'The onboard LED is typically on GPIO 2'],
        warnings: ['Operates at 3.3V logic — do NOT connect 5V signals directly', 'Some GPIOs have boot-strapping functions — avoid GPIO 0, 2, 12, 15 for general I/O', 'Wi-Fi and Bluetooth simultaneous use increases current draw significantly'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['Breadboards', 'Jumper Wires', 'All I2C/SPI sensors', 'OLED Displays'],
        operatingVoltage: '3.3V', communication: 'Wi-Fi, Bluetooth, UART, SPI, I2C'
    },
    'breadboards': {
        oneLiner: 'Solderless prototyping boards — plug in components and wire up circuits in seconds.',
        specs: { 'Type': 'Solderless', 'Holes': '830 (full-size) / 400 (half)', 'Pitch': '2.54mm', 'Max Current': '1A per rail', 'Material': 'ABS Plastic + Nickel-plated clips' },
        useCases: ['Rapid circuit prototyping', 'Testing sensor-to-MCU wiring before soldering', 'Teaching electronics fundamentals', 'Temporary setups for demonstrations'],
        tips: ['Keep power rails tidy — red for VCC, blue/black for GND', 'Use short jumper wires to reduce electrical noise', 'The center gap separates the two halves — components straddle it', 'Clean contacts with isopropyl alcohol if connections become unreliable'],
        warnings: ['Not suitable for high-current circuits (motors, relays)', 'Loose connections can cause intermittent failures', 'Do not use with mains voltage (120V/220V)'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Jumper Wires', 'Arduino Uno R3', 'ESP32', 'All DIP-package components']
    },
    'jumpers': {
        oneLiner: 'Color-coded connector wires for quick, tool-free breadboard and header connections.',
        specs: { 'Types': 'Male-Male, Male-Female, Female-Female', 'Length': '10cm / 20cm / 30cm', 'Wire Gauge': '22 AWG', 'Connector': 'DuPont 2.54mm' },
        useCases: ['Breadboard-to-breadboard connections', 'MCU pin header to sensor module wiring', 'Quick prototype wiring changes', 'Connecting GPIO headers to external circuits'],
        tips: ['Use consistent color coding to simplify debugging', 'M-F wires are best for connecting to pin headers on sensor modules', 'Bundle related wires together with zip ties for clean layouts'],
        warnings: ['Verify polarity before powering on — reversed power wires can destroy components', 'Inspect for frayed or broken connectors periodically'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Breadboards', 'Arduino Uno R3', 'ESP32', 'All sensor and actuator modules']
    },
    'usb-cables': {
        oneLiner: 'Essential data and power cables for uploading code and serial debugging.',
        specs: { 'Connector A': 'USB Type-A', 'Connector B': 'Type-B / Micro-B / Type-C', 'Data Rate': 'USB 2.0 (480 Mbps)', 'Power': '5V @ 500mA (USB 2.0)' },
        useCases: ['Uploading compiled sketches to MCUs', 'Serial monitor debugging via UART-over-USB', 'Powering low-current prototype circuits from laptop/PC'],
        tips: ['Keep cable length under 1m for reliable serial communication', 'Some cheap cables are charge-only — ensure yours supports data transfer', 'Use the correct cable type: Type-B for Arduino Uno, Micro-B for many clones'],
        warnings: ['Do not draw more than 500mA from a USB 2.0 port without a powered hub', 'Bent or damaged connectors can cause intermittent upload failures'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Any USB-powered development board']
    },
    'power-supply': {
        oneLiner: 'Breadboard-mountable regulated power module with selectable 3.3V or 5V output.',
        specs: { 'Output': '3.3V / 5V selectable', 'Input': 'DC barrel jack or USB', 'Max Current': '700mA', 'Mounting': 'Direct breadboard plug-in' },
        useCases: ['Powering breadboard circuits independently from MCU', 'Providing stable voltage for sensitive analog sensors', 'Dual-voltage projects mixing 3.3V and 5V components'],
        tips: ['Set voltage BEFORE connecting any components', 'Use the USB input for convenience during development', 'Check current requirements — some sensor arrays may exceed 700mA'],
        warnings: ['Double-check voltage switch position to avoid frying 3.3V components with 5V', 'Ensure polarity of barrel jack matches your power adapter'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Breadboards', 'All sensors and actuators in this digest']
    },
    'dc-barrel': {
        oneLiner: 'Standard barrel jack connectors for plugging in wall adapters and external power.',
        specs: { 'Inner Diameter': '2.1mm', 'Outer Diameter': '5.5mm', 'Voltage Rating': 'Up to 24V', 'Current Rating': 'Up to 5A' },
        useCases: ['Connecting wall adapters to development boards', 'Powering enclosure-mounted projects', 'Input connector for custom power distribution boards'],
        tips: ['Center-positive is the most common polarity — always verify', 'Use with a voltage regulator for clean output'],
        warnings: ['Never assume polarity — check with a multimeter first', 'Mismatched polarity will damage unprotected boards instantly'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'Breadboard Power Supply Module', 'Voltage Regulators']
    },
    'screw-terminals': {
        oneLiner: 'Secure, screw-down wire connectors for permanent or high-vibration installations.',
        specs: { 'Pitch': '5.08mm / 3.81mm', 'Wire Range': '14–22 AWG', 'Voltage Rating': '300V', 'Current Rating': '' + '10A' },
        useCases: ['Connecting power wiring to PCBs', 'Secure motor and relay connections', 'Field-deployment junction points for sensor networks'],
        tips: ['Strip just enough insulation (~5mm) — too much exposed wire risks shorts', 'Use ferrule crimp connectors for stranded wire for best reliability'],
        warnings: ['Overtightening screws can damage the terminal block or break thin wires', 'Vibration can loosen connections over time — use lock washers in mobile robots'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Motor Driver Modules', 'Relay Modules', 'Power Supply Modules']
    },
    'ldr': {
        oneLiner: 'A simple analog light sensor — resistance drops as brightness increases.',
        specs: { 'Type': 'Analog', 'Output': '0–1023 (10-bit ADC)', 'Response Time': '~20ms', 'Dark Resistance': '~1MΩ', 'Light Resistance': '~10–20kΩ' },
        useCases: ['Automatic streetlight controllers', 'Solar panel sun-tracking systems', 'Day/night mode switching for IoT devices', 'Light-reactive art installations'],
        tips: ['Pair with a 10kΩ resistor as a voltage divider for stable readings', 'Cover with a small tube to narrow the field of view for directional sensing', 'Calibrate thresholds based on your specific lighting environment'],
        warnings: ['LDRs are not precision instruments — use BH1750 for accurate lux measurements', 'Response time varies with temperature'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Breadboards', 'Resistor Kit']
    },
    'light-intensity': {
        oneLiner: 'Digital lux sensor delivering precise illuminance readings over I2C.',
        specs: { 'Model': 'BH1750', 'Interface': 'I2C', 'Range': '1–65535 lux', 'Resolution': '1 lux', 'Operating Voltage': '3.3V–5V' },
        useCases: ['Precise indoor grow-light monitoring', 'Workplace illumination compliance testing', 'Weather station light level logging', 'Display brightness auto-adjustment'],
        tips: ['Use the high-resolution mode for indoor measurements', 'Place the sensor facing upward for ambient light readings', 'I2C address is 0x23 (ADDR pin LOW) or 0x5C (ADDR pin HIGH)'],
        warnings: ['Direct sunlight can saturate the sensor at max range', 'Keep I2C wires short (<30cm) to prevent communication errors'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'OLED Displays'], communication: 'I2C'
    },
    'pir': {
        oneLiner: 'Passive infrared sensor that detects human and animal movement up to 7 meters.',
        specs: { 'Model': 'HC-SR501', 'Detection Range': '3–7m (adjustable)', 'Detection Angle': '~120°', 'Output': 'Digital HIGH/LOW', 'Warm-up Time': '~60 seconds', 'Operating Voltage': '4.5V–20V' },
        useCases: ['Intruder detection alarm systems', 'Automatic room lighting activation', 'Occupancy counting for energy management', 'Wildlife camera traps'],
        tips: ['Allow 60 seconds warm-up before relying on readings', 'Adjust the sensitivity and delay potentiometers on the module', 'Mount at waist height for optimal human detection', 'Use a Fresnel lens (usually included) to focus detection zones'],
        warnings: ['PIR detects movement, not presence — stationary objects will not trigger it', 'Air currents from HVAC systems can cause false triggers', 'Not suitable for outdoor use without weatherproofing'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Relay Modules', 'Buzzer']
    },
    'ir-proximity': {
        oneLiner: 'Short-range infrared obstacle detector — perfect for line-following robots.',
        specs: { 'Detection Range': '2–30cm', 'Output': 'Digital HIGH/LOW', 'Wavelength': '~940nm IR', 'Operating Voltage': '3.3V–5V' },
        useCases: ['Line-following robot navigation', 'Object detection on conveyor belts', 'Touchless gesture switching', 'Edge detection for tabletop robots'],
        tips: ['Adjust the onboard potentiometer to set detection distance', 'Works poorly with dark or transparent objects', 'Pair two IR sensors for reliable line-following'],
        warnings: ['Sunlight contains strong IR which causes massive interference outdoors', 'Not suitable for precision distance measurement — use ultrasonic instead'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'DC Geared Motors', 'Motor Driver Module']
    },
    'ultrasonic': {
        oneLiner: 'Sonar-based distance sensor measuring 2 cm to 4 m with ~3 mm resolution.',
        specs: { 'Model': 'HC-SR04', 'Range': '2cm–400cm', 'Resolution': '~3mm', 'Trigger Pulse': '10μs', 'Operating Voltage': '5V', 'Operating Current': '15mA' },
        useCases: ['Obstacle avoidance in mobile robots', 'Parking distance indicator', 'Water tank level monitoring', 'Room mapping and SLAM experiments'],
        tips: ['Mount flat against surfaces — angled mounting causes inaccurate readings', 'Take multiple readings and average them to reduce noise', 'Minimum range is ~2cm — objects closer will not register', 'Use NewPing library for cleaner code and better reliability'],
        warnings: ['Sound waves reflect poorly off soft/fabric surfaces', 'Cross-talk can occur if multiple sensors fire simultaneously — stagger triggers'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Servo Motors', 'OLED Displays'], operatingVoltage: '5V'
    },
    'laser-distance': {
        oneLiner: 'Time-of-Flight laser ranging sensor for high-precision distance measurements.',
        specs: { 'Model': 'VL53L0X', 'Interface': 'I2C', 'Range': '30mm–2000mm', 'Accuracy': '±3%', 'Operating Voltage': '2.6V–5.5V', 'Measurement Time': '~33ms' },
        useCases: ['High-precision robotics positioning', 'Gesture-based distance interfaces', 'Drone altitude hold systems', '3D scanning rigs'],
        tips: ['Use long-range mode for distances beyond 1.2m', 'Shield from direct sunlight for outdoor use', 'Multiple sensors require XSHUT pin management for I2C address reassignment'],
        warnings: ['Laser light — avoid pointing directly into eyes', 'Reflective surfaces may cause incorrect readings', 'Glass surfaces can interfere with Time-of-Flight measurements'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['ESP32', 'Arduino Uno R3', 'Servo Motors'], communication: 'I2C'
    },
    'soil-moisture': {
        oneLiner: 'Detects soil water content — the backbone of any automated watering system.',
        specs: { 'Type': 'Resistive / Capacitive', 'Output': 'Analog (0–1023)', 'Probe Length': '~60mm', 'Operating Voltage': '3.3V–5V' },
        useCases: ['Automated garden irrigation systems', 'Urban farming soil monitoring', 'Greenhouse humidity management', 'Science fair plant growth experiments'],
        tips: ['Prefer capacitive sensors over resistive — they last much longer', 'Waterproof the electronics portion if deployed outdoors', 'Calibrate dry/wet thresholds with your specific soil type', 'Power the sensor only during readings to extend probe life'],
        warnings: ['Resistive probes corrode quickly in wet soil — replace frequently', 'Do not submerge the electronics module in water'],
        difficulty: 'Beginner', reusability: 'Medium',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Relay Modules', 'Mini Water Pump Motor']
    },
    'gas-sensor': {
        oneLiner: 'MQ-series metal-oxide sensors for detecting smoke, LPG, CO, and air quality.',
        specs: { 'Series': 'MQ-2 / MQ-5 / MQ-7 / MQ-135', 'Output': 'Analog + Digital (threshold)', 'Warm-up Time': '~24 hours (first use), ~2 min (subsequent)', 'Operating Voltage': '5V', 'Heater Current': '~150mA' },
        useCases: ['Indoor air quality monitoring stations', 'Kitchen gas leak alarms', 'Smoke detection in maker spaces', 'Environmental pollution tracking'],
        tips: ['Each MQ variant detects different gases — choose the right one', 'Allow proper warm-up time for accurate readings', 'Calibrate in clean air to establish a baseline', 'Use in well-ventilated areas during testing'],
        warnings: ['The sensor heater gets HOT (~300°C internally) — do not touch the mesh', 'High current draw — do not power from MCU pins; use external supply', 'Not a certified safety device — do not rely on it as a sole gas alarm'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Buzzer', 'OLED Displays']
    },
    'combo-sensor': {
        oneLiner: 'All-in-one environmental module measuring temperature, humidity, and pressure.',
        specs: { 'Models': 'BME280 / DHT22 + MQ-135', 'Temperature': '-40°C to +85°C (±0.5°C)', 'Humidity': '0–100% RH (±2%)', 'Pressure': '300–1100 hPa', 'Interface': 'I2C / SPI' },
        useCases: ['Full environmental monitoring stations', 'Indoor climate control feedback loops', 'Weather prediction using pressure trends', 'Data logging for scientific research'],
        tips: ['BME280 is far more precise than DHT sensors', 'Place away from heat sources for accurate temperature', 'Log data over time to identify patterns and trends', 'Use altitude calculation from pressure data: altitude = 44330 × (1 - (P/P0)^0.1903)'],
        warnings: ['Self-heating from continuous reads can skew temperature — add delays between reads', 'Solder joints on these tiny modules can be fragile'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['ESP32', 'Arduino Uno R3', 'OLED Displays', 'Small Solar Panels'], communication: 'I2C, SPI'
    },
    'touch-sensor': {
        oneLiner: 'Capacitive touch module — tap to toggle, works through thin non-metal surfaces.',
        specs: { 'Type': 'Capacitive (TTP223)', 'Output': 'Digital HIGH/LOW', 'Response Time': '~60ms', 'Operating Voltage': '2V–5.5V', 'Current': '<8μA' },
        useCases: ['Touch-activated lamp switches', 'Interactive museum exhibits', 'Custom game controllers', 'Proximity-triggered installations'],
        tips: ['Can detect touch through thin non-metallic materials (wood, acrylic)', 'Solder a wire to the sensor pad and attach to any conductive surface', 'Toggle vs momentary mode selectable via jumper on module'],
        warnings: ['Electromagnetic interference can cause false triggers', 'Metallic enclosures may require careful grounding'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'LEDs', 'Buzzer']
    },
    'push-button': {
        oneLiner: 'Tactile momentary switch — the simplest way to add user input to any circuit.',
        specs: { 'Type': 'Momentary tactile (6×6mm)', 'Contact': 'Normally Open (NO)', 'Bounce Time': '~5ms', 'Lifespan': '~100,000 cycles', 'Operating Force': '~1.6N' },
        useCases: ['User input for menu navigation', 'Emergency stop functionality', 'Mode selection in multi-function devices', 'Reset switches for embedded systems'],
        tips: ['Always use INPUT_PULLUP or an external pull-down resistor', 'Implement software debouncing (10–50ms delay after first trigger)', 'Connect one leg to GND and the other to a GPIO for simplest wiring', 'Use interrupts for time-critical button responses'],
        warnings: ['Button bounce can cause multiple false triggers — always debounce', 'Not rated for high-voltage or high-current switching'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Breadboards', 'Resistor Kit']
    },
    'piezo': {
        oneLiner: 'Vibration-to-voltage transducer — detects knocks, taps, and mechanical impacts.',
        specs: { 'Type': 'Piezoelectric disc', 'Output': 'Analog voltage (0–5V)', 'Sensitivity': 'Varies with force', 'Diameter': '~20–35mm', 'Resonant Frequency': '~4.6 kHz' },
        useCases: ['Knock detection for secret door locks', 'Vibration monitoring on machinery', 'Energy harvesting experiments', 'DIY electronic drum pads'],
        tips: ['Add a 1MΩ resistor in parallel for voltage clamping', 'Use analogRead with a threshold to detect knocks reliably', 'Tape to a surface firmly for best vibration coupling', 'Can also be used as a crude buzzer/speaker in reverse'],
        warnings: ['Can generate high voltage spikes — add a Zener diode for MCU protection', 'Fragile — handle the disc carefully to avoid cracking'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Breadboards', 'Resistor Kit']
    },
    'servo': {
        oneLiner: 'Lightweight 180° micro servo — ideal for robotic arms, pan-tilt, and door locks.',
        specs: { 'Model': 'SG90', 'Torque': '1.8 kg·cm @ 4.8V', 'Speed': '0.1 sec/60° @ 4.8V', 'Rotation': '0°–180°', 'Signal': 'PWM (50Hz, 1–2ms pulse)', 'Operating Voltage': '4.8V–6V', 'Weight': '9g' },
        useCases: ['Robotic arm joint articulation', 'Camera pan/tilt mechanisms', 'Door lock actuators', 'Ultrasonic sensor sweep platforms', 'Solar panel angle adjustment'],
        tips: ['Use the Servo library — it handles PWM timing automatically', 'Power from a separate supply when using multiple servos', 'Add a capacitor (100–470μF) near the servo to reduce power rail noise', 'Avoid commanding positions faster than the servo can physically reach'],
        warnings: ['Stalling (forcing past mechanical limits) will draw excessive current and overheat', 'Do not power more than 1–2 servos from Arduino 5V pin — use external supply', 'The gear train is plastic — avoid high-impact loads'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Ultrasonic Distance Sensor', 'Laser Distance Sensor']
    },
    'vibration-motor': {
        oneLiner: 'Tiny coin-type motor providing haptic feedback for wearables and alerts.',
        specs: { 'Type': 'ERM (coin/disc)', 'Voltage': '3V–5V', 'Current': '~80–100mA', 'Diameter': '10mm', 'Vibration Speed': '~12000 RPM' },
        useCases: ['Haptic feedback in wearable devices', 'Alert notifications in silent mode devices', 'Tactile response for custom game controllers'],
        tips: ['Drive with a transistor (NPN 2N2222) — MCU pins alone cannot supply enough current', 'Use PWM to control vibration intensity', 'Add a flyback diode (1N4001) across motor terminals'],
        warnings: ['Will burn out MCU pins if connected directly due to high current draw', 'Continuous operation generates heat in the motor'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Resistor Kit', 'Push Button Switch']
    },
    'water-pump': {
        oneLiner: 'Submersible mini pump for automated irrigation, fountains, and hydroponics.',
        specs: { 'Type': 'Submersible centrifugal', 'Voltage': '3V–6V DC', 'Flow Rate': '~120 L/hr', 'Max Lift': '~40–110cm', 'Current': '~130–220mA' },
        useCases: ['Automated plant watering systems', 'Aquarium water circulation', 'Small fountain projects', 'Hydroponics nutrient delivery'],
        tips: ['Always use a relay or MOSFET to switch — never drive directly from MCU', 'Prime the pump before first use to remove air bubbles', 'Add a check valve to prevent backflow when pump stops', 'Use silicone tubing for food-safe / plant-safe applications'],
        warnings: ['Run dry operation will burn out the motor quickly', 'Do not use with hot liquids or corrosive chemicals', 'Waterproof the electrical connections if deployed outdoors'],
        difficulty: 'Intermediate', reusability: 'Medium',
        compatibleWith: ['Relay Module', 'Soil Moisture Sensor', 'Arduino Uno R3', 'ESP32']
    },
    'buzzer': {
        oneLiner: 'Piezo sound element for alarms, beeps, and simple melody playback.',
        specs: { 'Type': 'Piezo (active / passive)', 'Frequency': '2–5 kHz (active) / variable (passive)', 'Sound Level': '~85 dB @ 10cm', 'Operating Voltage': '3.3V–5V', 'Current': '~30mA' },
        useCases: ['Alarm and alert systems', 'Musical note generation and melodies', 'User feedback beeps in embedded UIs', 'Timer completion indicators'],
        tips: ['Active buzzers play a fixed tone — just apply voltage', 'Passive buzzers require a PWM signal — use tone() for melodies', 'Add a small resistor (100Ω) to reduce volume if too loud', 'Use noTone() to properly silence a passive buzzer'],
        warnings: ['Continuous buzzing at close range can be irritating — add user controls', 'Do not exceed rated voltage or the piezo element may crack'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'PIR Motion Sensor', 'Gas Sensor']
    },
    'dc-motors': {
        oneLiner: 'Geared DC motors delivering torque for wheeled robots and mechanical drives.',
        specs: { 'Voltage': '3V–12V', 'Gear Ratio': '1:48 / 1:120', 'RPM': '100–200 (geared)', 'Stall Current': '~250mA–1A', 'Shaft': '3mm D-type' },
        useCases: ['Wheeled robot platforms (2WD / 4WD)', 'Conveyor belt systems', 'Automated curtain pullers', 'Fan or winch mechanisms'],
        tips: ['Always use a motor driver module — never connect directly to MCU', 'Use PWM on the ENABLE pin to control speed smoothly', 'Add wheel encoders for precise distance/speed feedback', 'Gear ratio determines torque vs speed tradeoff'],
        warnings: ['Motors generate back-EMF that can damage electronics — use flyback diodes', 'Stall conditions draw max current and generate heat — add current limiting', 'Start slowly with PWM to avoid current spikes'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['Motor Driver Module', 'Arduino Uno R3', 'ESP32', 'Battery holders']
    },
    'motor-driver': {
        oneLiner: 'Dual H-bridge driver controlling two DC motors with speed and direction.',
        specs: { 'Model': 'L298N', 'Channels': '2 (dual H-bridge)', 'Motor Voltage': '5V–35V', 'Logic Voltage': '5V', 'Max Current': '2A per channel', 'PWM Support': 'Yes (via ENA/ENB)' },
        useCases: ['Dual DC motor control for differential drive robots', 'Stepper motor driving', 'Bi-directional conveyor systems', 'Motorized gate/door openers'],
        tips: ['Remove the 5V regulator jumper when using >12V motor supply', 'The onboard 5V regulator can power your Arduino — saves a wire', 'Use PWM on ENA/ENB for smooth speed control', 'IN1/IN2 control direction, ENA controls speed for Motor A'],
        warnings: ['L298N has significant voltage drop (~2V) — factor this into motor voltage', 'Heat sink is required for sustained loads above 1A', 'Do not exceed 2A per channel or the chip will overheat and fail'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['DC Geared Motors', 'Arduino Uno R3', 'ESP32', 'Battery holders']
    },
    'relay': {
        oneLiner: 'Optocoupler-isolated switch for controlling high-power AC and DC loads safely.',
        specs: { 'Channels': '1/2/4/8', 'Coil Voltage': '5V', 'Contact Rating': '10A @ 250VAC / 10A @ 30VDC', 'Trigger': 'Active LOW (most modules)', 'Isolation': 'Optocoupler' },
        useCases: ['Switching AC mains devices (lamps, fans, heaters)', 'Motor ON/OFF control for high-current loads', 'Solenoid valve actuation', 'Battery disconnect switches'],
        tips: ['Use optocoupler-isolated modules for safer MCU protection', 'Active LOW means the relay activates when pin goes LOW', 'Test with a multimeter in continuity mode before connecting AC loads', 'Add a snubber circuit across the contacts for inductive loads'],
        warnings: ['DO NOT work with mains voltage (120V/220V AC) without proper training and safety equipment', 'Always use an enclosure when switching AC loads', 'Back-EMF from relay coil can damage MCU — ensure the module has a flyback diode'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Solenoid Valve', 'Mini Water Pump Motor', 'Cooling Fan']
    },
    'solenoid': {
        oneLiner: 'Electrically actuated valve for automated water and fluid flow control.',
        specs: { 'Type': 'Normally Closed (NC)', 'Voltage': '12V DC', 'Current': '~300mA–500mA', 'Port Size': '1/2 inch', 'Pressure': 'Up to 0.8 MPa' },
        useCases: ['Automated irrigation valve control', 'Liquid dispensing machines', 'Pneumatic circuit switching', 'Aquarium auto-water-change systems'],
        tips: ['Always drive via relay or MOSFET — never directly from MCU', 'Add a flyback diode across the coil terminals', 'Use Teflon tape on threaded connections to prevent leaks', 'Test with water before deploying to verify seal integrity'],
        warnings: ['High inductive kick when switching off — protect your electronics', 'Ensure voltage matches exactly — under-voltage causes weak activation, over-voltage burns coil', 'Water pressure must not exceed rated MPa'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['Relay Module', 'Arduino Uno R3', 'ESP32', 'Soil Moisture Sensor']
    },
    'fan': {
        oneLiner: 'Compact 5V DC cooling fan for enclosures, heat sinks, and ventilation.',
        specs: { 'Voltage': '5V DC', 'Current': '~100–200mA', 'Size': '30×30mm / 40×40mm', 'Airflow': '~3–5 CFM', 'Noise': '~25 dB' },
        useCases: ['Electronics enclosure cooling', 'Soldering fume extraction', 'Raspberry Pi / SBC thermal management', 'Ventilated grow boxes'],
        tips: ['Use a MOSFET for PWM speed control from MCU', 'Mount with rubber grommets to reduce vibration noise', 'Direct airflow over heat sinks for maximum cooling effect'],
        warnings: ['Keep fingers and wires clear of spinning blades', 'Blocked airflow causes the motor to stall and overheat'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Relay Module', 'Temperature sensors']
    },
    'leds': {
        oneLiner: 'Standard 5mm LEDs — the first output device every maker learns to use.',
        specs: { 'Forward Voltage': '~1.8V (Red), ~2.2V (Yellow/Green), ~3.2V (Blue/White)', 'Forward Current': '20mA (typ.)', 'Package': '5mm through-hole', 'Viewing Angle': '~30° (standard)' },
        useCases: ['Status indicators on project enclosures', 'LED chaser/sequencer circuits', 'Traffic light simulation models', 'Debugging visual feedback'],
        tips: ['ALWAYS use a current-limiting resistor (220Ω for 5V supply is standard)', 'Longer leg = Anode (+), shorter leg = Cathode (−)', 'Use PWM (analogWrite) for brightness dimming effects', 'Group LEDs with a shift register (74HC595) to save GPIO pins'],
        warnings: ['Without a resistor, LEDs will draw excessive current and burn out instantly', 'Reverse polarity will not damage most LEDs, but they simply will not light up'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Resistor Kit', 'Breadboards', 'Arduino Uno R3', 'ESP32']
    },
    'rgb-leds': {
        oneLiner: 'Three-channel color LEDs capable of mixing 16.7 million hues via PWM.',
        specs: { 'Type': 'Common Cathode / Common Anode', 'Channels': '3 (Red, Green, Blue)', 'Forward Current': '20mA per channel', 'Colors': '16.7 million (8-bit per channel)' },
        useCases: ['Mood lighting controllers', 'Color-coded status indicators', 'RGB light strips and panels', 'Interactive color-mixing displays'],
        tips: ['Use analogWrite on 3 PWM pins for full color control', 'Common cathode: connect common pin to GND', 'Use separate resistors for each color channel (resistor values differ per color)', 'NeoPixel/WS2812B addressable LEDs are far easier for multi-LED projects'],
        warnings: ['Total current for all three channels can reach 60mA — use transistors for large arrays', 'Mixing all three at max creates white, but draws maximum current'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Resistor Kit', 'Potentiometers']
    },
    'resistors': {
        oneLiner: 'Assorted carbon-film resistors — essential for current limiting and voltage dividing.',
        specs: { 'Values': '220Ω, 330Ω, 1kΩ, 4.7kΩ, 10kΩ, 100kΩ, 1MΩ', 'Tolerance': '±5% (gold band)', 'Power Rating': '1/4 W', 'Type': 'Carbon film (through-hole)' },
        useCases: ['LED current limiting', 'Voltage dividers for sensor interfacing', 'Pull-up/pull-down resistors for digital inputs', 'RC timing circuits'],
        tips: ['Learn the color band code: Black(0) Brown(1) Red(2) Orange(3) Yellow(4) Green(5) Blue(6) Violet(7) Grey(8) White(9)', 'Use 220Ω for LEDs on 5V, 100Ω for LEDs on 3.3V', '10kΩ is the standard pull-up/pull-down value', 'Use a multimeter to verify values before placing in circuits'],
        warnings: ['Exceeding the 1/4W power rating will cause the resistor to overheat and potentially catch fire', 'Carbon film resistors drift slightly with age and heat'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['All components in this digest']
    },
    'potentiometers': {
        oneLiner: 'Rotary variable resistor — turn the knob to adjust voltage or control parameters.',
        specs: { 'Value': '10kΩ (linear taper)', 'Rotation': '~270°', 'Wiper Type': 'Carbon track', 'Pins': '3 (VCC, Wiper/Signal, GND)' },
        useCases: ['Volume or brightness controls', 'Manual servo position input', 'Threshold adjustment knobs', 'Analog user input for menus'],
        tips: ['Connect outer pins to VCC and GND, read the center pin with analogRead', 'Use the map() function to convert 0–1023 to your desired range', 'Add a knob cap for easier turning', 'Logarithmic taper pots are better for audio volume control'],
        warnings: ['Do not force rotation past the mechanical stops — it will damage the track', 'Dirty or worn tracks cause noisy/jumpy readings'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'Servo Motors', 'LEDs', 'OLED Displays']
    },
    'oled-lcd': {
        oneLiner: 'Crisp 0.96-inch monochrome OLED for dashboards, menus, and debug readouts.',
        specs: { 'Model': 'SSD1306', 'Size': '0.96" (128×64 pixels)', 'Interface': 'I2C (0x3C)', 'Colors': 'Monochrome (white/blue/yellow)', 'Operating Voltage': '3.3V–5V', 'Current': '~20mA' },
        useCases: ['Real-time sensor dashboards', 'Menu-driven user interfaces', 'Clock and timer displays', 'Debug output in the field (no laptop needed)', 'Game displays for retro-style projects'],
        tips: ['Use the Adafruit SSD1306 & GFX libraries for easy drawing', 'Clear the display buffer before each frame to prevent ghosting', 'Reduce refresh rate to extend display lifespan', 'Use drawBitmap() to render custom icons and logos'],
        warnings: ['OLED pixels can burn in if displaying static content for extended periods', 'I2C address conflicts can occur if multiple I2C devices share the bus — check addresses', 'Very small text may be unreadable on 0.96" screens — use size 2 minimum'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'All I2C sensors'], communication: 'I2C'
    },
    '9v-battery': {
        oneLiner: 'Compact alkaline cell for portable, low-current Arduino projects.',
        specs: { 'Chemistry': 'Alkaline', 'Nominal Voltage': '9V', 'Capacity': '~500mAh', 'Connector': 'Snap-on', 'Weight': '~46g' },
        useCases: ['Portable Arduino project power', 'Temporary field testing power source', 'Standalone alarm circuit power'],
        tips: ['Use a voltage regulator to step down to 5V for MCUs', 'Connect via barrel jack adapter for Arduino', 'Alkaline 9V batteries discharge quickly under load — not ideal for motors', 'Rechargeable 9V (NiMH) are more economical for frequent use'],
        warnings: ['Capacity is low — not suitable for high-current or long-duration projects', 'Do not short-circuit — can get dangerously hot', 'Dispose of responsibly — do not throw in regular trash'],
        difficulty: 'Beginner', reusability: 'Consumable',
        compatibleWith: ['Arduino Uno R3', 'DC Barrel Connectors', 'Voltage Regulator Module']
    },
    '18650': {
        oneLiner: 'High-capacity rechargeable Li-ion cell — the gold standard for portable robotics power.',
        specs: { 'Chemistry': 'Lithium-Ion', 'Nominal Voltage': '3.7V', 'Capacity': '2000–3500mAh', 'Max Discharge': '~2–10A (cell dependent)', 'Dimensions': '18mm × 65mm', 'Cycles': '~300–500' },
        useCases: ['High-capacity robot battery packs', 'Solar energy storage systems', 'Portable power stations', 'Custom battery packs for field equipment'],
        tips: ['Always use a Battery Management System (BMS) for multi-cell packs', 'Charge with a dedicated TP4056 module — never with a random charger', 'Match cell capacities and age within a pack', 'Store at ~3.7V (50% charge) for maximum lifespan'],
        warnings: ['Lithium-ion cells can EXPLODE if punctured, overcharged, or short-circuited', 'Never solder directly to cells — use spot-welded nickel strips', 'Do not charge below 0°C or above 45°C', 'Use only cells from reputable manufacturers'],
        difficulty: 'Advanced', reusability: 'High',
        compatibleWith: ['Battery Holders', 'Step-Down Converter', 'Voltage Regulator Module', 'Small Solar Panels']
    },
    'battery-holders': {
        oneLiner: 'Snap-in enclosures for easy battery mounting, swapping, and series/parallel configs.',
        specs: { 'Types': '1×18650, 2×18650, 4×AA, 1×9V snap', 'Wire Gauge': '22 AWG leads', 'Material': 'ABS plastic', 'Features': 'On/off switch (some models)' },
        useCases: ['Removable battery mounting in project enclosures', 'Quick battery swapping in the field', 'Series/parallel battery configurations'],
        tips: ['Choose holders with an integrated switch for convenience', 'Secure holders with screws or hot glue in mobile robots', 'Label polarity clearly on custom enclosures'],
        warnings: ['Spring contacts can lose tension over time — replace if batteries feel loose', 'Check polarity markings inside holder match your wiring'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['18650 Li-ion Cells', '9V Batteries', 'Step-Down Converter']
    },
    'power-banks': {
        oneLiner: 'USB portable battery packs — plug-and-play 5V power for field deployments.',
        specs: { 'Output': '5V USB (1–2A)', 'Capacity': '5000–20000mAh', 'Ports': 'USB-A, USB-C, Micro-USB', 'Charging': 'Micro-USB / USB-C input' },
        useCases: ['Powering Raspberry Pi or Arduino in the field', 'Long-duration sensor logging stations', 'Workshop demo power source', 'Portable display kiosks'],
        tips: ['Some power banks shut off with low current draw — test with your project first', 'Use a USB cable with thick conductors (24 AWG) for reliable power', 'Prefer models with pass-through charging for solar setups'],
        warnings: ['Do not open or modify power banks — internal Li-ion cells are dangerous', 'Avoid extreme heat or direct sunlight during charging'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['Arduino Uno R3', 'ESP32', 'USB Programming Cables']
    },
    'buck-converter': {
        oneLiner: 'High-efficiency adjustable step-down voltage regulator (up to 3A output).',
        specs: { 'Model': 'LM2596', 'Input': '4.5V–40V', 'Output': '1.25V–37V (adjustable)', 'Efficiency': '~92%', 'Max Current': '3A', 'Switching Freq': '150kHz' },
        useCases: ['Converting 12V battery supply to 5V for MCUs', 'Multi-voltage power distribution boards', 'Solar panel voltage regulation', 'High-efficiency portable power systems'],
        tips: ['Adjust output BEFORE connecting load — use a multimeter', 'Buck converters are far more efficient than linear regulators (LM7805) for large voltage drops', 'Add input/output capacitors for cleaner power', 'Screw the potentiometer slowly — small turns make big voltage changes'],
        warnings: ['Output can go as high as input voltage if potentiometer is misadjusted — always verify first', 'Not suitable for noise-sensitive analog circuits — use LDO regulators instead', 'Counterfeit LM2596 modules are common — buy from reputable sources'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['18650 Li-ion Cells', 'Small Solar Panels', 'Arduino Uno R3', 'ESP32']
    },
    'voltage-reg': {
        oneLiner: 'Classic linear regulator delivering a rock-steady 5V from higher input voltages.',
        specs: { 'Model': 'LM7805', 'Input': '7V–35V', 'Output': '5V (fixed)', 'Max Current': '1.5A', 'Dropout Voltage': '~2V', 'Package': 'TO-220', 'Efficiency': '~60% (varies with input)' },
        useCases: ['Simple 5V regulated supply from 9V/12V batteries', 'Breadboard power rail stabilization', 'Arduino-compatible power supply circuits'],
        tips: ['Add a 0.33μF capacitor on input and 0.1μF on output for stability (per datasheet)', 'Attach a heatsink — these get hot under load', 'Input must be at least 7V (output + 2V dropout)', 'For 3.3V regulation, use LM1117-3.3 instead'],
        warnings: ['Excess voltage is dissipated as HEAT — (Vin - 5V) × I = power wasted', 'Can get hot enough to burn skin under heavy load — always heatsink', 'Not suitable for battery-powered projects — wastes too much energy as heat'],
        difficulty: 'Beginner', reusability: 'High',
        compatibleWith: ['9V Batteries', 'DC Barrel Connectors', 'Breadboards', 'Arduino Uno R3']
    },
    'solar-panels': {
        oneLiner: 'Small photovoltaic panels for off-grid IoT power and renewable energy demos.',
        specs: { 'Voltage': '5V / 6V', 'Power': '1W–5W', 'Current': '~200mA–1A (full sun)', 'Cell Type': 'Polycrystalline / Monocrystalline', 'Dimensions': '~110×60mm (1W)' },
        useCases: ['Off-grid IoT sensor station power', 'Solar-charged battery pack systems', 'Educational renewable energy demonstrations', 'Trickle charging for standby systems'],
        tips: ['Angle towards the sun — even 10° off-axis reduces output significantly', 'Use a TP4056 with DW01 protection for Li-ion charging from solar', 'Add a Schottky diode to prevent reverse current at night', 'Clean panel surface regularly for maximum efficiency', 'Pair with a supercapacitor for burst-power needs'],
        warnings: ['Output varies dramatically with weather, angle, and shading', 'Do not connect panel directly to MCU without regulation — voltage can spike', 'Glass-panel versions are fragile — handle and mount carefully'],
        difficulty: 'Intermediate', reusability: 'High',
        compatibleWith: ['18650 Li-ion Cells', 'Step-Down Converter', 'Voltage Regulator Module', 'ESP32']
    }
};
