import { useEffect, useState, useCallback } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const res = await makeRequest.get(url);
      setState({ data: res.data.data, loading: false, error: false });
    } catch (err) {
      setState({ data: null, loading: false, error: true });
    }
  }, [url]);

  useEffect(() => {
    fetchData();

    // Cleanup function to avoid setting state on unmounted component
    return () => {
      setState((prev) => ({ ...prev, loading: false }));
    };
  }, [fetchData]);

  return state;
};

export default useFetch;
