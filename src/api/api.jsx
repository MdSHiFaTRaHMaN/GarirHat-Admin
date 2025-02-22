import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const API = axios.create({
  baseURL: "https://api.garirhat.com/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// alLocation list
  export const useAlLocation = () => {
    const getAlLocation = async () => {
      const response = await API.get("/location/division_districts_upazilas");
      return response.data.data;
    };
  
    const {
      data: alLocation = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["alLocation"],
      queryFn: getAlLocation,
    });
  
    return { alLocation, isLoading, isError, error, refetch };
  };

// AlFeature list
  export const useAlFeature = () => {
    const getAlFeature = async () => {
      const response = await API.get("/feature/all");
      return response.data.data;
    };
  
    const {
      data: alFeature = [],
      isLoadingFeature,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["alFeature"],
      queryFn: getAlFeature,
    });
  
    return { alFeature, isLoadingFeature, isError, error, refetch };
  };
  
  
// all brand list
  export const useAllBrand = () => {
    const getAllBrand = async () => {
      const response = await API.get("/brand");
      return response.data.data;
    };
  
    const {
      data: allBrand = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["allBrand"],
      queryFn: getAllBrand,
    });
  
    return { allBrand, isLoading, isError, error, refetch };
  };

// all Model with Single brand 

export const useModelByBrand = (brandID) => {
  const getModelByBrand = async () => {
    // const response = await API.get(`/model/all?brand_id=${brandID}`);
    const response = await API.get(`/model?brand_id=${brandID}`);
    return response.data;
  };
  const {
    data: modelByBrand = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["modelByBrand", brandID],
    queryFn: getModelByBrand,
  });
  return { modelByBrand, isLoading, isError, error, refetch };
};
  

export const usePriceReason = () => {
  const getPriceReason = async () => {
    const response = await API.get("/price-reason/all");
    return response.data.data;
  };

  const {
    data: priceReason = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["PriceReason"],
    queryFn: getPriceReason,
  });

  return { priceReason, isLoading, isError, error, refetch };
};

  