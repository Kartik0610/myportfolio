import Image from "next/image";
import "../styles/contact.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      {/* Background */}
      <div className="contact-background"></div>

      {/* Content */}
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>
          I am always open to opportunities for collaboration, exciting projects, 
          or simply connecting to share ideas. Feel free to reach out using the 
          contact details below or by connecting on social platforms!
        </p>

        <div className="contact-details">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <strong>Phone:</strong> +1 (647) 302-2129
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:kartikpawar18000@gmail.com">
                kartikpawar18000@gmail.com
              </a>
            </li>
            <li>
              <strong>Location:</strong> Scarborough, ON
            </li>
          </ul>
        </div>

        {/* Social Media Logos */}
        <div className="social-logos">
          <a
            href="https://www.instagram.com/ikartikpawar/profilecard/?igsh=dGl5djVmZ2Z6bDA1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-logo"
          >
            <Image
              src="/instagram.png"  // Add Instagram logo in the public folder
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://github.com/Kartik0610"
            target="_blank"
            rel="noopener noreferrer"
            className="social-logo"
          >
            <Image
              src="/github.png"  // Add GitHub logo in the public folder
              alt="GitHub"
              width={40}
              height={40}
            />
          </a>
          <a
            href="www.linkedin.com/in/kartik-pawar-343036282"
            target="_blank"
            rel="noopener noreferrer"
            className="social-logo"
          >
            <Image
              src="/linkedin.png"  // Add LinkedIn logo in the public folder
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </a>
        </div>

        {/* Profile Picture */}
        <div className="contact-image">
          <Image
            src="/kartik.PNG"  // Add your personal photo in the public folder
            alt="Kartik Pawar"
            width={150}
            height={150}
            className="profile-pic"
          />
        </div>
      </div>
    </div>
  );
}
