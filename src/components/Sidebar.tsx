'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courseData } from '@/lib/courseData';

export default function Sidebar({ activeTopicId }: { activeTopicId?: string }) {
    // Find which unit contains the active topic to expand it initially
    const initialExpandedUnit = courseData.find(u =>
        u.topics?.some(t => t.id === activeTopicId)
    )?.number || null;

    const [expandedUnit, setExpandedUnit] = useState<string | null>(initialExpandedUnit);

    const toggleUnit = (unitNumber: string) => {
        setExpandedUnit(prev => prev === unitNumber ? null : unitNumber);
    };

    return (
        <div className="sidebar">
            {/* Header */}
            <div className="sidebar-header">
                <div style={{ fontWeight: 900, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.2rem' }}>🤖</span> Robotics
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>Unit & Topic Study Guides</div>
                <div style={{ height: '1px', background: '#eee', margin: '15px 0' }}></div>
            </div>

            {/* Topics List */}
            <div className="sidebar-scroll-content">
                {courseData.map(unit => {
                    if (!unit.number) return null;
                    const isExpanded = expandedUnit === unit.number;
                    const arrow = isExpanded ? '▼' : '▶';

                    // Format title similar to "Robot Kinematics"
                    const shortTitle = unit.title.split('–')[0].trim();

                    return (
                        <div key={unit.number} className="sidebar-unit">
                            <div
                                className="sidebar-unit-title"
                                onClick={() => toggleUnit(unit.number as string)}
                                style={{
                                    opacity: isExpanded ? 1 : 0.8,
                                    fontWeight: isExpanded ? 800 : 600
                                }}
                            >
                                <span style={{ fontSize: '0.8rem', width: '20px' }}>{arrow}</span>
                                <span>{isExpanded ? shortTitle : unit.title}</span>
                            </div>

                            {isExpanded && (
                                <ul className="sidebar-topics active">
                                    {unit.topics?.map(topic => (
                                        <li key={topic.id} style={{ marginBottom: '4px' }}>
                                            <Link
                                                href={`/topic/${topic.id}`}
                                                className={topic.id === activeTopicId ? 'active-topic-link' : ''}
                                                style={{
                                                    padding: '8px 12px',
                                                    borderRadius: '6px',
                                                    display: 'block',
                                                    backgroundColor: topic.id === activeTopicId ? '#f0f0f0' : 'transparent',
                                                    color: topic.id === activeTopicId ? 'black' : '#666',
                                                    fontWeight: topic.id === activeTopicId ? 700 : 400,
                                                    textDecoration: 'none',
                                                    borderLeft: topic.id === activeTopicId ? '3px solid black' : '3px solid transparent'
                                                }}
                                            >
                                                <span style={{ marginRight: '8px', opacity: 0.5 }}>{topic.id}</span>
                                                {topic.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="sidebar-footer">
                <div style={{ height: '1px', background: '#eee', margin: '15px 0' }}></div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="sb-btn">🖨 print guide</button>
                    <button className="sb-btn">🐞 report error</button>
                </div>
            </div>
        </div >
    );
}
