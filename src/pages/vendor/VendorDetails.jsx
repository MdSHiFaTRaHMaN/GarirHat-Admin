import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleVendor } from "../../api/api";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { CheckCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Image, Rate, Tag } from "antd";
import Bannar from "../../assets/vbannar.jpg";
import NID from "../../assets/nid.jpg";

const VendorDetails = () => {
  const { vendorId } = useParams();
  const { singleVendor } = useSingleVendor(vendorId);
  console.log(singleVendor);
  const [error, setError] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full shadow-lg rounded-lg">
        {/* Header Section */}
        <div>
          <img src={Bannar} alt="" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start p-4 border-b">
          <div className="flex items-center">
            {error || !singleVendor.profile_picture ? (
              <div className="w-[75px] h-[75px] flex items-center justify-center rounded-full bg-gray-200">
                <UserOutlined className="text-3xl text-gray-500" />
              </div>
            ) : (
              <Image
                width={75}
                height={75}
                src={singleVendor.profile_picture}
                alt="Profile Photo"
                className="rounded-full"
                onError={() => setError(true)} // Fallback if the image fails to load
              />
            )}
          </div>
          <div className="flex-1 items-center">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl font-semibold">{singleVendor.name}</h2>
              <Tag color="green">Vendor</Tag>
            </div>
            <div className="flex items-center mt-1">
              <Rate allowHalf defaultValue={3.5} disabled className="mr-2" />
              <h2 className="font-bold text-amber-700 text-2xl">3.5/5</h2>
            </div>
            <div className="flex gap-2 mt-2">
              <Button
                type="primary"
                icon={<CheckCircleOutlined />}
                size="small"
              >
                {singleVendor.status}
              </Button>
              <div className="flex gap-2">
                <FaWhatsappSquare className="text-2xl text-green-500" />
                <TfiEmail className="text-2xl text-red-600" />
                <FaFacebookSquare className="text-2xl text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <p>
              <strong>Mobile Number:</strong> {singleVendor.phone}
            </p>
            <p>
              <strong>Email:</strong> {singleVendor.email}
            </p>
          </div>
        </div>
        <Divider>NID Card</Divider>
        <div className="flex justify-around p-3">
            <Image width={400} src={NID}/>
            <Image width={400} src={NID}/>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
