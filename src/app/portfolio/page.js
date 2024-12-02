"use client";

import Link from 'next/link';
import styles from '../styles/portfolio.module.css'; // Correct path to your CSS module

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Portfolio</h1>

      <div className={styles.projectLinks}>
        <h2>Projects:</h2>
        <ul>
          <li>
            <Link href="/portfolio/facedetection" className={styles.projectLink}>
              Project 1: Face Detection
            </Link>
          </li>
          <li>
            <Link href="/portfolio/zipcode" className={styles.projectLink}>
              Project 2: ZIP Code Lookup
            </Link>
          </li>
          <li>
            <Link href="/portfolio/cat" className={styles.projectLink}>
              Project 3: Cat Information Lookup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
