"use client";

import styles from '../styles/blog.module.css'; // Ensure the correct path to the CSS file

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Blog</h1>
      <p className={styles.introText}>
        Explore my latest thoughts on technology, AI, and eco-friendly innovations.
      </p>

      <div className={styles.blogLinksContainer}>
        {/* Blog 1 */}
        <div className={styles.blogLink}>
          <img
            src="/blog.jpeg"
            alt="Tech on the Go"
            className={styles.blogImage}
          />
          <a
            href="https://medium.com/@kxrtik.18/tech-on-the-go-69a6e8095922"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.blogLinkButton}
          >
            Tech on the Go
          </a>
        </div>

        {/* Blog 2 */}
        <div className={styles.blogLink}>
          <img
            src="/blog2.jpeg"
            alt="AI Explained"
            className={styles.blogImage}
          />
          <a
            href="https://medium.com/@kxrtik.18/ai-explained-7a05c9a6c785"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.blogLinkButton}
          >
            AI Explained
          </a>
        </div>

        {/* Blog 3 */}
        <div className={styles.blogLink}>
          <img
            src="/blog3.jpeg"
            alt="Eco Tech Innovat"
            className={styles.blogImage}
          />
          <a
            href="https://medium.com/@kxrtik.18/eco-tech-innovat-9367a09bba72"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.blogLinkButton}
          >
            Eco Tech Innovat
          </a>
        </div>
      </div>
    </div>
  );
}
