import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { useAllBrand } from "../../api/api";

const ShowAllBrand = () => {
    const { allBrand, isLoading, refetch } = useAllBrand();

    // Data Processing
    const data = allBrand?.map((brand) => ({
        key: brand.id,
        image: brand.image,
        brand_name: brand.brand_name,
        status: brand.status,
    }));

    // Columns for Table
    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => <img src={image} alt="brand" style={{ width: 50, height: 50 }} />,
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
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button><EditOutlined /></Button>
                    <Button danger><DeleteOutlined /></Button>
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

export default ShowAllBrand;
