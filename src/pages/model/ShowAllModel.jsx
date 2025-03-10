import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { API, useBrandWithModel } from "../../api/api";

const ShowAllModel = () => {
  const { brandWithModel, isLoading, refetch } = useBrandWithModel();
  const [loading, setLoading] = useState(false);

  const handleModelDelete = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this Vehicle Model?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      cancelText: "Cancel",
      okType: "danger",
      onOk: async () => {
        try {
          setLoading(true);
          const response = await API.delete(`/model/delete/${id}`);
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
      },
      onCancel() {
        console.log("Deletion cancelled.");
      },
    });
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
    <div className="space-y-3">
      {brandWithModel?.length > 0 ? ( // Ensure data exists before rendering
        brandWithModel.map((model) => (
          <Collapse
            key={model.id}
            items={[
              {
                key: model.id,
                label: <h1>{model.brand_name}</h1>,
                children: (
                  <div className="grid grid-cols-3 gap-2">
                    {model.models.map((onModel) => (
                      <div
                        key={onModel.id}
                        className="flex justify-between items-center bg-gray-100 p-2 rounded px-5"
                      >
                        <li>{onModel.model_name}</li>
                        <button
                          onClick={() => handleModelDelete(onModel.id)}
                          className="text-red-600"
                          disabled={loading} // Disable button during delete request
                        >
                          <DeleteOutlined />
                        </button>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No models available</p>
      )}
    </div>
  );
};

export default ShowAllModel;
