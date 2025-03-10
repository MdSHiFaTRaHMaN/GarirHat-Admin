import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { useAllBrand } from "../../api/api";

const BrandRequest = () => {
    const { allBrand, isLoading, refetch } = useAllBrand();

    // Filter only pending brands
    const pendingBrands = allBrand
        ?.filter((brand) => brand.status === "pending") // Filter pending brands
        ?.map((brand) => ({
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
            render: (status) => <Tag color="volcano">{status.toUpperCase()}</Tag>,
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
            <Table columns={columns} dataSource={pendingBrands} loading={isLoading} />
        </div>
    );
};

export default BrandRequest;
