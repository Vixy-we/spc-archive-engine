'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div className="logo-bubble">Solarpunk<br/>Corps</div>
                </Link>
            </div>

            {/* Hamburger Button — mobile only */}
            <button
                className="hamburger-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Mobile overlay */}
            {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)}></div>}

            <div className={`nav-center ${menuOpen ? 'mobile-open' : ''}`}>
                {/* Mobile-only menu items (simplified list) */}
                <div className="mobile-only-nav">
                    <Link href="/handbook-digest" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        Handbook Digest
                    </Link>
                    <Link href="/tech" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        tech stack
                    </Link>
                    <Link href="/study" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        study guide
                    </Link>
                    <Link href="/community" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        community
                    </Link>
                    <Link href="/contacts" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        contact
                    </Link>
                </div>

                {/* Desktop menu items (hidden on mobile via CSS) */}
                <div className="desktop-only-nav">
                    <div className="nav-item">
                        <Link href="/handbook-digest" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span>📚 Handbook Digest</span>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link href="/tech" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span>🛠 tech stacks</span>
                            <span className="chevron">▼</span>
                        </Link>
                        <div className="dropdown-menu">
                            <Link href="/tech/cs" className="dropdown-item">💻 computer science</Link>
                            <Link href="/tech/mechanical" className="dropdown-item">⚙️ mechanical</Link>
                            <Link href="/tech/electrical" className="dropdown-item">⚡ electrical</Link>
                            <Link href="/tech/electronics" className="dropdown-item">🔌 electronics</Link>
                        </div>
                    </div>
                    <div className="nav-item">
                        <span>💖 community</span>
                        <span className="chevron">▼</span>
                        <div className="dropdown-menu">
                            <Link href="/community" className="dropdown-item">👥 contributors</Link>
                            <Link href="/community" className="dropdown-item">🤝 volunteers</Link>
                            <Link href="/community" className="dropdown-item">📢 shoutouts</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop-only right section */}
            <div className="nav-right">
                <div className="nav-item">
                    <span>🎒 study guide</span>
                    <span className="chevron">▼</span>
                    <div className="dropdown-menu" style={{ right: 0, left: 'auto' }}>
                        <Link href="/study/robotics" className="dropdown-item">🤖 Robotics</Link>
                        <Link href="/study/ai-ml" className="dropdown-item">🧠 AI ML</Link>
                        <Link href="/study/sustainability" className="dropdown-item">🌿 Sustainability</Link>
                        <Link href="/study/emerging-tech" className="dropdown-item">🚀 Emerging Tech</Link>
                    </div>
                </div>
                <Link href="/contacts" className="contact-btn">contact</Link>
                <div className="icon-btn">⚙️</div>
            </div>
        </nav>
    );
}
