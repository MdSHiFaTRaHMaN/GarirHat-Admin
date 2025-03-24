import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, message, Select, Space, Table } from "antd";
import React, { useState, useEffect, useMemo } from "react";
import { API, useAllVendor } from "../../api/api";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
const { Search } = Input;

const VendorList = () => {
  const { allVendor, isLoading, refetch } = useAllVendor();
  const [statusLoading, setStatusLoading] = useState(false);
  const [filteredVendors, setFilteredVendors] = useState([]);

  useEffect(() => {
    setFilteredVendors(allVendor); // Initialize filtered list
  }, [allVendor]);

  // Count of Verified, Unverified and Blocked Vendors
  const verifiedCount = useMemo(() => allVendor?.filter(vendor => vendor.status === "Verified").length, [allVendor]);
  const unverifiedCount = useMemo(() => allVendor?.filter(vendor => vendor.status === "Un-Verified").length, [allVendor]);
  const blockedCount = useMemo(() => allVendor?.filter(vendor => vendor.status === "Blocked").length, [allVendor]);

  // Data Processing
  const data = filteredVendors?.map((vendor) => ({
    key: vendor.id,
    image: vendor.profile_picture,
    vendor_name: vendor.name,
    email: vendor.email,
    phone: vendor.phone,
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
          style={{ width: 120 }}
          options={[
            { value: "Verified", label: "Verified" },
            { value: "Un-Verified", label: "Un-Verified" },
            { value: "Blocked", label: "Blocked" },
          ]}
          onChange={(value) => handleChange(value, record.key)}
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
    try {
      const response = await API.put(`/vendor/status/${key}`, {
        status: value,
      });
      if (response.status === 200) {
        message.success("Status Updated Successfully");
        refetch();
      } else {
        message.error("Update failed");
      }
    } catch (error) {
      message.error("Something went wrong");
    } finally {
      setStatusLoading(false);
    }
  };

  const onSearch = (value) => {
    const filtered = allVendor?.filter((vendor) =>
      vendor.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredVendors(filtered);
  };

  return (
    <div>
      <div className="my-2 flex justify-between items-center">
        <Search
          placeholder="Search for Vendor name"
          className="w-[350px]"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <button className=" border text-black px-4 py-2 rounded">
          <strong>Total:</strong> {allVendor?.length} Vendors
        </button>
        <button className=" border text-black px-4 py-2 rounded">
          <strong>Verified:</strong> {verifiedCount} Vendors
        </button>
        <button className=" border text-black px-4 py-2 rounded">
          <strong>Unverified:</strong> {unverifiedCount} Vendors
        </button>
        <button className=" border text-black px-4 py-2 rounded">
          <strong>Blocked:</strong> {blockedCount} Vendors
        </button>
      </div>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </div>
  );
};

export default VendorList;
