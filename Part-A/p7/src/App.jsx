import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Random Car Images</h2>
      <div>
        {data.map((item, index) => (
          <img
            key={index}
            src={item.url}
            alt="A cat"
            width="200"
            style={{ margin: "10px", borderRadius: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
