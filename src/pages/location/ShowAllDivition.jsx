import React from "react";
import { useAllDivition } from "../../api/api";
import { EditOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import UpdateDivition from "./UpdateDivition";
import { Helmet } from "react-helmet-async";

const ShowAllDivition = () => {
  const { allDivition, isLoading, refetch } = useAllDivition();

  const data = allDivition?.map((user) => ({
    key: user.id,
    image: user.logo,
    divition: user.name,
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
      title: "Name",
      dataIndex: "divition",
      key: "divition",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
            <UpdateDivition refetch={refetch} divition={record}/>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Divition | GarirHat</title>
      </Helmet>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </div>
  );
};

export default ShowAllDivition;
