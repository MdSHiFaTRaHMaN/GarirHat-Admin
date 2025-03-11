import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message, Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { API, useAllVendor } from "../../api/api";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

const VendorList = () => {
  const { allVendor, isLoading, refetch } = useAllVendor();
 const [statusLoading, setStatusLoading]= useState(false);
  // Data Processing
  const data = allVendor?.map((vendor) => ({
    key: vendor.id,
    image: vendor.profile_picture,
    vendor_name: vendor.name,
    email: vendor.email,
    status: vendor.status,
  }));

  // Columns for Table
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="vendor"
          className="rounded-full"
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    {
      title: "Vendor Name",
      dataIndex: "vendor_name",
      key: "vendor_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <Select
          defaultValue={status || "Select Status"}
          disabled={statusLoading}
          style={{
            width: 120,
          }}
          options={[
            {
              value: "Verified",
              label: "Verified",
            },
            {
              value: "Un-Verified",
              label: "Un-Verified",
            },
            {
              value: "Blocked",
              label: "Blocked",
            },
          ]}
          onChange={(value, key) => handleChange(value, record.key)}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Link to={`/vendor-details/${record.key}`}>
            <Button>
              <LuEye />
            </Button>
          </Link>
          <Button danger>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  const handleChange = async (value, key) => {
    setStatusLoading(true);
    const data = { status : value }
    try {
      // API Call
      const response = await API.put(`/vendor/status/${key}`, data);
      
      if (response.status === 200) {
        message.success("Status Updated Successfully");
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
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </div>
  );
};

export default VendorList;
