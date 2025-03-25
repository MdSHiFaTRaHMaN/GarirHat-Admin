import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message, Modal, Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { API, useAllBrand } from "../../api/api";
import { Helmet } from "react-helmet-async";

const BrandRequest = () => {
  const { allBrand, isLoading, refetch } = useAllBrand();
  const [statusLoading, setStatusLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  // Filter only pending brands
  const pendingBrands = allBrand
    ?.filter((brand) => brand.status === "pending") // Filter pending brands
    ?.map((brand) => ({
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
      render: (status, record) => (
        <Select
          defaultValue={status}
          disabled={statusLoading}
          style={{
            width: 120,
          }}
          options={[
            {
              value: "active",
              label: "Active",
            },
            {
              value: "pending",
              label: "Pending",
            },
          ]}
          onChange={(value, key) => handleChange(value, record.key)}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (id, record) => (
        <Space>
          <Button
            disabled={loading}
            onClick={() => handleBrandDelete(record.key)}
            danger
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  const handleChange = async (value, key) => {
    setStatusLoading(true);
    const data = { status: value };
    try {
      // API Call
      const response = await API.put(`/brand/status/${key}`, data);

      if (response.status === 200) {
        message.success("Profile Updated Successfully");
        setStatusLoading(false);
        refetch();
      } else {
        message.error("Update failed");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Something went wrong");
    } finally {
      setStatusLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Brand Request | GarirHat</title> 
      </Helmet>
      <Table columns={columns} dataSource={pendingBrands} loading={isLoading} />
    </div>
  );
};

export default BrandRequest;
