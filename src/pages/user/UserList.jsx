import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message, Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { API, useAllUser } from "../../api/api";

const UserList = () => {
  const { allUser, isLoading, refetch } = useAllUser();
 const [statusLoading, setStatusLoading]= useState(false);

  // Data Processing
  const data = allUser?.map((user) => ({
    key: user.id,
    image: user.profile_pic,
    user_name: user.name,
    email: user.email,
    status: user.status,
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
          alt="user"
          className="rounded-full"
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    {
      title: "User Name",
      dataIndex: "user_name",
      key: "user_name",
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
              value: "Active",
              label: "Active",
            },
            {
              value: "Inactive",
              label: "Inactive",
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
      const response = await API.put(`/user/status/${key}`, data);
      
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

export default UserList;
