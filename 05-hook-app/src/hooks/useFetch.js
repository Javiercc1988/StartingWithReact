import { useEffect, useState } from "react";

// Objeto local de caché

const localcache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const handleErrorState = () => {
    setState({
      data: null,
      isLoading: false,
      hasError: true,
      error: {
        code: response.status,
        message: response.statusText,
      },
    });
  };

  const handleDataState = (data) => {
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localcache[url]) {
      console.log("Usando caché");

      setState({
        data: localcache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    setLoadingState();

    const response = await fetch(url);

    // sleep
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!response.ok) {
      handleErrorState();

      return;
    }

    const data = await response.json();
    handleDataState(data);

    // Manejo de caché
    localcache[url] = data;
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
