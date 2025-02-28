import React, { useEffect, useState } from 'react';

function GetData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
        const result = await response.json();
        
        // Simulating a 3-second loader before updating the state
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 6b  000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Runs only once when the component mounts

  return (
    <div>
      {loading ? (
        <img src="https://cdn.dribbble.com/userupload/21806971/file/original-9efcd52faf0c5cd58ba09ddfb1de393c.gif" alt="Loading..." /> 
      ) : (
        <h2>{data?.name}</h2>
      )}
    </div>
  );
}

export default GetData;
