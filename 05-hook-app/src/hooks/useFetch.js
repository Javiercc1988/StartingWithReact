import { useEffect, useState } from "react";

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
