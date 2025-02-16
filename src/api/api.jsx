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
// Products list


  export const useAlFeature = () => {
    const getAlFeature = async () => {
      const response = await API.get("/feature/all");
      return response.data.data;
    };
  
    const {
      data: alFeature = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["alFeature"],
      queryFn: getAlFeature,
    });
  
    return { alFeature, isLoading, isError, error, refetch };
  };
  
  