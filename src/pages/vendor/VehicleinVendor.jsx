
import React, { useState, useRef } from "react";
import { Table, Button, Spin, Input, Avatar, message, Space } from "antd";
import { SearchOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { API, useMyVehicles } from "../../api/api";
import Upcoming from "../../assets/UpcomingImage.jpg";
const { Search } = Input;

const VehicleinVendor = ({vendorId}) => {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [filters, setFilters] = useState({
      page: 1,
      limit: 10,
      vehicle_code: "",
      vendor_id: vendorId
    });
  
    const { myVehicles, pagination, isLoading, isError, error, refetch } =
      useMyVehicles(filters);
  

    React.useEffect(() => {
      refetch(); // Refetch data whenever filters are updated
    }, [filters, refetch]);
  
    const handleTableChange = (pagination) => {
      const { current: page, pageSize: limit } = pagination;
      setFilters((prevFilters) => ({
        ...prevFilters,
        page,
        limit,
      }));
    };
  
    const handleDelete = async (id) => {
      try {
        setDeleteLoading(true);
        const response = await API.delete(`/vehicle/delete/${id}`);
  
        if (response.status === 201) {
          message.success("Car Deleted Successfully");
        } else {
          throw new Error("Unexpected response from server");
        }
      } catch (error) {
        console.error("Delete Not Successful", error);
        message.error("Failed to delete car. Please try again.");
      } finally {
        setDeleteLoading(false);
      }
    };
  
    // Function to add search functionality to table columns
    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
    });
  
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
  
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText("");
    };
  
    const columns = [
      {
        title: "Serial",
        dataIndex: "id",
        key: "id",
        width: 8,
        render: (text, record, index) =>
          index + 1 + (filters.page - 1) * filters.limit,
      },
      {
        title: "Vehicle Code",
        dataIndex: "vehicle_code",
        key: "vehicle_code",
        width: "15%",
        ...getColumnSearchProps("vehicle_code"),
      },
      {
        title: "Make & Model",
        dataIndex: "make",
        key: "make",
        render: (_, render) => (
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <Avatar
                size={45}
                src={
                  <img src={render.thumbnail_image || Upcoming} alt="avatar" />
                }
              />
            </div>
            <div>
              <h2 className="font-semibold text-xl">{render.make}</h2>
              <h2 className="text-gray-500">{render.model}</h2>
            </div>
          </div>
        ),
      },
      {
        title: "Year",
        dataIndex: "year_of_manufacture",
        key: "year_of_manufacture",
        ...getColumnSearchProps("year_of_manufacture"),
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (price) => `${price.toLocaleString()} TK`,
      },
      {
        title: "More Details",
        key: "details",
        width: 80,
        render: (_, record) => (
          <Link to={`/vehicle-details/${record.id}`}>
            <Button type="primary" size="small" icon={<EyeOutlined />}>
              More Details
            </Button>
          </Link>
        ),
      },
      {
        title: "Delete",
        key: "delete",
        width: 80,
        render: (_, record) => (
          <Button
            danger
            size="small"
            icon={<DeleteOutlined />}
            loading={deleteLoading}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        ),
      },
    ];
    return (
        <div>
        <h2 className="text-center text-2xl font-semibold my-4">All Vehicles</h2>
        <div className="flex justify-between mb-4">
          <Search
            placeholder="Search Vehicle Code..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onSearch={(value) => {
              setFilters((prevFilters) => ({
                ...prevFilters,
                vehicle_code: value || "",
                page: 1, // Reset to the first page
              }));
            }}
            style={{ width: 300 }}
          />
          <button className=" border text-black px-4 py-2 rounded">
            <strong>Total :</strong> {pagination.total}  Vehicle
          </button>
          <button className=" border text-black px-4 py-2 rounded">
            <strong>Sold :</strong> XX  Vehicle
          </button>
          <button className=" border text-black px-4 py-2 rounded">
            <strong>Active:</strong> XX  Vehicle
          </button>
          <button className=" border text-black px-4 py-2 rounded">
            <strong>Inactive:</strong> XX  Vehicle
          </button>
        </div>
        {isLoading ? (
          <Spin size="large" className="block mx-auto my-10" />
        ) : isError ? (
          <p className="text-red-600">Error: {error.message}</p>
        ) : (
          <Table
            columns={columns}
            dataSource={myVehicles.map((item, index) => ({
              key: index,
              ...item,
            }))}
            pagination={{
              current: filters.page,
              pageSize: filters.limit,
              total: pagination.total,
            }}
            onChange={handleTableChange}
            bordered
          />
        )}
      </div>
    );
};

export default VehicleinVendor;