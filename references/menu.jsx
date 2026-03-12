import React, { useState } from 'react';
import { Settings, Search, ArrowLeft, Code, Zap, DollarSign, Image as ImageIcon } from 'lucide-react';

// --- Mock Data ---
const equipmentDatabase = [
    {
        id: 'arduino-uno',
        category: '_Core_Controllers_&_Computing',
        categoryIcon: '🔌',
        name: 'Arduino Uno R3',
        shortName: 'Arduino',
        badge: 'Hardware Component',
        color: 'bg-[#e1ccfa]', // Pastel purple
        description: 'The standard microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, an ICSP header and a reset button. Perfect for learning the basics of electronics and coding.',
        price: '25 Credits',
        imagePlaceholder: 'Arduino Board Outline',
        syntax: [
            {
                title: 'Basic Structure',
                code: `void setup() {\n  // put your setup code here, to run once:\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}`
            },
            {
                title: 'Digital Write',
                code: `pinMode(13, OUTPUT);\ndigitalWrite(13, HIGH); // Turn on LED\ndelay(1000);            // Wait 1 sec`
            }
        ]
    },
    {
        id: 'esp32',
        category: '_Core_Controllers_&_Computing',
        categoryIcon: '🔌',
        name: 'ESP32 Development Board',
        shortName: 'ESP32',
        badge: 'Hardware Component',
        color: 'bg-[#e1ccfa]',
        description: 'A low-cost, low-power system on a chip (SoC) microcontroller with integrated Wi-Fi and dual-mode Bluetooth. Highly favored in Solarpunk IoT projects for remote monitoring of environmental data.',
        price: '15 Credits',
        imagePlaceholder: 'ESP32 Chip with Antenna',
        syntax: [
            {
                title: 'Wi-Fi Connection',
                code: `#include <WiFi.h>\n\nconst char* ssid = "Solarpunk_Net";\nconst char* pass = "earth_first";\n\nWiFi.begin(ssid, pass);`
            }
        ]
    },
    {
        id: 'breadboards',
        category: '_Prototyping_Hardware',
        categoryIcon: '🧱',
        name: 'Breadboards',
        shortName: 'Breadboard',
        badge: 'Prototyping Tool',
        color: 'bg-[#c8e6c9]', // Pastel green
        description: 'A solderless device for temporary prototype with electronics and test circuit designs. Essential for quickly iterating on hardware setups without permanent commitment.',
        price: '5 Credits',
        imagePlaceholder: 'Grid of Breadboard Holes',
        syntax: [
            {
                title: 'Usage Convention',
                code: `// Top/Bottom Rails (Horizontal): Power (+ red) & Ground (- blue/black)\n// Middle Rows (Vertical): Connected nodes for components`
            }
        ]
    },
    {
        id: 'jumpers',
        category: '_Prototyping_Hardware',
        categoryIcon: '🧱',
        name: 'Jumper Wires (M-M, M-F, F-F)',
        shortName: 'Jumpers',
        badge: 'Wiring',
        color: 'bg-[#c8e6c9]',
        description: 'Electrical wires with connector pins at each end, used to interconnect components of a breadboard or test circuit, internally or with other equipment.',
        price: '2 Credits / bundle',
        imagePlaceholder: 'Bundle of Colorful Wires',
        syntax: [
            {
                title: 'Standard Color Coding',
                code: `RED   -> VCC / 5V / 3.3V (Power)\nBLACK -> GND (Ground)\nOTHER -> Data / Signal lines`
            }
        ]
    },
    {
        id: 'usb-cables',
        category: '_Prototyping_Hardware',
        categoryIcon: '🧱',
        name: 'USB Programming Cables',
        shortName: 'USB Cables',
        badge: 'Accessory',
        color: 'bg-[#c8e6c9]',
        description: 'Used to connect microcontrollers to computers for flashing compiled code and establishing serial communication for debugging.',
        price: '3 Credits',
        imagePlaceholder: 'USB Type-A to Type-B/Micro/C',
        syntax: [
            {
                title: 'Serial Debugging',
                code: `// Ensure baud rate matches your Serial Monitor\nSerial.begin(115200);\nSerial.println("System Initialized.");`
            }
        ]
    }
];

