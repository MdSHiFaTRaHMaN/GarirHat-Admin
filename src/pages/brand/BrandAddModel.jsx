import { Button, Modal, Input, message } from "antd";
import React, { useState } from "react";
import { API } from "../../api/api";

const BrandAddModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (!brandName.trim()) {
      message.error("Brand name cannot be empty!");
      return;
    }
    const addBrand = {
      brand_name: brandName,
      status: "pending",
      image: "On The Way",
    };

    setLoading(true);
    try {
      const response = await API.post("/Brand/create", addBrand);
      if (response.status === 200) {
        message.success("Brand added successfully");
      }
      // Assuming you want to trigger some refetch or reload here
      // If using a hook like useQuery, you'd call refetch here
      setLoading(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setBrandName(""); // Clear input after modal close
  };

  return (
    <div>
      <Button
        onClick={showModal}
        className="bg-blue-600 hover:!bg-blue-800 !text-white font-semibold"
      >
        + Add Brand
      </Button>
      <Modal
        title="Add Custom Brand"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <Input
          placeholder="Enter Brand name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default BrandAddModel;
