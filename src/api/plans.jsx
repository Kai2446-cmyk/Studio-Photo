// src/components/Plans.jsx
import React, { useEffect, useState } from 'react';
import { fetchPackages } from '../api/api';

function Plans() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await fetchPackages();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    getPackages();
  }, []);

  return (
    <div className="Plans">
      <h1>Packages</h1>
      <ul>
        {packages.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Plans;
