import { Button, Input, Modal, message } from "antd";
import { useState } from "react";
import { API } from "../../api/api";

const AddVehicleModel = ({ brandId, refetch }) => {
  const [modelName, setModelName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Fixed: Modal state added

  const handleOk = async () => {
    if (!modelName.trim()) {
      message.error("Model name cannot be empty!");
      return;
    }

    const addModel = {
      model_name: modelName,
      status: "Active",
      image: "On The Way",
      brand_id: brandId,
    };

    console.log(addModel);

    setLoading(true);
    try {
      const response = await API.post("/model/create", addModel);
      if (response.status === 200) {
        message.success("Model added Successfully");
        refetch && refetch(); 
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModelName("");
  };

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalOpen(true)}> 
        + Add Vehicle Model
      </Button>
      <Modal
        title="Add Custom Model"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <Input
          placeholder="Enter model name"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default AddVehicleModel;
