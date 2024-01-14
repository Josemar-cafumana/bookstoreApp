import { useEffect, useRef, useState } from "react";

const BASE_URL = "`http://openlibrary.org/search.json";

export default function fetchData<T = unknown>(limit: number, title: string) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://openlibrary.org/search.json?title=${title}&limit=${limit}`
        );
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [title, limit]);

  return { isLoading, error, data };
}
