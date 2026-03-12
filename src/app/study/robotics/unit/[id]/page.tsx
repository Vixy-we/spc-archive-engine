import Link from 'next/link';
import { courseData } from '@/lib/courseData';
import { notFound } from 'next/navigation';

// Generate segments for all units
export async function generateStaticParams() {
    return courseData
        .filter((unit) => unit.number)
        .map((unit) => ({
            id: unit.number,
        }));
}

type UnitPageProps = {
    params: Promise<{ id: string }>;
};

export default async function UnitPage(props: UnitPageProps) {
    const params = await props.params;
    const unit = courseData.find((u) => u.number === params.id);

    if (!unit) {
        notFound();
    }

    // Calculate Previous/Next Units for navigation
    const unitsOnly = courseData.filter(u => u.number);
    const currentIndex = unitsOnly.findIndex(u => u.number === unit.number);
    const prevUnit = currentIndex > 0 ? unitsOnly[currentIndex - 1] : null;
    const nextUnit = currentIndex < unitsOnly.length - 1 ? unitsOnly[currentIndex + 1] : null;

    // Fallback content if no review text
    const reviewContent = unit.review || `
    <h3>Unit Overview</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `;

    return (
        <div>
            <div className="breadcrumbs">
                <Link href="/">Home</Link> &gt; <Link href="/study/robotics">Robotics</Link> &gt; <span>Unit {unit.number}</span>
            </div>

            <div className="unit-section" style={{ borderBottom: 'none' }}>
                <div className="unit-header" style={{ cursor: 'default' }}>
                    Unit {unit.number} – {unit.title}
                </div>

                <div className="unit-topics-grid">
                    {unit.topics?.map((topic) => (
                        <Link key={topic.id} href={`/study/robotics/topic/${topic.id}`} className="topic-card">
                            <span className="topic-badge">{topic.id}</span>
                            <span className="topic-title">{topic.title}</span>
                        </Link>
                    ))}
                </div>

                <div style={{ marginTop: '40px' }} className="content-body" dangerouslySetInnerHTML={{ __html: reviewContent }} />
            </div>

            {/* Navigation Footer */}
            <div className="nav-footer">
                {prevUnit ? (
                    <Link href={`/study/robotics/unit/${prevUnit.number}`} className="nav-btn">
                        ← Back
                    </Link>
                ) : (
                    <div></div> // Spacer
                )}

                {nextUnit ? (
                    <Link href={`/study/robotics/unit/${nextUnit.number}`} className="nav-btn">
                        Next →
                    </Link>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}
