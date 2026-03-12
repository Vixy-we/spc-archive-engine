"use client";

import { useState } from 'react';

type TopicActionsProps = {
    topicId: string;
    topicTitle: string;
    unitNumber: string;
};

export default function TopicActions({ topicId, topicTitle, unitNumber }: TopicActionsProps) {
    const [citationFormat, setCitationFormat] = useState<'APA' | 'MLA'>('APA');
    const [showCopied, setShowCopied] = useState(false);

    const handlePrint = () => {
        window.print();
    };

    const handleCopyCitation = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();

        let citation = "";
        if (citationFormat === 'APA') {
            citation = `SPC Research Team. (${year}, ${month} ${day}). ${topicTitle}. SPC Robotics Study Guide. Retrieved from ${window.location.href}`;
        } else {
            citation = `SPC Research Team. "${topicTitle}." SPC Robotics Study Guide, ${day} ${month} ${year}, ${window.location.href}.`;
        }

        navigator.clipboard.writeText(citation).then(() => {
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 2000);
        });
    };

    const toggleFormat = () => {
        setCitationFormat(prev => prev === 'APA' ? 'MLA' : 'APA');
    };

    return (
        <div className="action-buttons">
            <button className="btn btn-primary-pill" onClick={handlePrint}>
                ✏️ create visual cheatsheet
            </button>
            <button className="btn" onClick={handlePrint}>
                🖨️ print study guide
            </button>
            <button className="btn" onClick={handleCopyCitation} style={{ position: 'relative' }}>
                📋 copy citation
                {showCopied && (
                    <span style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'black',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        whiteSpace: 'nowrap'
                    }}>
                        Copied!
                    </span>
                )}
            </button>
            <button className="btn" onClick={toggleFormat}>
                {citationFormat} ▼
            </button>
        </div>
    );
}
