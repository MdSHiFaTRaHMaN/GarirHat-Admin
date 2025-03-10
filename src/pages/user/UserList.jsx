import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { useAllUser } from "../../api/api";

const UserList = () => {
  const { allUser, isLoading, refetch } = useAllUser();

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
      render: (status) => (
        <Tag color={status === "active" ? "green" : "volcano"}>
          {status.toUpperCase() || "Deactive"}
        </Tag>
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

  return (
    <div>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </div>
  );
};

export default UserList;
