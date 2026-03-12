const fs = require('fs');
const path = require('path');

// Paths
const REPORT_PATH = path.join(__dirname, '../../deep-research-report.md');
const COURSE_DATA_PATH = path.join(__dirname, '../src/lib/courseData.js');

// Helper to convert basic markdown to HTML
function markdownToHtml(markdown) {
    if (!markdown) return "";

    let html = markdown
        // Headers (### 1.1 ...) - Remove the ID/Title line as it's separate in data
        .replace(/^### \d+\.\d+ .*/gm, '')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Links/Citations (e.g., [5†L29-L37]) - Simplify or remove? Let's remove citation markers for clean reading
        .replace(/【.*?】/g, '')
        // Lists
        .replace(/^- (.*)$/gm, '<li>$1</li>')
        // Wrap lists in <ul> (Multi-line list fix is complex in regex, simple approach first)
        // Paragraphs (double newline to <p>)
        .split('\n\n').map(p => {
            p = p.trim();
            if (p.startsWith('<li>')) {
                return `<ul>${p.replace(/\n/g, '')}</ul>`; // Very basic list handling
            }
            if (p.length > 0) return `<p>${p}</p>`;
            return '';
        }).join('');

    return html;
}

// Main logic
try {
    // 1. Read Report
    const reportContent = fs.readFileSync(REPORT_PATH, 'utf8');

    // 2. Read Course Data (We need to manipulate the file content string directly to preserve structure)
    let courseDataContent = fs.readFileSync(COURSE_DATA_PATH, 'utf8');

    // 3. Parse Report
    // Strategy: Split by "### <ID> <Title>"
    const topicRegex = /### (\d+\.\d+) (.*)\r?\n([\s\S]*?)(?=### |\n## |$)/g;
    let match;
    const updates = {}; // ID -> Content

    while ((match = topicRegex.exec(reportContent)) !== null) {
        const id = match[1];
        const rawContent = match[3].trim();
        updates[id] = markdownToHtml(rawContent);
    }

    console.log(`Found ${Object.keys(updates).length} topics to update.`);

    // 4. Update Course Data File
    // We look for patterns like: "id": "1.1", ... "content": "..."
    // And replace the content.

    let updatedDataContent = courseDataContent;

    for (const [id, content] of Object.entries(updates)) {
        // Escaping for JS string (backslashes and quotes)
        const safeContent = content
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/\n/g, ' '); // Flatten newlines for simple string

        // Regex to find the content field for this ID
        // Look for id: "1.1" ... content: "..."
        // This is tricky with regex across lines.
        // Better approach: Find the block for this ID.

        const blockRegex = new RegExp(`("id":\\s*"${id}",[\\s\\S]*?"content":\\s*")(.*?)(")`, 'g');

        if (blockRegex.test(updatedDataContent)) {
            updatedDataContent = updatedDataContent.replace(blockRegex, `$1${safeContent}$3`);
            console.log(`Updated topic ${id}`);
        } else {
            console.warn(`Could not find data block for topic ${id}`);
        }
    }

    // 5. Write back
    fs.writeFileSync(COURSE_DATA_PATH, updatedDataContent, 'utf8');
    console.log('Successfully updated courseData.js');

} catch (err) {
    console.error('Error:', err);
}