// --- Shared UI Components ---

const NavItem = ({ icon, text, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 font-bold text-sm px-3 py-2 rounded-lg transition-colors
      ${isActive ? 'bg-black/5' : 'hover:bg-black/5'}
    `}
    >
        {typeof icon === 'string' ? <span>{icon}</span> : icon}
        <span>{text}</span>
        <span className="text-[10px]">▼</span>
    </button>
);

const PillBadge = ({ children, colorClass = "bg-[#e1ccfa]", border = "border-black" }) => (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-bold border ${border} ${colorClass}`}>
        {children}
    </span>
);

// --- Main Application ---

export default function App() {
    const [selectedItem, setSelectedItem] = useState(null);

    // Group data by category
    const groupedEquipment = equipmentDatabase.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = { icon: item.categoryIcon, items: [] };
        acc[item.category].items.push(item);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-[#e0f7f6] font-sans text-black selection:bg-[#e1ccfa] selection:text-black pb-20">

            {/* Header (Reused from previous context) */}
            <header className="bg-white border-b-[3px] border-black px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-8">
                    <div
                        className="bg-black text-white px-3 py-2 font-black leading-tight cursor-pointer relative shadow-[4px_4px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] transition-all"
                        onClick={() => setSelectedItem(null)}
                    >
                        Solarpunk<br />Corps
                        <div className="absolute -bottom-2 left-2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-black border-r-[8px] border-r-transparent"></div>
                    </div>

                    <nav className="hidden md:flex items-center gap-2">
                        <NavItem icon="📚" text="Handbook Digest" isActive={true} onClick={() => setSelectedItem(null)} />
                        <NavItem icon="🛠" text="tech stacks" />
                        <NavItem icon="❤️" text="community" />
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                        <NavItem icon="🎒" text="study guide" />
                    </div>
                    <button className="bg-black text-white px-5 py-2 rounded-xl border-2 border-transparent font-bold hover:bg-gray-800 transition-colors shadow-[2px_2px_0_0_#000]">
                        upgrade
                    </button>
                    <button className="text-gray-500 hover:text-black transition-colors ml-2">
                        <Settings size={22} />
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-5xl mx-auto pt-12 px-6 sm:px-8">

                {!selectedItem ? (
                    /* --- LIST VIEW --- */
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl sm:text-6xl font-black mb-6 tracking-tight lowercase">
                                handbook digest
                            </h1>
                            <p className="text-lg text-gray-700 font-bold max-w-2xl mx-auto">
                                Your ultimate component guide for electronics, robotics, and solarpunk prototyping.
                            </p>
                        </div>

                        <div className="space-y-16">
                            {Object.entries(groupedEquipment).map(([categoryName, categoryData]) => (
                                <div key={categoryName}>
                                    {/* Section Header */}
                                    <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
                                        <span className="text-xl leading-none">●</span>
                                        <span>{categoryData.icon}</span>
                                        <span className="tracking-tight">{categoryName}</span>
                                    </h2>

                                    {/* Equipment Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {categoryData.items.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() => setSelectedItem(item)}
                                                className="group cursor-pointer bg-white border-[3px] border-black rounded-2xl p-4 flex items-center gap-5 transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000] shadow-[5px_5px_0_0_#000]"
                                            >
                                                {/* Colored Square Box */}
                                                <div className={`w-24 h-24 shrink-0 rounded-xl border-[3px] border-black flex items-center justify-center font-bold text-sm sm:text-base text-center px-2 ${item.color}`}>
                                                    {item.shortName}
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex flex-col items-start gap-2 flex-grow">
                                                    <h3 className="text-lg sm:text-xl font-black leading-tight group-hover:underline decoration-[3px] underline-offset-4">
                                                        {item.name}
                                                    </h3>
                                                    <PillBadge colorClass={`${item.color} bg-opacity-40`}>
                                                        {item.badge}
                                                    </PillBadge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Section Divider */}
                                    <div className="w-full border-b-[3px] border-black mt-16 opacity-50"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* --- DETAIL VIEW --- */
                    <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                        {/* Back Button */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="mb-8 flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border-[3px] border-black font-black text-sm shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[0_0_0_0_#000] active:translate-y-[4px] active:translate-x-[4px]"
                        >
                            <ArrowLeft size={18} strokeWidth={3} /> back to digest
                        </button>

                        <div className="bg-white border-[3px] border-black rounded-3xl shadow-[12px_12px_0_0_#000] overflow-hidden">
                            {/* Header Bar */}
                            <div className={`p-8 border-b-[3px] border-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${selectedItem.color}`}>
                                <div>
                                    <div className="flex items-center gap-2 mb-2 font-bold text-sm opacity-80">
                                        <span>{selectedItem.categoryIcon}</span>
                                        <span>{selectedItem.category.replace(/_/g, ' ').trim()}</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">{selectedItem.name}</h1>
                                </div>
                                <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0_0_#000] font-bold text-lg whitespace-nowrap">
                                    <DollarSign size={20} strokeWidth={3} />
                                    {selectedItem.price}
                                </div>
                            </div>

                            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

                                {/* Left Column: Image & Quick Stats */}
                                <div className="lg:col-span-1 space-y-6">
                                    <div className="aspect-square bg-[#f4f4f5] border-[3px] border-black rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-inner">
                                        <ImageIcon size={64} className="mb-4 opacity-20" />
                                        <span className="font-bold text-gray-500 italic">[{selectedItem.imagePlaceholder}]</span>
                                    </div>

                                    <div className="bg-[#ffe1a8] border-[3px] border-black rounded-xl p-5 shadow-[4px_4px_0_0_#000]">
                                        <h3 className="font-black mb-2 flex items-center gap-2 text-lg">
                                            <Zap size={20} fill="currentColor" /> Quick Specs
                                        </h3>
                                        <ul className="space-y-2 font-bold text-sm">
                                            <li className="flex justify-between border-b border-black/20 pb-1">
                                                <span>Classification</span>
                                                <span>{selectedItem.badge}</span>
                                            </li>
                                            <li className="flex justify-between border-b border-black/20 pb-1">
                                                <span>Reusability</span>
                                                <span>High</span>
                                            </li>
                                            <li className="flex justify-between border-b border-black/20 pb-1">
                                                <span>Difficulty</span>
                                                <span>Beginner</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column: Description & Code/Syntax */}
                                <div className="lg:col-span-2 space-y-8">
                                    <section>
                                        <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                                            Equipment Log
                                        </h2>
                                        <p className="text-lg leading-relaxed font-medium text-gray-800">
                                            {selectedItem.description}
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-black mb-4 flex items-center gap-2 mt-12">
                                            <Code size={24} strokeWidth={3} /> Necessary Syntax
                                        </h2>

                                        <div className="space-y-6">
                                            {selectedItem.syntax.map((block, idx) => (
                                                <div key={idx} className="rounded-xl overflow-hidden border-[3px] border-black shadow-[6px_6px_0_0_#000]">
                                                    <div className="bg-[#e0f7f6] border-b-[3px] border-black px-4 py-2 font-bold text-sm flex items-center justify-between">
                                                        <span>{block.title}</span>
                                                        <div className="flex gap-1.5">
                                                            <div className="w-3 h-3 rounded-full border border-black bg-red-400"></div>
                                                            <div className="w-3 h-3 rounded-full border border-black bg-yellow-400"></div>
                                                            <div className="w-3 h-3 rounded-full border border-black bg-green-400"></div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-[#1e1e2e] p-4 overflow-x-auto">
                                                        <pre className="text-[#a6accd] font-mono text-sm leading-relaxed">
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
                )}
            </main>
        </div>
    );
}