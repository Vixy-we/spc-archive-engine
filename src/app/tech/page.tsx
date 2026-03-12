import Link from 'next/link';

export default function TechPage() {
    const fields = [
        { id: 'cs', title: '💻 computer science', path: '/tech/cs', description: 'Explore topics in programming, algorithms, and software engineering.' },
        { id: 'mechanical', title: '⚙️ mechanical', path: '/tech/mechanical', description: 'Dive into mechanics, dynamics, and machine design.' },
        { id: 'electrical', title: '⚡ electrical', path: '/tech/electrical', description: 'Learn about circuits, electromagnetism, and power systems.' },
        { id: 'electronics', title: '🔌 electronics', path: '/tech/electronics', description: 'Discover microcontrollers, sensors, and electronic components.' },
    ];

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

                    <h1>tech stacks</h1>
                    <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#555', maxWidth: '600px', marginInline: 'auto' }}>
                        Explore our comprehensive guides and resources across different engineering disciplines.
                    </p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="general-info-section" style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
                <div className="grid-2-col">
                    {fields.map((field) => (
                        <Link href={field.path} key={field.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <div className="info-block" style={{ cursor: 'pointer' }}>
                                <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {field.title}
                                </h2>
                                <p>
                                    {field.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
