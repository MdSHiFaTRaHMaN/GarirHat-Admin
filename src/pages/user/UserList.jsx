import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, message, Select, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { API, useAllUser } from "../../api/api";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const { Search } = Input;

const UserList = () => {
  const { allUser, isLoading, refetch } = useAllUser();
  const [statusLoading, setStatusLoading] = useState(false);

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(allUser); // Initialize filtered list
  }, [allUser]);

  // Data Processing
  const data = filteredUsers?.map((user) => ({
    key: user.id,
    image: user.profile_pic,
    user_name: user.name,
    email: user.email,
    status: user.status,
    phone: user.phone,
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
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
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
          <Link to={`/user-info/${record.key}`}>
            <Button>
              <FaEye />
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
    const data = { status: value };
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

  const onSearch = (value) => {
    const filtered = allUser?.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <div className="my-2">
        <Search
          placeholder="Search for User name"
          className="w-[350px]"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </div>
  );
};

export default UserList;
