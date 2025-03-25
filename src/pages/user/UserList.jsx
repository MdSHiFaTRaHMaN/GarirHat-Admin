import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Input, message, Modal, Select, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { API, useAllUser } from "../../api/api";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const { Search } = Input;

const UserList = () => {
  const { allUser, isLoading, refetch } = useAllUser();
  const [statusLoading, setStatusLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

// Initialize filtered list of users 
  useEffect(() => {
    setFilteredUsers(allUser);
  }, [allUser]);

  const activeUsers = allUser?.filter(
    (user) => user.status === "Active"
  ).length;
  const inactiveUsers = allUser?.filter(
    (user) => user.status === "Inactive"
  ).length;
  const blockedUsers = allUser?.filter(
    (user) => user.status === "Blocked"
  ).length;

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
          <Button danger onClick={() => handleDelete(record.key)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  // Handle Change Status of User
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
  // Handle Delete User
  const handleDelete = async (key) => {
    // Confirm Modal for Delete User 
    Modal.confirm({
      title: "Are you sure you want to delete this User?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone",
      okText: "Delete",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          // API Call
          const response = await API.delete(`/user/delete/${key}`);

          if (response.status === 200) {
            message.success("User Deleted Successfully");
            refetch();
          } else {
            message.error("Delete failed");
          }
        } catch (error) {
          console.error("Error:", error);
          message.error("Something went wrong");
        }
      },
    });
  };
 // Handle Search User by Name 
  const onSearch = (value) => {
    const filtered = allUser?.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <Helmet>
        <title>User List | GarirHat</title>   
      </Helmet>
      <div className="my-2 flex justify-between items-center">
        <Search
          placeholder="Search for User name"
          className="w-[350px]"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <button className="px-4 py-2 bg-ButtonColor rounded text-white">
          <strong>Total:</strong> {allUser?.length} Users
        </button>
        <button className="px-4 py-2 bg-ButtonColor rounded text-white">
          <strong>Active:</strong> {activeUsers} Users
        </button>
        <button className="px-4 py-2 bg-ButtonColor rounded text-white">
          <strong>Inactive:</strong> {inactiveUsers} Users
        </button>
        <button className="px-4 py-2 bg-ButtonColor rounded text-white">
          <strong>Blocked:</strong> {blockedUsers} Users
        </button>
      </div>
      {/*  Table Component from Ant Design  */}
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </div>
  );
};

export default UserList;
