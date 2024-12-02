import Image from "next/image";
import "../styles/about.css";

export default function AboutPage() {
    return (
      <div className="about-container">
        {/* Background Section */}
        <div className="about-background"></div>

        {/* Content Section */}
        <div className="about-content">
          <div className="about-image">
            <Image
              src="/Kartik.jpeg"
              alt="Kartik's Picture"
              width={150}
              height={150}
              className="profile-image"
            />
          </div>
          <div className="about-text">
            <h1>Kartik - Software Developer</h1>
            <p>
              I am a dedicated and driven professional with a passion for excellence in everything I do.
              With a strong foundation in software development, I strive to deliver innovative solutions 
              and create meaningful impact through my work.
            </p>
            <p>
              As a lifelong learner, I am constantly seeking opportunities to grow and evolve, both 
              personally and professionally. I am passionate about leveraging technology and creativity 
              to solve challenges, foster collaboration, and achieve outstanding results.
            </p>
            <p>
              Beyond my professional life, I enjoy exploring new technologies, mentoring aspiring professionals, 
              and contributing to community initiatives, which help me maintain a balanced and enriching lifestyle.
            </p>
            <p>
              My vision is to inspire and make a positive difference in the world, one step at a time.
            </p>
          </div>
        </div>
      </div>
    );
}
