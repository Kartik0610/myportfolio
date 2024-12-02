"use client";

import { useState } from 'react';
import axios from 'axios';
import styles from './zipcode.module.css'; // Adjust the path accordingly

export default function Project2() {
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipResult, setZipResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleZipCodeSearch = async () => {
    if (!zipCode && !city) {
      alert("Please provide either a ZIP Code or a city name.");
      return;
    }

    setLoading(true);
    setZipResult(null);

    try {
      const response = await axios.get(
        'https://api.api-ninjas.com/v1/zipcode',
        {
          params: {
            zip: zipCode,
            city: city,
            state: state,
          },
          headers: {
            'X-Api-Key': 'op0gSgz+rpltUaT0gGtBmA==Jtr4nSkWhpRC67y7', // Replace with your API Key
          },
        }
      );

      setZipResult(response.data);
    } catch (error) {
      console.error('Error fetching ZIP code data:', error);
      alert('An error occurred while fetching ZIP code data.');
      setZipResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ZIP Code Lookup Project</h1>

      <div className={styles.zipInputs}>
        <input
          type="text"
          placeholder="Enter ZIP Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className={styles.zipInput}
        />
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.zipInput}
        />
        <input
          type="text"
          placeholder="Enter State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={styles.zipInput}
        />
      </div>

      <button onClick={handleZipCodeSearch} className={styles.zipButton}>
        Search ZIP Code
      </button>

      {loading && <p className={styles.loading}>Processing...</p>}

      {zipResult && zipResult.length > 0 && (
        <div className={styles.zipResultContainer}>
          <h4>ZIP Code Results:</h4>
          {zipResult.map((zipcode, index) => (
            <div key={index} className={styles.zipResultItem}>
              <p><strong>ZIP Code:</strong> {zipcode.zip_code}</p>
              <p><strong>City:</strong> {zipcode.city}</p>
              <p><strong>State:</strong> {zipcode.state}</p>
              <p><strong>County:</strong> {zipcode.county}</p>
              <p><strong>Timezone:</strong> {zipcode.timezone}</p>
              <p><strong>Area Codes:</strong> {zipcode.area_codes.join(", ")}</p>
            </div>
          ))}
        </div>
      )}

      {zipResult && zipResult.length === 0 && (
        <p className={styles.noZipResult}>No ZIP code results found.</p>
      )}
    </div>
  );
}
