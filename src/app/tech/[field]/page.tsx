import Link from 'next/link';
import { notFound } from 'next/navigation';
import { techStacksData } from '@/lib/techStacksData';

// Generate segments for all fields
export async function generateStaticParams() {
    return Object.keys(techStacksData).map((field) => ({
        field: field,
    }));
}

type TechPageProps = {
    params: Promise<{ field: string }>;
};

export default async function TechPage(props: TechPageProps) {
    const params = await props.params;
    const { field } = params;

    // keyof typeof techStacksData is safer, but simple cast works here given generateStaticParams
    const data = techStacksData[field as keyof typeof techStacksData];

    if (!data) {
        return notFound();
    }

    return (
        <div>
            {/* Hero Section - Replicated from Home Page */}
            <div className="hero">
                <div style={{ textAlign: "center", marginBottom: "40px", position: "relative" }}>
                    <Link
                        href="/tech"
                        className="pill-back-btn"
                    >
                        ← back to fields
                    </Link>
                    <h1>{data.title}</h1>
                    <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#555', maxWidth: '600px', marginInline: 'auto' }}>
                        {data.description}
                    </p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="general-info-section" style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
                <div className="grid-2-col">
                    {data.items.map((item) => (
                        <div key={item.id} className="info-block">
                            <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span>{item.icon}</span>
                                {item.title}
                            </h2>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
