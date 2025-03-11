import { Button, Input, Modal, message } from "antd";
import { useState } from "react";
import { API } from "../../api/api";

const AddVehicleFeature = ({ refetch }) => {
  const [featureName, setFeatureName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = async () => {
    if (!featureName.trim()) {
      message.error("Feature name cannot be empty!");
      return;
    }

    const addFeature = {
      feature_name: featureName,
      status: "active",
      category_id: 1,
    };

    setLoading(true);
    try {
      const response = await API.post("/feature/create", addFeature);
      if (response.status === 200) { // ✅ Fixed: Used "==="
        message.success("Feature added Successfully");
        refetch && refetch(); // ✅ Fixed: Check if refetch exists before calling
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
    } finally {
      setLoading(false); // ✅ Fixed: Always stops loading
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFeatureName("");
  };

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalOpen(true)}> 
        + Add Vehicle Feature
      </Button>
      <Modal
        title="Add Custom Feature"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <Input
          placeholder="Enter Feature name"
          value={featureName}
          onChange={(e) => setFeatureName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default AddVehicleFeature;
