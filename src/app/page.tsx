import Link from "next/link";
import { courseData } from "@/lib/courseData";

export default function Home() {
  // Filter only units that have a number (skip intro/general info if any)
  const units = courseData.filter((u) => u.number);

  return (
    <div>
      <div className="hero">
        <div style={{ textAlign: "center", marginBottom: "40px", position: "relative" }}>
          <Link
            href="#"
            style={{
              position: "absolute",
              top: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#666",
              textDecoration: "underline",
            }}
          >
            ← back to robotics
          </Link>

          <h1>robotics study guides</h1>
        </div>
      </div>

      <div id="units-container">
        {units.map((unit) => (
          <div key={unit.number} className="unit-section">
            <div className="unit-header">
              <Link href={`/unit/${unit.number}`} className="unit-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                Unit {unit.number} – {unit.title} &nbsp; <span className="unit-arrow">→</span>
              </Link>
            </div>

            <div className="unit-topics-grid">
              {unit.topics?.map((topic) => (
                <Link key={topic.id} href={`/topic/${topic.id}`} className="topic-card">
                  <span className="topic-badge">{topic.id}</span>
                  <span className="topic-title">{topic.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* General Info Section */}
      {/* Bento Grid Content */}
      <div className="general-info-section" style={{ marginTop: '80px', marginBottom: '100px' }}>
        <div className="bento-grid">

          {/* Main Intro - 8 cols (White) */}
          <div className="card-base card-white span-8">
            <h2>What do you learn in Robotics?</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Robotics covers the design, construction, and operation of robots. You'll learn about kinematics, dynamics, control systems, and sensor integration. The course dives into programming autonomous behaviors, machine vision, and artificial intelligence. You'll also explore robot mechanics, actuators, and end-effectors, all while getting hands-on experience building and programming real robots.
            </p>
          </div>

          {/* Is it hard? - 4 cols (Pink Alert) */}
          <div className="card-base card-pink span-4">
            <h2>Is Robotics hard? 🤯</h2>
            <p style={{ marginTop: '15px', lineHeight: '1.5' }}>
              Robotics can be challenging, but it's also super rewarding. The math and physics can get pretty intense, especially when dealing with complex kinematics and control systems. Programming can be tricky too, especially if you're new to it. But honestly, the coolest part is seeing your robot come to life – that makes all the hard work worth it. Plus, the hands-on projects are usually fun enough to keep you motivated.
            </p>
          </div>

          {/* Tips - 6 cols (Yellow Sticky Note) */}
          <div className="card-base card-yellow span-6">
            <h2>Tips for taking Robotics in college 🌶️</h2>
            <ul className="styled-list" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>✅ Use Fiveable Study Guides to help you cram</li>
              <li style={{ marginBottom: '10px' }}>💻 Practice programming regularly – don't just rely on class time</li>
              <li style={{ marginBottom: '10px' }}>🤝 Form a study group for tackling complex problems (inverse kinematics can be a real pain)</li>
              <li style={{ marginBottom: '10px' }}>🛠️ Get hands-on with Arduino or Raspberry Pi projects outside of class</li>
              <li style={{ marginBottom: '10px' }}>📺 Watch YouTube channels like "The Coding Train" for extra coding help</li>
              <li style={{ marginBottom: '10px' }}>🤖 Check out "I, Robot" or "Ex Machina" for some robotic inspiration</li>
              <li>📚 Read "Introduction to Autonomous Robots" by Nikolaus Correll for a solid foundation</li>
            </ul>
          </div>

          {/* Pre-requisites - 6 cols (Blue) */}
          <div className="card-base card-blue span-6">
            <h2>Common pre-requisites for Robotics</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div className="pill-item" style={{ display: 'block', padding: '15px', height: 'auto', borderRadius: '12px' }}>
                <strong>📐 Linear Algebra:</strong> Covers vector spaces, matrices, and linear transformations. Essential for understanding robot kinematics and control systems.
              </div>
              <div className="pill-item" style={{ display: 'block', padding: '15px', height: 'auto', borderRadius: '12px' }}>
                <strong>∫ Differential Equations:</strong> Focuses on solving equations involving derivatives. Crucial for modeling dynamic systems in robotics.
              </div>
              <div className="pill-item" style={{ display: 'block', padding: '15px', height: 'auto', borderRadius: '12px' }}>
                <strong>🐍 Programming (C++ or Python):</strong> Introduces fundamental programming concepts and syntax. Vital for implementing robot control algorithms and behaviors.
              </div>
            </div>
          </div>

          {/* Similar Classes & Majors - 12 cols (Split Layout) */}
          <div className="card-base card-white span-12">
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {/* Similar Classes */}
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Classes similar to Robotics</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                  <div className="pill-item" style={{ display: 'block', padding: '12px', background: '#f5f5f5', height: 'auto', borderRadius: '8px' }}>
                    <strong>👁️ Computer Vision:</strong> Explores techniques for extracting information from digital images and video. You'll learn about image processing, feature detection, and object recognition.
                  </div>
                  <div className="pill-item" style={{ display: 'block', padding: '12px', background: '#f5f5f5', height: 'auto', borderRadius: '8px' }}>
                    <strong>🧠 Machine Learning:</strong> Covers algorithms that enable computers to learn from data. You'll study neural networks, decision trees, and other techniques used in AI.
                  </div>
                  <div className="pill-item" style={{ display: 'block', padding: '12px', background: '#f5f5f5', height: 'auto', borderRadius: '8px' }}>
                    <strong>🎛️ Control Systems:</strong> Focuses on designing systems that manage, command, or regulate other devices. You'll learn about feedback loops, stability analysis, and controller design.
                  </div>
                  <div className="pill-item" style={{ display: 'block', padding: '12px', background: '#f5f5f5', height: 'auto', borderRadius: '8px' }}>
                    <strong>🔌 Embedded Systems:</strong> Deals with designing computer systems for specific functions within larger mechanical or electrical systems. You'll work with microcontrollers and real-time operating systems.
                  </div>
                </div>
              </div>

              {/* Related Majors */}
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Majors related to Robotics</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                  <div className="pill-item" style={{ display: 'block', padding: '12px', background: '#ffe0b2', height: 'auto', borderRadius: '8px' }}>
                    <strong>⚙️ Mechanical Engineering:</strong> Focuses on designing, manufacturing, and maintaining mechanical systems. Students learn about materials, thermodynamics, and machine design.
                  </div>
                  <div className="pill-item" style={{ display: 'block', padding: '12px', background: '#c8e6c9', height: 'auto', borderRadius: '8px' }}>
                    <strong>⚡ Electrical Engineering:</strong> Concentrates on electrical systems, circuits, and electronics. Students study power systems, signal processing, and control theory.
                  </div>
                  <div className="pill-item" style={{ display: 'block', padding: '12px', background: '#bbdefb', height: 'auto', borderRadius: '8px' }}>
                    <strong>💻 Computer Science:</strong> Emphasizes the theory and practice of computing. Students learn programming, algorithms, and software engineering principles.
                  </div>
                  <div className="pill-item" style={{ display: 'block', padding: '12px', background: '#e1bee7', height: 'auto', borderRadius: '8px' }}>
                    <strong>🤖 Mechatronics:</strong> Combines mechanical, electrical, and computer engineering. Students learn to design and build smart electromechanical systems.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Careers - 12 cols (Purple) */}
          <div className="card-base card-purple span-12">
            <h2 style={{ textAlign: 'center' }}>What can you do with a degree in Robotics?</h2>
            <div className="career-grid">
              <div className="career-card">
                <span className="career-icon">👷</span>
                <strong>Robotics Engineer</strong>
                <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>Designs, builds, and maintains robotic systems for various industries. They might work on anything from manufacturing robots to autonomous vehicles.</p>
              </div>
              <div className="career-card">
                <span className="career-icon">🏭</span>
                <strong>Automation Engineer</strong>
                <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>Develops systems to improve efficiency and reduce human intervention in industrial processes. They often work with PLCs, sensors, and control systems.</p>
              </div>
              <div className="career-card">
                <span className="career-icon">🧠</span>
                <strong>AI Research Scientist</strong>
                <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>Investigates and develops new algorithms and techniques for artificial intelligence. They might work on machine learning models, natural language processing, or computer vision systems.</p>
              </div>
              <div className="career-card">
                <span className="career-icon">🚁</span>
                <strong>Drone Developer</strong>
                <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>Designs and programs unmanned aerial vehicles for various applications. They work on flight control systems, navigation algorithms, and payload integration.</p>
              </div>
            </div>
          </div>

          {/* FAQs - 12 cols (Transparent/Minimal) */}
          <div className="span-12" style={{ marginTop: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>Robotics FAQs</h2>
            <div className="faq-list">
              <div className="faq-box">
                <h3>Do I need to be good at math for Robotics?</h3>
                <p>A strong math background definitely helps, especially in areas like linear algebra and calculus. But don't worry, you'll pick up the necessary skills as you go.</p>
              </div>
              <div className="faq-box">
                <h3>What programming languages are used in Robotics?</h3>
                <p>Python and C++ are the most common, but it can vary. Some courses might also introduce you to ROS (Robot Operating System).</p>
              </div>
              <div className="faq-box">
                <h3>Can I take Robotics if I have no prior experience?</h3>
                <p>Absolutely! Most intro courses assume no prior robotics knowledge. Just be prepared to put in some extra effort if you're new to programming or engineering concepts.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
