import "../styles/resume.css";

export default function ResumePage() {
    return (
        <div className="resume-container">
            {/* Background */}
            <div className="resume-background"></div>

            {/* Content */}
            <div className="resume-content">
                <h1>Kartik Pawar</h1>
                <p>Scarborough, ON | +1 (647) 302-2129 | kartikpawar18000@gmail.com | LinkedIn | GitHub</p>

                <h2>Objective</h2>
                <p>
                    As a first-year computer programming student with hands-on freelance web development experience, 
                    I am seeking a co-op position where I can further enhance my skills in PHP, Laravel, Symfony, C#, CSS, 
                    HTML, JavaScript, and JavaFX. Having successfully managed multiple projects, including feature development, 
                    bug fixes, and performance optimization for various clients, I bring a practical understanding of real-world 
                    software development challenges. I am committed to contributing effectively to your team and am eager to 
                    work in an environment that promotes continuous learning and professional growth.
                </p>

                <h2>Skills</h2>
                <ul>
                    <li>PHP Development: Proficient in building robust backend systems using modern frameworks like Laravel and Symfony.</li>
                    <li>Database Management: Developing skills in database handling and data management strategies to optimize performance.</li>
                    <li>Frontend Design: Skilled in designing intuitive user interfaces using HTML, CSS, and JavaScript.</li>
                    <li>API Integration: Gaining experience in developing and integrating APIs using PHP, C#, and Java.</li>
                    <li>Project Coordination: Understanding project management fundamentals, including planning and execution.</li>
                    <li>JavaFX Applications: Exploring JavaFX to create rich desktop applications integrated with backend systems.</li>
                    <li>Microsoft Office Proficiency: Utilizing tools for documentation, data analysis, and presentations.</li>
                </ul>

                <h2>Education</h2>
                <p>
                    <strong>Associates of Science in Computer Programming</strong><br />
                    Georgian College, Toronto | May 2023 - Present
                </p>

                <h2>Work Experience</h2>
                <p>
                    <strong>Freelance Web Developer</strong><br />
                    <em>Multiple Clients</em><br />
                    Reduced page load times by up to 40%, implemented OAuth authentication, resolved JavaScript errors, 
                    and optimized CSS layouts to enhance cross-browser compatibility and performance.
                </p>
            </div>
        </div>
    );
}
