"use client";

import { useState } from 'react';
import axios from 'axios';
import styles from './facedetection.module.css'; // Adjust the path accordingly

export default function Project1() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Handle face detection API call
  const handleFaceDetection = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post(
        'https://api.api-ninjas.com/v1/facedetect',
        formData,
        {
          headers: {
            'X-Api-Key': 'op0gSgz+rpltUaT0gGtBmA==Jtr4nSkWhpRC67y7', // Replace with your API Key
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data && response.data.faces && response.data.faces.length > 0) {
        setResult(response.data.faces);
      } else {
        setResult([]);
      }
    } catch (error) {
      console.error('Error detecting face:', error);
      alert('An error occurred while detecting faces.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Face Detection Project</h1>

      <div className={styles.uploadContainer}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className={styles.uploadInput}
        />
      </div>

      <button onClick={handleFaceDetection} className={styles.detectButton}>
        Start Face Detection
      </button>

      {loading && <p className={styles.loading}>Processing...</p>}

      {result && result.length > 0 && (
        <div className={styles.resultContainer}>
          <h4>Face Detection Results:</h4>
          {result.map((face, index) => (
            <p key={index}>
              Face {index + 1}: Coordinates: ({face.x}, {face.y}), Width: {face.width}, Height: {face.height}
            </p>
          ))}
        </div>
      )}

      {result && result.length === 0 && (
        <p className={styles.noFaceDetected}>No faces detected in the image.</p>
      )}
    </div>
  );
}
