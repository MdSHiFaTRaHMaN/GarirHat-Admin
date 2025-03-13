import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, message, Modal, Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { useUserWishList } from "../../api/api";
const { Search } = Input;

const UserWishlist = ({userId}) => {
  const { userWishList, isLoading, } = useUserWishList(userId);
  console.log(userWishList)
  // Data Processing
  const data = userWishList?.map((brand) => ({
    key: brand.id,
    image: brand.thumbnail_image,
    brand_name: brand.brand_name,
    status: brand.status,
    make : brand.make,
    model: brand.model,
    year_of_manufacture: brand.year_of_manufacture,
    vehicle_code: brand.vehicle_code,
    upzila: brand.upzila,
    division: brand.division
  }));

  // Columns for Table
  const columns = [
    {
       title: "Vehicle Code" ,
       dataIndex: "vehicle_code",
       key: "vehicle_code"
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="brand" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Name",
      dataIndex: "brand_name",
      key: "brand_name",
      render: (_, render) => (
        <div className="flex gap-2">
          <div>
            <h2 className="font-semibold text-xl">{render.make}</h2>
            <h2 className="text-gray-500">{render.model}</h2>
          </div>
        </div>
      )
    },
    {
        title: "Year",
        dataIndex: "year_of_manufacture",
        key: "year_of_manufacture"
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
        render: (_, render) => (
        <div>
            {render.upzila} {render.division}
        </div>
        )
    }
  ];

  // const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
        <h1 className="text-xl font-semibold">User WishList</h1>
      <Table columns={columns} dataSource={data} loading={isLoading} />{" "}
    </div>
  );
};

export default UserWishlist;
