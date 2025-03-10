import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message, Modal, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { API, useAllBrand } from "../../api/api";
import BrandAddModel from "./BrandAddModel";

const ShowAllBrand = () => {
  const { allBrand, isLoading, refetch } = useAllBrand();
  const [loading, setLoading] = useState(false);
  // Data Processing
  const data = allBrand?.map((brand) => ({
    key: brand.id,
    image: brand.image,
    brand_name: brand.brand_name,
    status: brand.status,
  }));

  const handleBrandDelete = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this Vehicle Feature?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      cancelText: "Cancel",
      okType: "danger",
      onOk: async () => {
        try {
          setLoading(true);
          const response = await API.delete(`/brand/delete/${id}`);
          console.log("Response:", response);
          if (response.status === 200) {
            message.success("Brand Deleted Successfully");
            refetch();
          }
        } catch (error) {
          message.error("Failed to delete Brand");
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

  // Columns for Table
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="brand" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Brand Name",
      dataIndex: "brand_name",
      key: "brand_name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "active" ? "green" : "volcano"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "key",
      dataIndex: "key",
      render: (id, record) => (
        <Space>
          <Button>
            <EditOutlined />
          </Button>
          <Button
            disabled={loading}
            danger
            onClick={() => handleBrandDelete(id)}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <BrandAddModel />
      </div>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </div>
  );
};

export default ShowAllBrand;
