import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(endpoint || "");

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.status !== 200) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        setData(response.data.data);
        // setData(json);
        setError(null);
      } catch (error) {
        //This catches the error if either of the promises fails or the manual error is thrown
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
