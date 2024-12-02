import styles from "../app/styles/home.module.css"; // Correct import

export default function HomePage() {
  return (
    <div className={styles['home-container']}> {/* Use styles.[className] */}
      <div className={styles['home-background']}></div>

      <div className={styles['home-content']}>
        <div className={styles['intro-text']}>
          <h1>Hi, I'm Kartik Pawar</h1>
          <p>Software Developer | Web Enthusiast</p>
          <p>I build innovative, responsive, and user-friendly applications.</p>
        </div>
      </div>
    </div>
  );
}
