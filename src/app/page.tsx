import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Home() {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'flex', flexDirection: 'column', gap: '80px' }}>

            {/* Hero Section */}
            <div style={{ textAlign: "center", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{
                    backgroundColor: '#e8dff5',
                    border: '2px solid black',
                    borderRadius: '9999px',
                    padding: '8px 16px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                    marginBottom: '24px'
                }}>
                    🌱 An Initiative of Solarpunk Corps
                </span>

                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                    SPC Archive Engine
                </h1>

                <p style={{ fontSize: '1.25rem', color: '#444', maxWidth: '768px', marginInline: 'auto', marginBottom: '40px', lineHeight: 1.6 }}>
                    Your interactive hub for demystifying complex STEM disciplines.
                    Built by the Solarpunk Corps, we turn dense engineering, robotics, and
                    sustainability concepts into bite-sized, accessible learning modules.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                    <Link href="/study" className="action-btn" style={{ backgroundColor: '#e1ccfa', color: 'black', padding: '12px 24px', fontSize: '1.1rem' }}>
                        Start Learning
                    </Link>
                    <button className="action-btn" style={{ backgroundColor: 'white', color: 'black', padding: '12px 24px', fontSize: '1.1rem' }}>
                        <Search size={20} style={{ marginRight: '8px' }} /> Search Archive
                    </button>
                </div>
            </div>

            {/* Navigation Bento Grid */}
            <div className="bento-grid">

                <Link href="/handbook-digest" className="card-base span-3 hover-lift" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <div style={{ backgroundColor: '#e1ccfa', padding: '16px', borderRadius: '12px', border: '2px solid black', boxShadow: '2px 2px 0 0 #000' }}>
                            <span style={{ fontSize: '2rem' }}>📚</span>
                        </div>
                        <div className="card-arrow" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', opacity: 0, transition: 'opacity 0.2s' }}>
                            →
                        </div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>Handbook Digest</h3>
                    <p style={{ color: '#444', flexGrow: 1, lineHeight: 1.5 }}>Your ultimate component guide for electronics, robotics, and hardware prototyping.</p>
                </Link>

                <Link href="/study" className="card-base span-3 hover-lift" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <div style={{ backgroundColor: '#ffcdd2', padding: '16px', borderRadius: '12px', border: '2px solid black', boxShadow: '2px 2px 0 0 #000' }}>
                            <span style={{ fontSize: '2rem' }}>🎒</span>
                        </div>
                        <div className="card-arrow" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', opacity: 0, transition: 'opacity 0.2s' }}>
                            →
                        </div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>Study Guides</h3>
                    <p style={{ color: '#444', flexGrow: 1, lineHeight: 1.5 }}>Structured learning paths covering Kinematics, Control Systems, and AI integration.</p>
                </Link>

                <Link href="/tech" className="card-base span-3 hover-lift" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <div style={{ backgroundColor: '#c8e6c9', padding: '16px', borderRadius: '12px', border: '2px solid black', boxShadow: '2px 2px 0 0 #000' }}>
                            <span style={{ fontSize: '2rem' }}>🛠</span>
                        </div>
                        <div className="card-arrow" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', opacity: 0, transition: 'opacity 0.2s' }}>
                            →
                        </div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>Tech Stacks</h3>
                    <p style={{ color: '#444', flexGrow: 1, lineHeight: 1.5, marginBottom: '16px' }}>Deep dives into the software, libraries, and frameworks powering modern solarpunk tech.</p>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 'auto 0 0 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', fontWeight: 'bold' }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', paddingBottom: '4px' }}>
                            <span>Python / C++</span> <span>→</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', paddingBottom: '4px' }}>
                            <span>ROS & ROS2</span> <span>→</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', paddingBottom: '4px' }}>
                            <span>TensorFlow / PyTorch</span> <span>→</span>
                        </li>
                    </ul>
                </Link>

                <Link href="/community" className="card-base span-3 hover-lift" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <div style={{ backgroundColor: '#ffe082', padding: '16px', borderRadius: '12px', border: '2px solid black', boxShadow: '2px 2px 0 0 #000' }}>
                            <span style={{ fontSize: '2rem' }}>💖</span>
                        </div>
                        <div className="card-arrow" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', opacity: 0, transition: 'opacity 0.2s' }}>
                            →
                        </div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>Community</h3>
                    <p style={{ color: '#444', flexGrow: 1, lineHeight: 1.5, marginBottom: '16px' }}>Meet the volunteers, students, and contributors making this initiative possible.</p>
                    <div style={{ display: 'flex', marginTop: 'auto', marginBottom: '16px', marginLeft: '0' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid black', backgroundColor: '#bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', zIndex: 4, position: 'relative' }}>👩‍🔬</div>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid black', backgroundColor: '#fbcfe8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', marginLeft: '-8px', zIndex: 3, position: 'relative' }}>🧑‍💻</div>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid black', backgroundColor: '#fef08a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', marginLeft: '-8px', zIndex: 2, position: 'relative' }}>👩‍🔧</div>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid black', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', marginLeft: '-8px', zIndex: 1, position: 'relative' }}>+12</div>
                    </div>
                    <button style={{ width: '100%', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '8px 0', borderRadius: '8px', border: '2px solid black', cursor: 'pointer' }}>
                        Join the Corps
                    </button>
                </Link>

            </div>

            {/* Quick Stats / Info Section */}
            <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '2px solid black', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between' }}>

                <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '24px' }}>Why we built this.</h2>
                    <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
                        Traditional textbooks can be daunting. We believe that building a sustainable, technologically advanced future requires tools that are engaging, highly accessible, and beautifully designed.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        <span style={{ padding: '8px 16px', border: '2px solid black', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800, backgroundColor: 'white' }}>Open Source</span>
                        <span style={{ padding: '8px 16px', border: '2px solid black', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800, backgroundColor: 'white' }}>Community Driven</span>
                        <span style={{ padding: '8px 16px', border: '2px solid black', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800, backgroundColor: 'white' }}>Solarpunk Ethos</span>
                    </div>
                </div>

                {/* Decorative abstract graphic */}
                <div style={{ flex: '1 1 400px', width: '100%', position: 'relative', height: '250px', backgroundColor: 'white', border: '3px solid black', borderRadius: '24px', boxShadow: '8px 8px 0 0 #000', padding: '32px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', right: '-48px', top: '-48px', width: '200px', height: '200px', backgroundColor: '#e1ccfa', borderRadius: '50%', border: '2px solid black', opacity: 0.5, mixBlendMode: 'multiply' }}></div>
                    <div style={{ position: 'absolute', left: '-48px', bottom: '-48px', width: '200px', height: '200px', backgroundColor: '#c8e6c9', borderRadius: '50%', border: '2px solid black', opacity: 0.5, mixBlendMode: 'multiply' }}></div>
                    <div style={{ zIndex: 10, textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '12px' }}>⚙️ + 🌿 = 🚀</div>
                        <div style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '0.05em' }}>Technology for Tomorrow</div>
                    </div>
                </div>

            </div>

        </div>
    );
}
