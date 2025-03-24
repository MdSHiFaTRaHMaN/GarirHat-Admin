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
  vendor_id = ""
} = {}) => {
  const getMyVehicles = async () => {
    const response = await API.get("/vehicle/web", {
      params: { page, limit, vehicle_code, vendor_id},
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
    queryKey: ["myVehicles", page, limit, vehicle_code, vendor_id],
    queryFn: getMyVehicles,
  });

  const { data: myVehicles = [], pagination = {} } = response;

  return { myVehicles, pagination, isLoading, isError, error, refetch };
};

// get all vehicles
export const useAllVehicle = () => {
  const getAllVehicles = async () => {
    const response = await API.get("/vehicle/all?limit=1000000");
    return response.data.data;
  };

  const {
    data: allVehicles = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allVehicles"],
    queryFn: getAllVehicles,
  });

  return { allVehicles, isLoading, isError, error, refetch };
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
//   all user
export const useSingleUser = (userId) => {
  const getSingleUser = async () => {
    const response = await API.get(`/user/${userId}`);
    return response.data.data;
  };

  const {
    data: singleUser = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["singleUser", userId],
    queryFn: getSingleUser,
  });

  return { singleUser, isLoading, isError, error, refetch };
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
  
//   get all divition
export const useAllDivition = () => {
    const getAllDivition = async () => {
      const response = await API.get(`/location/division`);
      return response.data.data;
    };
  
    const {
      data: allDivition = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["allDivition"],
      queryFn: getAllDivition,
    });
  
    return { allDivition, isLoading, isError, error, refetch };
  };
//   get all single user wishlist
export const useUserWishList = (userId) => {
    const getUserWishList = async () => {
      const response = await API.get(`/wishlist/my?user_id=${userId}`);
      return response.data.data;
    };
  
    const {
      data: userWishList = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["userWishList", userId],
      queryFn: getUserWishList,
    });
  
    return { userWishList, isLoading, isError, error, refetch };
  };
  // price reason
export const usePriceReason = () => {
    const getPriceReason = async () => {
      const response = await API.get(`/price-reason/all`);
      return response.data.data;
    };
  
    const {
      data: priceReason = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["priceReason"],
      queryFn: getPriceReason,
    });
  
    return { priceReason, isLoading, isError, error, refetch };
  };

  
