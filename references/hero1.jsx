import React, { useState } from 'react';
import { BookOpen, Wrench, Heart, GraduationCap, ArrowLeft, Settings, Search } from 'lucide-react';

// --- Shared UI Components ---

const PillBadge = ({ children, colorClass = "bg-[#e1ccfa]" }) => (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border-2 border-black ${colorClass}`}>
        {children}
    </span>
);

const NavItem = ({ icon, text, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 font-bold text-sm px-3 py-2 rounded-lg transition-colors
      ${isActive ? 'bg-black/5' : 'hover:bg-black/5'}
    `}
    >
        <span>{icon}</span>
        <span>{text}</span>
        <span className="text-[10px]">▼</span>
    </button>
);

const ActionButton = ({ children, variant = "primary", onClick, className = "" }) => {
    const baseStyle = "px-5 py-2 rounded-xl font-bold transition-all border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] active:shadow-[0_0_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]";
    const variants = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-[#e1ccfa] text-black",
        white: "bg-white text-black"
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

const BentoCard = ({ title, description, icon, colorClass, onClick }) => (
    <div
        onClick={onClick}
        className="group cursor-pointer bg-white border-2 border-black rounded-2xl p-6 transition-all duration-200 shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1 flex flex-col h-full"
    >
        <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl border-2 border-black ${colorClass} shadow-[2px_2px_0_0_#000]`}>
                <span className="text-2xl">{icon}</span>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white">
                →
            </div>
        </div>
        <h3 className="text-xl font-black mb-2 tracking-tight">{title}</h3>
        <p className="text-gray-700 font-medium leading-relaxed flex-grow">
            {description}
        </p>
    </div>
);

// --- Main Application ---

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    // Helper to render the mock sub-pages
    const renderSubPage = (title) => (
        <div className="max-w-4xl mx-auto py-12 px-6 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
                onClick={() => setCurrentPage('home')}
                className="mb-8 flex items-center gap-2 bg-[#e1ccfa] px-4 py-2 rounded-full border-2 border-black font-bold shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-all hover:-translate-y-0.5"
            >
                <ArrowLeft size={16} /> back to home
            </button>
            <h1 className="text-5xl font-black mb-6 tracking-tight text-center">{title}</h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl">
                This is a placeholder for the {title} page. In the full app, this would render the specific content, bento grids, or articles associated with this section.
            </p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#e0f7f6] font-sans text-black selection:bg-[#e1ccfa] selection:text-black">

            {/* Header */}
            <header className="bg-white border-b-2 border-black px-6 py-3 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    {/* Logo matching the screenshot */}
                    <div
                        className="bg-black text-white px-3 py-2 font-black leading-tight cursor-pointer relative"
                        onClick={() => setCurrentPage('home')}
                    >
                        Solarpunk<br />Corps
                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-2 left-2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-black border-r-[8px] border-r-transparent"></div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-2">
                        <NavItem
                            icon="📚"
                            text="Handbook Digest"
                            onClick={() => setCurrentPage('handbook')}
                            isActive={currentPage === 'handbook'}
                        />
                        <NavItem
                            icon="🛠"
                            text="tech stacks"
                            onClick={() => setCurrentPage('tech')}
                            isActive={currentPage === 'tech'}
                        />
                        <NavItem
                            icon="❤️"
                            text="community"
                            onClick={() => setCurrentPage('community')}
                            isActive={currentPage === 'community'}
                        />
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <NavItem
                        icon="🎒"
                        text="study guide"
                        onClick={() => setCurrentPage('study')}
                        isActive={currentPage === 'study'}
                    />
                    <button className="bg-black text-white px-5 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                        upgrade
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Settings size={20} />
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main>
                {currentPage === 'home' ? (
                    <div className="max-w-6xl mx-auto py-16 px-6 sm:px-8">

                        {/* Hero Section */}
                        <div className="mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <PillBadge colorClass="bg-[#ffe1a8] mb-6">🌱 Project Overview</PillBadge>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                                SPC Archive Engine
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl font-medium leading-relaxed mb-10">
                                Your interactive hub for demystifying complex STEM disciplines.
                                Built by the Solarpunk Corps, we turn dense engineering, robotics, and
                                sustainability concepts into bite-sized, accessible learning modules.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <ActionButton variant="secondary" onClick={() => setCurrentPage('study')}>
                                    Start Learning
                                </ActionButton>
                                <ActionButton variant="white" className="flex items-center gap-2">
                                    <Search size={18} /> Search Archive
                                </ActionButton>
                            </div>
                        </div>

                        {/* Navigation Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150 fill-mode-both">

                            <BentoCard
                                title="Handbook Digest"
                                description="Your ultimate component guide for electronics, robotics, and hardware prototyping."
                                icon="📚"
                                colorClass="bg-[#e1ccfa]" // Pastel purple
                                onClick={() => setCurrentPage('handbook')}
                            />

                            <BentoCard
                                title="Study Guides"
                                description="Structured learning paths covering Kinematics, Control Systems, and AI integration."
                                icon="🎒"
                                colorClass="bg-[#ffcdd2]" // Pastel red/pink
                                onClick={() => setCurrentPage('study')}
                            />

                            <BentoCard
                                title="Tech Stacks"
                                description="Deep dives into the software, libraries, and frameworks powering modern solarpunk tech."
                                icon="🛠"
                                colorClass="bg-[#c8e6c9]" // Pastel green
                                onClick={() => setCurrentPage('tech')}
                            />

                            <BentoCard
                                title="Community"
                                description="Meet the volunteers, engineers, and contributors making this accessible future possible."
                                icon="❤️"
                                colorClass="bg-[#ffe082]" // Pastel yellow
                                onClick={() => setCurrentPage('community')}
                            />

                        </div>

                        {/* Quick Stats / Info Section */}
                        <div className="mt-20 pt-16 border-t-2 border-black flex flex-col md:flex-row gap-12 items-center justify-between">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-black mb-4">Why we built this.</h2>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    Traditional textbooks can be daunting. We believe that building a sustainable, technologically advanced future requires tools that are engaging, highly accessible, and beautifully designed.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 border-2 border-black rounded-md text-xs font-bold bg-white">Open Source</span>
                                    <span className="px-3 py-1 border-2 border-black rounded-md text-xs font-bold bg-white">Community Driven</span>
                                    <span className="px-3 py-1 border-2 border-black rounded-md text-xs font-bold bg-white">Solarpunk Ethos</span>
                                </div>
                            </div>

                            {/* Decorative abstract graphic matching the vibe */}
                            <div className="w-full md:w-1/2 relative h-64 bg-white border-2 border-black rounded-2xl shadow-[8px_8px_0_0_#000] p-6 overflow-hidden flex items-center justify-center">
                                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#e1ccfa] rounded-full border-2 border-black opacity-50 mix-blend-multiply"></div>
                                <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#c8e6c9] rounded-full border-2 border-black opacity-50 mix-blend-multiply"></div>
                                <div className="z-10 text-center">
                                    <div className="text-4xl mb-2">⚙️ + 🌿 = 🚀</div>
                                    <div className="font-black text-xl tracking-wide">Technology for Tomorrow</div>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    // Render Mock Sub-pages
                    renderSubPage(
                        currentPage === 'handbook' ? 'Handbook Digest' :
                            currentPage === 'study' ? 'Robotics Study Guides' :
                                currentPage === 'tech' ? 'Tech Stacks' :
                                    'Community & Contributors'
                    )
                )}
            </main>

            {/* Footer */}
            <footer className="border-t-2 border-black mt-12 py-8 bg-white text-center">
                <p className="font-bold text-sm">
                    © {new Date().getFullYear()} Solarpunk Corps. Built for the future.
                </p>
            </footer>
        </div>
    );
}