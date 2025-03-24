import { Button, Modal, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { API } from "../../api/api";
import { EditOutlined } from "@ant-design/icons";

const { Option } = Select;

const UpdatePriceReason = ({ id, record, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await API.put(`/price-reason/update/${id}`, values);
      refetch();
      setVisible(false);
    } catch (error) {
      console.error("Failed to update price reason:", error);
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Update Price Reason"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            name: record.name,
            status: record.status,
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select the status!" }]}
          >
            <Select placeholder="Select status">
              <Option value="pending">Pending</Option>
              <Option value="approved">Approved</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdatePriceReason;
