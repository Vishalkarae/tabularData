import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Async function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');  // Fetch data from API
      setData(response.data);  // Set data state with the response
    } catch (err) {
      setError(err.message);  // Handle any error
    } finally {
      setLoading(false);  // Set loading to false whether successful or error
    }
  };

  useEffect(() => {
    fetchData();  // Call the fetchData function on component mount
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;