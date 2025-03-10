
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { useAllVendor } from "../../api/api";

const VendorList = () => {
    const { allVendor, isLoading, refetch } = useAllVendor();

    // Data Processing
    const data = allVendor?.map((vendor) => ({
        key: vendor.id,
        image: vendor.profile_picture,
        vendor_name: vendor.name,
        email: vendor.email,
        status: vendor.verify_status,
    }));

    // Columns for Table
    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => <img src={image} alt="vendor" className="rounded-full" style={{ width: 50, height: 50 }} />,
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
            render: (status) => (
                <Tag color={status === "active" ? "green" : "volcano"}>
                    {status.toUpperCase() || "Not Verified"}
                </Tag>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
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

export default VendorList;
