import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div className="logo-bubble">fiveable</div>
                </Link>
            </div>

            <div className="nav-center">
                <div className="nav-item">
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span>✨ study content for ap students</span>
                    </Link>
                    {/* Removed chevron as it's now a direct link */}
                </div>
                <div className="nav-item">
                    <span>🛠 tech stacks</span>
                    <span className="chevron">▼</span>
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

            <div className="nav-right">
                <div className="nav-item">
                    <span>🎒 my subjects</span>
                    <span className="chevron">▼</span>
                    <div className="dropdown-menu" style={{ right: 0, left: 'auto' }}>
                        <Link href="#" className="dropdown-item">📐 math</Link>
                        <Link href="#" className="dropdown-item">🧪 science</Link>
                        <Link href="#" className="dropdown-item">📜 history</Link>
                    </div>
                </div>
                <Link href="#" className="upgrade-btn">upgrade</Link>
                <div className="icon-btn">⚙️</div>
            </div>
        </nav>
    );
}
