import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const useFetch = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
