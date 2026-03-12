import Link from 'next/link';
import { courseData } from '@/lib/courseData';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import TopicActions from '@/components/TopicActions';

// Generate segments for all topics
export async function generateStaticParams() {
    const paths: { id: string }[] = [];
    courseData.forEach((unit) => {
        if (unit.topics) {
            unit.topics.forEach((topic) => {
                paths.push({ id: topic.id });
            });
        }
    });
    return paths;
}

// Define types
type TopicPageProps = {
    params: Promise<{ id: string }>;
};

export default async function TopicPage(props: TopicPageProps) {
    const params = await props.params; // Await params in Next.js 15

    // Find the topic and its unit
    let currentTopic = null;
    let currentUnit = null;

    for (const unit of courseData) {
        const found = unit.topics?.find((t) => t.id === params.id);
        if (found) {
            currentTopic = found;
            currentUnit = unit;
            break;
        }
    }

    if (!currentTopic || !currentUnit) {
        notFound();
    }

    // Calculate Previous/Next Topics for navigation
    // Flatten all topics to find prev/next easily
    const allTopics: any[] = [];
    courseData.forEach(u => {
        if (u.topics) allTopics.push(...u.topics);
    });

    const currentIndex = allTopics.findIndex(t => t.id === currentTopic.id);
    const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
    const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

    return (
        <div className="topic-page-layout">
            {/* Sidebar */}
            <Sidebar activeTopicId={params.id} />

            {/* Main Content */}
            <div className="topic-content">
                <div className="breadcrumbs">
                    <Link href="/">Home</Link> &gt; <Link href="/study/robotics">Robotics</Link> &gt; <Link href={`/study/robotics/unit/${currentUnit.number}`}>Unit {currentUnit.number}</Link> &gt; <span>Topic: {currentTopic.id}</span>
                </div>

                <div className="topic-header">
                    <div style={{ fontWeight: 900, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#666', justifyContent: 'center' }}>
                        <span>🤖</span> Robotics Unit {currentUnit.number} Review
                    </div>
                    <h1>{currentTopic.id} {currentTopic.title}</h1>
                </div>

                <div className="topic-meta">
                    Written by the SPC Research & Documentation Team • Last updated February 2026
                </div>

                <TopicActions
                    topicId={currentTopic.id}
                    topicTitle={currentTopic.title}
                    unitNumber={currentUnit.number || ""}
                />

                <div className="topic-body-card">
                    <div className="content-body">
                        {/* Using Lorem Ipsum if content is short/placeholder */}
                        {currentTopic.content === "Content coming soon..." ? (
                            <>
                                <p>Robotic systems rely on a combination of hardware and software components to function effectively. From sensors and actuators to controllers and end effectors, each part plays a crucial role in enabling robots to perceive, process, and interact with their environment.</p>
                                <p>Software is the brain behind robotic operations, encompassing control algorithms, programming languages, and frameworks like ROS. Sensors are the robot's eyes and ears, gathering data about the world around them. Together, these elements form the foundation of modern robotics.</p>
                                <h3>Hardware Components of Robotic Systems</h3>
                                <p>Hardware constitutes the physical structure of the robot. It includes the mechanical parts, electrical components, and the power supply.</p>
                                <ul>
                                    <li><strong>Sensors:</strong> Devices that detect changes in the environment and send the information to the controller.</li>
                                    <li><strong>Actuators:</strong> Motors and drives that are responsible for moving the robot's joints and end-effector.</li>
                                    <li><strong>Controllers:</strong> The computational unit that processes sensor data and sends commands to the actuators.</li>
                                    <li><strong>End-effectors:</strong> The tool attached to the end of the robot arm, used to interact with the environment (e.g., gripper, welder).</li>
                                </ul>
                            </>
                        ) : (
                            <div
                                className="content-body"
                                dangerouslySetInnerHTML={{ __html: currentTopic.content }}
                            />
                        )}
                    </div>
                </div>

                {/* Fixed Navigation Footer */}
                <div className="nav-footer-fixed">
                    {prevTopic ? (
                        <Link href={`/study/robotics/topic/${prevTopic.id}`} className="nav-btn-fixed">
                            {prevTopic.id} ← back
                        </Link>
                    ) : (
                        <Link href={`/study/robotics/unit/${currentUnit.number}`} className="nav-btn-fixed">
                            Unit {currentUnit.number} ← back
                        </Link>
                    )}

                    {nextTopic ? (
                        <Link href={`/study/robotics/topic/${nextTopic.id}`} className="nav-btn-fixed">
                            next → {nextTopic.id}
                        </Link>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}
