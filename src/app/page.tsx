import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="hero">
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h1>Welcome to Solarpunk Corps</h1>
                    <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#555', maxWidth: '600px', marginInline: 'auto' }}>
                        Your central hub for exploring engineering, technology, and sustainable electronics.
                    </p>
                </div>
            </div>

            <div className="general-info-section" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div className="bento-grid">
                    <Link href="/study" style={{ textDecoration: 'none', color: 'inherit' }} className="span-4">
                        <div className="card-base card-white" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎒</div>
                            <h2>Study Guides</h2>
                            <p>Dive into comprehensive curriculums for Robotics, AI, and more.</p>
                        </div>
                    </Link>

                    <Link href="/tech" style={{ textDecoration: 'none', color: 'inherit' }} className="span-4">
                        <div className="card-base card-blue" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛠️</div>
                            <h2>Tech Stacks</h2>
                            <p>Explore resources across mechanical, electrical, and CS engineering.</p>
                        </div>
                    </Link>

                    <Link href="/handbook-digest" style={{ textDecoration: 'none', color: 'inherit' }} className="span-4">
                        <div className="card-base card-yellow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📚</div>
                            <h2>Handbook Digest</h2>
                            <p>Browse our exhaustive catalog of hardware, sensors, and components.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
