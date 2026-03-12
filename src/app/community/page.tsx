import Link from 'next/link';
import { communityData } from '@/lib/communityData';

/* Reusable section component for consistency */
function CommunitySection({ title, people }: { title: string, people: any[] }) {
    if (!people || people.length === 0) return null;

    // Transform title: "Special Shoutouts" -> ". Special_Shoutouts"
    // Ensuring no double spaces by trimming first
    const displayTitle = ". " + title.trim().replace(/ /g, "_");

    return (
        <div className="unit-section" style={{ marginBottom: '60px' }}>
            <div className="unit-header" style={{
                cursor: 'default',
                textTransform: 'none',
                fontSize: '2rem',
                fontWeight: '900',
                letterSpacing: '-1px',
                marginBottom: '30px',
                color: 'black'
            }}>
                {displayTitle}
            </div>

            <div className="grid-2-col">
                {people.map((person) => (
                    <div key={person.id} className="info-block" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        {/* Avatar */}
                        <img
                            src={person.avatar}
                            alt={person.name}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                border: '2px solid black',
                                backgroundColor: '#f0f0f0'
                            }}
                        />

                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem' }}>{person.name}</h3>
                            <span style={{
                                background: '#e0cbfb',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                fontWeight: 'bold',
                                border: '1px solid black'
                            }}>
                                {person.role}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CommunityPage() {
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

                    <h1>community & contributors</h1>
                    <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#555' }}>
                        The amazing people who make this possible.
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <div className="general-info-section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <CommunitySection title="Contributors" people={communityData.contributors} />
                <CommunitySection title="Volunteers" people={communityData.volunteers} />
                <CommunitySection title="Special Shoutouts" people={communityData.shoutouts} />
            </div>
        </div>
    );
}
