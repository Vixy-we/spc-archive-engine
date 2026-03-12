import Link from 'next/link';

type StudyPageProps = {
    params: Promise<{ topic: string }>;
};

export default async function StudyComingSoonPage(props: StudyPageProps) {
    const params = await props.params;
    const { topic } = params;

    // Convert slug (e.g., ai-ml) to display text (e.g., Ai Ml)
    const displayName = topic.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '20px'
        }}>

            <div style={{ position: "relative", marginBottom: "60px", width: "100%" }}>
                <Link
                    href="/"
                    className="pill-back-btn"
                >
                    ← back to home
                </Link>
            </div>

            <div className="card-base card-white" style={{ maxWidth: '600px', padding: '50px 30px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '10px' }}>🚧</div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>
                    {displayName} Study Guide
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
                    We're currently building out our comprehensive resources for this fascinating topic. Check back soon!
                </p>

                <div className="pill-container" style={{ justifyContent: 'center' }}>
                    <span className="pill-item" style={{ background: '#fce4ec', border: '2px solid black' }}>
                        Drafting Curriculum
                    </span>
                    <span className="pill-item" style={{ background: '#fff9c4', border: '2px solid black' }}>
                        Gathering Resources
                    </span>
                </div>
            </div>
        </div>
    );
}

// Optional: Pre-define the static params to ensure these pages generate cleanly at build time
export function generateStaticParams() {
  return [
    { topic: 'robotics' },
    { topic: 'ai-ml' },
    { topic: 'sustainability' },
    { topic: 'emerging-tech' },
  ];
}
