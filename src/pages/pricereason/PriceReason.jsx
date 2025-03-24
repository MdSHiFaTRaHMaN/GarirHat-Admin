import React from "react";
import { API, usePriceReason } from "../../api/api";
import { Table, Button, Modal, message, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import UpdatePriceReason from "./UpdatePriceReason";

const PriceReason = () => {
  const { priceReason, refetch } = usePriceReason();
  console.log("priceReason", priceReason);

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log("Edit", id);
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone",
      async onOk() {
        try {
          const response = await API.delete(`/price-reason/delete/${id}`);
          console.log("response", response);
          if (response.status === 200) {
            message.success("Price Reason Deleted Successfully");
            refetch();
          } else {
            throw new Error("Unexpected response from server");
          }
        } catch (error) {
          message.error("Failed to delete Price Reason");
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <UpdatePriceReason id={record.id} record={record} refetch={refetch} />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Price Reason</h1>
      <Table dataSource={priceReason} columns={columns} rowKey="id" />
    </div>
  );
};

export default PriceReason;
