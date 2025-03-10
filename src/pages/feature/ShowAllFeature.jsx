import React, { useState } from "react";
import { API, useAlFeature } from "../../api/api";
import { DeleteOutlined } from "@ant-design/icons";
import { message, Spin } from "antd";

const ShowAllFeature = () => {
  const { alFeature, isLoading, refetch } = useAlFeature();
  const [loading, setLoading] = useState(false);

  const handleFeatureDelete = async (id) => {
    try {
      setLoading(true);
      const response = await API.delete(`/feature/delete/${id}`);
      console.log("responsive", response);
      if (response.status === 200) {
        message.success("Model Deleted Successfully");
        refetch();
      }
    } catch (error) {
      message.error("Failed to delete model");
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Show loader while fetching data
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {alFeature.map((feature) => (
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <li>{feature.feature_name}</li>
            <button
              onClick={() => handleFeatureDelete(feature.id)}
              disabled={loading} 
              className="text-red-600"
            >
              <DeleteOutlined />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllFeature;
