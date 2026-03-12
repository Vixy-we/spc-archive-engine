import React from 'react';

// --- Reusable UI Components mimicking the site's aesthetic ---

const NeoCard = ({ children, className = "", color = "bg-white", onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`${color} border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col h-full ${className}`}
        >
            {children}
        </div>
    );
};

const NeoPill = ({ children, color = "bg-[#e8dff5]" }) => (
    <span className={`${color} border border-black rounded-full px-3 py-1 text-xs font-bold inline-flex items-center gap-1 w-fit`}>
        {children}
    </span>
);

const NavItem = ({ icon, text, hasDropdown = false }) => (
    <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity text-sm font-bold">
        <span>{icon}</span>
        <span>{text}</span>
        {hasDropdown && <span className="text-xs ml-1">▼</span>}
    </div>
);

// --- Main Application ---

export default function App() {
    return (
        <div className="min-h-screen bg-[#def5f4] text-black font-sans selection:bg-black selection:text-[#def5f4]">

            {/* HEADER */}
            <header className="border-b-2 border-black bg-white px-6 py-3 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    {/* Logo matching the screenshot style */}
                    <div className="relative cursor-pointer group">
                        <div className="bg-black text-white font-extrabold text-lg leading-tight p-2 rounded-md group-hover:bg-gray-800 transition-colors">
                            Solarpunk<br />Corps
                        </div>
                        {/* The little speech bubble arrow */}
                        <div className="absolute -bottom-2 left-3 w-4 h-4 bg-black rotate-45 group-hover:bg-gray-800 transition-colors"></div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 ml-4">
                        <NavItem icon="📚" text="Handbook Digest" />
                        <NavItem icon="🛠️" text="tech stacks" hasDropdown />
                        <NavItem icon="💖" text="community" hasDropdown />
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:block">
                        <NavItem icon="🎒" text="study guide" hasDropdown />
                    </div>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition-colors border-2 border-black">
                        upgrade
                    </button>
                    <button className="text-gray-400 hover:text-black transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="max-w-6xl mx-auto px-6 py-16">

                {/* HERO SECTION */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex justify-center mb-6">
                        <span className="bg-[#e8dff5] border-2 border-black rounded-full px-4 py-2 text-sm font-bold flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            🌱 An Initiative of Solarpunk Corps
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        SPC Archive Engine
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                        Your centralized command center for interdisciplinary STEM. We demystify complex engineering, robotics, and technology subjects into bite-sized, accessible components to help you build a sustainable future.
                    </p>
                </div>

                {/* COMMAND CENTER GRID (Bento Box style) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Study Guides (Spans 2 columns on desktop) */}
                    <NeoCard className="md:col-span-2 bg-[#fde2c5]">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                🤖 Robotics & AI Study Guides
                            </h2>
                            <NeoPill color="bg-white">Core Curriculum</NeoPill>
                        </div>
                        <p className="text-gray-800 mb-6 font-medium">
                            Dive into our comprehensive unit-by-unit breakdowns. Master concepts from basic kinematics to advanced machine learning and control systems.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                            <div className="bg-white border border-black rounded-lg p-3 font-bold hover:bg-gray-50 transition-colors">
                                1.0 Introduction to Robotics →
                            </div>
                            <div className="bg-white border border-black rounded-lg p-3 font-bold hover:bg-gray-50 transition-colors">
                                2.0 Forward & Inverse Kinematics →
                            </div>
                            <div className="bg-white border border-black rounded-lg p-3 font-bold hover:bg-gray-50 transition-colors">
                                3.0 Computer Vision Fundamentals →
                            </div>
                            <div className="bg-white border border-black rounded-lg p-3 font-bold hover:bg-gray-50 transition-colors">
                                4.0 Machine Learning Basics →
                            </div>
                        </div>
                    </NeoCard>

                    {/* Card 2: Handbook Digest */}
                    <NeoCard color="bg-[#cce3fa]">
                        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
                            🔌 Handbook Digest
                        </h2>
                        <p className="text-gray-800 mb-6 font-medium text-sm">
                            Your ultimate component guide for electronics, hardware, and rapid prototyping.
                        </p>
                        <div className="space-y-3 mt-auto">
                            <div className="bg-white border border-black rounded-lg p-3 flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#e8dff5] border border-black flex items-center justify-center text-xs font-bold">MCU</div>
                                <div className="font-bold text-sm">Core Controllers</div>
                            </div>
                            <div className="bg-white border border-black rounded-lg p-3 flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#d1f2d3] border border-black flex items-center justify-center text-xs font-bold">HW</div>
                                <div className="font-bold text-sm">Prototyping Hardware</div>
                            </div>
                        </div>
                    </NeoCard>

                    {/* Card 3: Career & Pathways */}
                    <NeoCard color="bg-white">
                        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
                            🎓 Pathways & Majors
                        </h2>
                        <p className="text-gray-600 mb-4 font-medium text-sm">
                            Discover what you can do with a degree in Robotics, Mechatronics, or Computer Science.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <NeoPill color="bg-[#fde2c5]">⚙️ Mechanical Eng</NeoPill>
                            <NeoPill color="bg-[#d1f2d3]">⚡ Electrical Eng</NeoPill>
                            <NeoPill color="bg-[#cce3fa]">💻 Computer Science</NeoPill>
                            <NeoPill color="bg-[#e8dff5]">🤖 Mechatronics</NeoPill>
                        </div>
                    </NeoCard>

                    {/* Card 4: Tech Stacks */}
                    <NeoCard color="bg-white">
                        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
                            🛠️ Tech Stacks
                        </h2>
                        <p className="text-gray-600 mb-4 font-medium text-sm">
                            Explore the software and frameworks powering modern solarpunk and robotic innovations.
                        </p>
                        <ul className="space-y-2 mt-auto text-sm font-bold">
                            <li className="flex justify-between border-b border-gray-200 pb-1">
                                <span>Python / C++</span> <span>→</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 pb-1">
                                <span>ROS & ROS2</span> <span>→</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 pb-1">
                                <span>TensorFlow / PyTorch</span> <span>→</span>
                            </li>
                        </ul>
                    </NeoCard>

                    {/* Card 5: Community */}
                    <NeoCard color="bg-[#d1f2d3]">
                        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
                            💖 Community Hub
                        </h2>
                        <p className="text-gray-800 mb-4 font-medium text-sm">
                            Meet the volunteers, contributors, and researchers making this open-source archive possible.
                        </p>
                        <div className="flex -space-x-2 overflow-hidden mt-auto mb-4">
                            {/* Mock avatars */}
                            <div className="inline-block h-10 w-10 rounded-full border-2 border-black bg-blue-200 flex items-center justify-center text-lg">👩‍🔬</div>
                            <div className="inline-block h-10 w-10 rounded-full border-2 border-black bg-pink-200 flex items-center justify-center text-lg">🧑‍💻</div>
                            <div className="inline-block h-10 w-10 rounded-full border-2 border-black bg-yellow-200 flex items-center justify-center text-lg">👩‍🔧</div>
                            <div className="inline-block h-10 w-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-xs font-bold">+42</div>
                        </div>
                        <button className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            Join the Corps
                        </button>
                    </NeoCard>

                </div>
            </main>

            {/* FOOTER */}
            <footer className="border-t-2 border-black bg-white py-8 mt-12">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-bold text-lg flex items-center gap-2">
                        <span>☀️</span> Solarpunk Corps
                    </div>
                    <p className="text-sm font-medium text-gray-500">
                        Building a brighter, open-source future. © {new Date().getFullYear()}
                    </p>
                    <div className="flex gap-4 font-bold text-sm">
                        <a href="#" className="hover:underline">Report Error</a>
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}