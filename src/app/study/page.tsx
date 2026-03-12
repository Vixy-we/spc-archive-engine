import Link from 'next/link';

export default function StudyDirectoryPage() {
    return (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="hero">
                <div style={{ textAlign: "center", marginBottom: "40px", position: "relative" }}>
                    <Link
                        href="/"
                        className="pill-back-btn"
                    >
                        ← back to home
                    </Link>
                    <h1>study guides</h1>
                    <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#555', maxWidth: '600px', marginInline: 'auto' }}>
                        Choose a discipline to dive into our curriculum of structured units, topics, and interactive materials.
                    </p>
                </div>
            </div>

            <div className="general-info-section" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div className="bento-grid">
                    {/* Robotics */}
                    <Link href="/study/robotics" style={{ textDecoration: 'none', color: 'inherit' }} className="span-6">
                        <div className="card-base card-white" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🤖</div>
                            <h2>Robotics</h2>
                            <p>Kinematics, control systems, and electronics.</p>
                        </div>
                    </Link>

                    {/* AI ML */}
                    <Link href="/study/ai-ml" style={{ textDecoration: 'none', color: 'inherit' }} className="span-6">
                        <div className="card-base card-pink" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧠</div>
                            <h2>AI ML</h2>
                            <p>Machine learning, neural networks, and algorithms.</p>
                        </div>
                    </Link>

                    {/* Sustainability */}
                    <Link href="/study/sustainability" style={{ textDecoration: 'none', color: 'inherit' }} className="span-6">
                        <div className="card-base card-blue" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌿</div>
                            <h2>Sustainability</h2>
                            <p>Renewable energy, green tech, and design practices.</p>
                        </div>
                    </Link>

                    {/* Emerging Tech */}
                    <Link href="/study/emerging-tech" style={{ textDecoration: 'none', color: 'inherit' }} className="span-6">
                        <div className="card-base card-yellow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚀</div>
                            <h2>Emerging Tech</h2>
                            <p>Biomimicry, Quantum Computing, and future innovations.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
