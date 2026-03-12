import Link from 'next/link';

const hardwareData = [
  {
    category: "🔌 Core Controllers & Computing",
    items: [
      { name: "Arduino Uno R3", placeholder: "https://placehold.co/150x150/e0cbfb/000000?text=Arduino" },
      { name: "ESP32 Development Board", placeholder: "https://placehold.co/150x150/e0cbfb/000000?text=ESP32" }
    ]
  },
  {
    category: "🧱 Prototyping Hardware",
    items: [
      { name: "Breadboards", placeholder: "https://placehold.co/150x150/d1e8e2/000000?text=Breadboard" },
      { name: "Jumper Wires (M-M, M-F, F-F)", placeholder: "https://placehold.co/150x150/d1e8e2/000000?text=Jumpers" },
      { name: "USB Programming Cables", placeholder: "https://placehold.co/150x150/d1e8e2/000000?text=USB+Cables" },
      { name: "Breadboard Power Supply Module", placeholder: "https://placehold.co/150x150/d1e8e2/000000?text=Power+Mod" },
      { name: "DC Barrel Connectors", placeholder: "https://placehold.co/150x150/d1e8e2/000000?text=DC+Barrel" },
      { name: "Screw Terminal Blocks", placeholder: "https://placehold.co/150x150/d1e8e2/000000?text=Terminals" }
    ]
  },
  {
    category: "🌿 Sensors",
    items: [
      { name: "LDR Module (Light)", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=LDR" },
      { name: "Light Intensity Sensor", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Light" },
      { name: "PIR Motion Sensor", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=PIR" },
      { name: "IR Proximity Sensor", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=IR" },
      { name: "Ultrasonic Distance Sensor", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Ultrasonic" },
      { name: "Laser Distance Sensor", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Laser" },
      { name: "Soil Moisture Sensor", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Soil" },
      { name: "Gas Sensor (MQ Series)", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Gas" },
      { name: "Combo Sensor (BME/DHT+MQ)", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Combo" },
      { name: "Touch Sensor", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Touch" },
      { name: "Push Button Switch", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Button" },
      { name: "Piezoelectric Sensor", placeholder: "https://placehold.co/150x150/f9e79f/000000?text=Piezo" }
    ]
  },
  {
    category: "⚙️ Actuators",
    items: [
      { name: "Micro Servo Motor", placeholder: "https://placehold.co/150x150/f1948a/000000?text=Servo" },
      { name: "Vibration Motor", placeholder: "https://placehold.co/150x150/f1948a/000000?text=Vibration" },
      { name: "Mini Water Pump Motor", placeholder: "https://placehold.co/150x150/f1948a/000000?text=Pump" },
      { name: "Buzzer", placeholder: "https://placehold.co/150x150/f1948a/000000?text=Buzzer" },
      { name: "DC Geared Motors", placeholder: "https://placehold.co/150x150/f1948a/000000?text=DC+Motor" },
      { name: "Motor Driver Module", placeholder: "https://placehold.co/150x150/f1948a/000000?text=Motor+Drv" },
      { name: "Relay Module", placeholder: "https://placehold.co/150x150/f1948a/000000?text=Relay" },
      { name: "Solenoid Valve", placeholder: "https://placehold.co/150x150/f1948a/000000?text=Solenoid" },
      { name: "Cooling Fan (5V)", placeholder: "https://placehold.co/150x150/f1948a/000000?text=Fan" }
    ]
  },
  {
    category: "💡 Indicators & Output Devices",
    items: [
      { name: "LEDs (Red/Green/Blue/Yellow)", placeholder: "https://placehold.co/150x150/faddco/000000?text=LEDs" },
      { name: "RGB LEDs", placeholder: "https://placehold.co/150x150/faddco/000000?text=RGB+LED" },
      { name: "Resistor Kit", placeholder: "https://placehold.co/150x150/faddco/000000?text=Resistors" },
      { name: "Potentiometers", placeholder: "https://placehold.co/150x150/faddco/000000?text=Potentiometers" },
      { name: "Small OLED / LCD (I2C)", placeholder: "https://placehold.co/150x150/faddco/000000?text=Display" }
    ]
  },
  {
    category: "🔋 Power System",
    items: [
      { name: "9V Batteries", placeholder: "https://placehold.co/150x150/d7bde2/000000?text=9V+Battery" },
      { name: "18650 Li-ion Cells", placeholder: "https://placehold.co/150x150/d7bde2/000000?text=18650s" },
      { name: "Battery Holders", placeholder: "https://placehold.co/150x150/d7bde2/000000?text=Holders" },
      { name: "Power Banks", placeholder: "https://placehold.co/150x150/d7bde2/000000?text=Power+Bank" },
      { name: "Step-Down Converter (Buck)", placeholder: "https://placehold.co/150x150/d7bde2/000000?text=Buck+Mod" },
      { name: "Voltage Regulator Module", placeholder: "https://placehold.co/150x150/d7bde2/000000?text=V+Reg" },
      { name: "Small Solar Panels", placeholder: "https://placehold.co/150x150/d7bde2/000000?text=Solar" }
    ]
  }
];

function CategorySection({ title, items }: { title: string, items: any[] }) {
    if (!items || items.length === 0) return null;

    // Transform title
    const displayTitle = ". " + title.trim().replace(/ /g, "_");

    return (
        <div className="unit-section" style={{ marginBottom: '60px' }}>
            <div className="unit-header" style={{
                cursor: 'default',
                textTransform: 'none',
                fontSize: '2rem',
                fontWeight: '900',
                letterSpacing: '-1px',
                marginBottom: '30px',
                color: 'black'
            }}>
                {displayTitle}
            </div>

            <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {items.map((item, id) => (
                    <div key={id} className="info-block" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', borderRadius: '15px', border: '2px solid black' }}>
                        {/* Image Placeholder */}
                        <img
                            src={item.placeholder}
                            alt={item.name}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '10px',
                                border: '2px solid black',
                                backgroundColor: '#f0f0f0',
                                objectFit: 'cover'
                            }}
                        />

                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{item.name}</h3>
                            <span style={{
                                background: '#e0cbfb',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                border: '1px solid black',
                                display: 'inline-block',
                                marginTop: '5px'
                            }}>
                                Hardware Component
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function HandbookDigestPage() {
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
                {hardwareData.map((categoryData, i) => (
                    <CategorySection key={i} title={categoryData.category} items={categoryData.items} />
                ))}
            </div>
        </div>
    );
}
