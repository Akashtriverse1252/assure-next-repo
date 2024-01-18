"use client"
import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.assurepathlabs.com/api/algos/booking_submit_api.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      {data && (
        <div>
          {/* Render the data from the API */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          {/* Display the error message if the API request fails */}
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
