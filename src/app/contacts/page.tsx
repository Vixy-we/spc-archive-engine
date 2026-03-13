'use client';

import { Mail, MapPin, Linkedin, Instagram, Twitter, Github, Globe, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactsPage() {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 80px 20px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* Header Section */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{
                    backgroundColor: '#e1ccfa',
                    border: '2px solid black',
                    borderRadius: '9999px',
                    padding: '8px 20px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                    marginBottom: '32px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    👋 Get in Touch
                </span>
                
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    Connect with the <span style={{ color: '#6b21a8' }}>Corps</span>.
                </h1>
                
                <p style={{ fontSize: '1.25rem', color: '#444', maxWidth: '700px', marginInline: 'auto', lineHeight: 1.6 }}>
                    Have questions about our modules, want to collaborate, or just want to say hi? 
                    We're always open to new connections and sustainable ideas.
                </p>
            </div>

            {/* Contacts Bento Grid */}
            <div className="bento-grid" style={{ gridTemplateRows: 'auto auto' }}>
                
                {/* Email Card */}
                <div className="card-base span-6" style={{ 
                    backgroundColor: 'white', 
                    padding: '40px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ 
                        position: 'absolute', 
                        top: '-20px', 
                        right: '-20px', 
                        width: '120px', 
                        height: '120px', 
                        backgroundColor: '#e1ccfa', 
                        borderRadius: '50%', 
                        opacity: 0.3,
                        filter: 'blur(30px)'
                    }}></div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ 
                            backgroundColor: '#e1ccfa', 
                            padding: '12px', 
                            borderRadius: '12px', 
                            border: '2px solid black',
                            boxShadow: '3px 3px 0px 0px black'
                        }}>
                            <Mail size={32} />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Email Us</h2>
                    </div>
                    
                    <p style={{ color: '#666', marginBottom: '12px', fontSize: '1.1rem' }}>Principal communication channel for official inquiries:</p>
                    <a href="mailto:solarpunkcorps@gmail.com" style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 700, 
                        color: 'black', 
                        textDecoration: 'none',
                        wordBreak: 'break-all',
                        transition: 'color 0.2s'
                    }} onMouseOver={(e) => e.currentTarget.style.color = '#6b21a8'} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
                        solarpunkcorps@gmail.com
                    </a>
                </div>

                {/* Location Card */}
                <div className="card-base span-6" style={{ 
                    backgroundColor: 'white', 
                    padding: '40px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                     <div style={{ 
                        position: 'absolute', 
                        bottom: '-20px', 
                        left: '-20px', 
                        width: '120px', 
                        height: '120px', 
                        backgroundColor: '#c8e6c9', 
                        borderRadius: '50%', 
                        opacity: 0.3,
                        filter: 'blur(30px)'
                    }}></div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ 
                            backgroundColor: '#c8e6c9', 
                            padding: '12px', 
                            borderRadius: '12px', 
                            border: '2px solid black',
                            boxShadow: '3px 3px 0px 0px black'
                        }}>
                            <MapPin size={32} />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Our Base</h2>
                    </div>

                    <p style={{ color: '#666', marginBottom: '16px', fontSize: '1.1rem' }}>Located at the heart of engineering excellence:</p>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'black', lineHeight: 1.5 }}>
                        Mechanical Engineering Department<br />
                        Bundelkhand Institute of Engineering & Technology<br />
                        Jhansi, Uttar Pradesh, India
                    </div>
                </div>

                {/* Social Links Card */}
                <div className="card-base span-12" style={{ 
                    backgroundColor: 'white', 
                    padding: '40px',
                    border: '3px solid black',
                    boxShadow: '8px 8px 0px 0px black'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '12px' }}>Social Ecosystem</h2>
                        <p style={{ color: '#666' }}>Follow our journey across the web for updates and insights.</p>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                        gap: '20px' 
                    }}>
                        <SocialLink 
                            href="https://www.linkedin.com/company/solarpunk-corps/" 
                            icon={<Linkedin size={24} />} 
                            label="LinkedIn" 
                            color="#0077b5"
                        />
                        <SocialLink 
                            href="https://www.instagram.com/we.the.spc/" 
                            icon={<Instagram size={24} />} 
                            label="Instagram" 
                            color="#e4405f"
                        />
                        <SocialLink 
                            href="https://x.com/SolarpunkCorps" 
                            icon={<Twitter size={24} />} 
                            label="Twitter / X" 
                            color="#000000"
                        />
                        <SocialLink 
                            href="https://github.com/SolarpunkCorps" 
                            icon={<Github size={24} />} 
                            label="GitHub" 
                            color="#333"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div style={{ textAlign: 'center', borderTop: '2px solid black', paddingTop: '40px', marginTop: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>⚙️🌿🚀</div>
                <p style={{ fontWeight: 800, fontSize: '1.25rem', color: 'black' }}>
                    Solarpunk Corps • Building a Sustainable Future
                </p>
            </div>
        </div>
    );
}

function SocialLink({ href, icon, label, color }: { href: string, icon: React.ReactNode, label: string, color: string }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '20px', 
                borderRadius: '16px', 
                border: '2px solid black', 
                textDecoration: 'none', 
                color: 'black',
                fontWeight: 700,
                fontSize: '1.1rem',
                transition: 'all 0.2s ease',
                backgroundColor: 'white'
            }}
            className="social-link"
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `6px 6px 0px 0px ${color || 'black'}`;
                e.currentTarget.style.borderColor = color || 'black';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'black';
            }}
        >
            <div style={{ 
                color: 'white', 
                backgroundColor: color || 'black', 
                padding: '10px', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {icon}
            </div>
            {label}
        </a>
    );
}
