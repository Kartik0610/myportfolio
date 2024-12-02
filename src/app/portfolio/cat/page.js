"use client";

import { useState } from 'react';
import axios from 'axios';
import styles from  './cat.module.css'; // Adjust the path accordingly

export default function Project3() {
  const [catName, setCatName] = useState('');
  const [catResult, setCatResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCatSearch = async () => {
    if (!catName) {
      alert("Please enter a cat name.");
      return;
    }

    setLoading(true);
    setCatResult(null);

    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, {
        headers: {
          'x-api-key': 'live_U3xkArJlQVOvXTfSFv66rzvODDZRmLotXNVCFjWxRJcQ6u6BBLAvWiUVKOYOL4B8', // Replace with your API Key
        },
      });

      if (response.data && response.data.length > 0) {
        setCatResult(response.data[0]);
      } else {
        alert("No cat found with that name.");
      }
    } catch (error) {
      console.error('Error fetching cat data:', error);
      alert('An error occurred while fetching cat information.');
      setCatResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cat Information Lookup</h1>

      <input
        type="text"
        placeholder="Enter Cat Name"
        value={catName}
        onChange={(e) => setCatName(e.target.value)}
        className={styles.catInput}
      />

      <button onClick={handleCatSearch} className={styles.catButton}>
        Search Cat
      </button>

      {loading && <p className={styles.loading}>Processing...</p>}

      {catResult && (
        <div className={styles.catResultContainer}>
          <h4>Cat Information:</h4>
          <img src={catResult.image?.url} alt={catResult.name} className={styles.catImage} />
          <p><strong>Name:</strong> {catResult.name}</p>
          <p><strong>Origin:</strong> {catResult.origin}</p>
          <p><strong>Temperament:</strong> {catResult.temperament}</p>
          <p><strong>Description:</strong> {catResult.description}</p>
        </div>
      )}

      {!catResult && (
        <p className={styles.noCatResult}>No cat information found.</p>
      )}
    </div>
  );
}
