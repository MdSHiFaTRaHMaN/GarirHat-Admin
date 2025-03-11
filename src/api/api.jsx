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

// get all vehicles
export const useMyVehicles = ({
  page = 1,
  limit = 10,
  vehicle_code = "",
} = {}) => {
  const getMyVehicles = async () => {
    const response = await API.get("/vehicle/web", {
      params: { page, limit, vehicle_code },
    });
    return response.data;
  };

  const {
    data: response = {},
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["myVehicles", page, limit, vehicle_code],
    queryFn: getMyVehicles,
  });

  const { data: myVehicles = [], pagination = {} } = response;

  return { myVehicles, pagination, isLoading, isError, error, refetch };
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
export const useRequestFeature = () => {
  const getRequestFeature = async () => {
    const response = await API.get("/feature");
    return response.data.data;
  };

  const {
    data: requestFeature = [],
    isLoadingFeature,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["requestFeature"],
    queryFn: getRequestFeature,
  });

  return { requestFeature, isLoadingFeature, isError, error, refetch };
};
// all brand list
export const useAllBrand = () => {
  const getAllBrand = async () => {
    const response = await API.get("/brand/all");
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

//  Brand with model
export const useBrandWithModel = () => {
  const getBrandWithModel = async () => {
    const response = await API.get("/brand/with-model");
    return response.data.data;
  };

  const {
    data: brandWithModel = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["brandWithModel"],
    queryFn: getBrandWithModel,
  });

  return { brandWithModel, isLoading, isError, error, refetch };
};
//   all vendor
export const useAllVendor = () => {
  const getAllVendor = async () => {
    const response = await API.get("/vendor/all");
    return response.data.data;
  };

  const {
    data: allVendor = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allVendor"],
    queryFn: getAllVendor,
  });

  return { allVendor, isLoading, isError, error, refetch };
};
//   single vendor
export const useSingleVendor = (vendorId) => {
  const getSingleVendor = async () => {
    const response = await API.get(`/vendor/${vendorId}`);
    return response.data.data;
  };

  const {
    data: singleVendor = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["singleVendor", vendorId],
    queryFn: getSingleVendor,
  });

  return { singleVendor, isLoading, isError, error, refetch };
};
//   all user
export const useAllUser = () => {
  const getAllUser = async () => {
    const response = await API.get("/user/all");
    return response.data.data;
  };

  const {
    data: allUser = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: getAllUser,
  });

  return { allUser, isLoading, isError, error, refetch };
};
// get Settings
export const useSettings = (settingName) => {
    const getSettings = async () => {
      const response = await API.get(`/settings/${settingName}`);
      return response.data.data;
    };
  
    const {
      data: settings = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["settings", settingName],
      queryFn: getSettings,
    });
  
    return { settings, isLoading, isError, error, refetch };
  };
//   get Single vehicle 
export const useVehicleDetails = (vehicleID) => {
    const getVehicleDetails = async () => {
      const response = await API.get(`/vehicle/${vehicleID}`);
      console.log("response", response)
      return response.data;
    };
  
    const {
      data: vehicleDetails = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["vehicleDetails", vehicleID],
      queryFn: getVehicleDetails,
    });
  
    return { vehicleDetails, isLoading, isError, error, refetch };
  };
  
