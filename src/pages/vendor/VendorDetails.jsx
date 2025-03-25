import React from "react";
import { useParams } from "react-router-dom";
import { useSingleVendor } from "../../api/api";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { Divider, Image, Tag } from "antd";
import Bannar from "../../assets/vbannar.jpg";
import NID from "../../assets/nid.jpg";
import VehicleinVendor from "./VehicleinVendor";
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { MdMoreHoriz } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const VendorDetails = () => {
  const { vendorId } = useParams();
  const { singleVendor, isLoading } = useSingleVendor(vendorId);

  if (isLoading) return <div>Loading...</div>;

  console.log("wingsblast" ,singleVendor);
  return (
    <div>
      <Helmet>
        <title>{`${singleVendor?.name} | GarirHat`}</title>
      </Helmet>
      <div className="flex justify-center items-center">
        <div className="w-full shadow rounded">
          <div className="w-full mx-auto rounded-lg overflow-hidden">
            {/* Cover Image */}
            <div className="relative">
              <img
                src={singleVendor.banner || Bannar}
                alt="Cover"
                className="w-full h-96 object-cover"
              />
              {/* Profile Picture */}
              <div className="absolute left-5 bottom-[-40px]">
                <img
                  src={singleVendor.profile_picture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>

            {/* Profile Details */}
            <div className=" p-6 pt-12">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  {singleVendor.name}{" "}
                  <Tag
                    style={{
                      color:
                        singleVendor?.status === "Verified"
                          ? "green"
                          : singleVendor?.status === "Pending"
                          ? "orange"
                          : "red",
                    }}
                  >
                    {singleVendor?.status}
                  </Tag>
                </h2>
                <Tag color="#2db7f5">{singleVendor?.role}</Tag>
              </div>
              <p className="text-gray-600 text-sm">{singleVendor.email}</p>

              {/* Location & Social Links */}
              <div className="flex flex-wrap items-center gap-4 text-gray-500 mt-2 text-sm">
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <BsWhatsapp className="text-green-700" />
                  {singleVendor.name}
                </span>
                <span className="flex items-center gap-1">
                  <FiInstagram className="text-pink-500" />
                  {singleVendor.name}
                </span>
                <span className="flex items-center gap-1">
                  <FaFacebookSquare className="text-blue-400" />{" "}
                  {singleVendor.name}
                </span>
              </div>
              {/* Personal Information */}
              <div className="py-3 border-b">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <div className=" mt-2">
                  <p>
                    <strong className="font-medium">Phone Number:</strong>{" "}
                    {singleVendor.phone || "N/A"}
                  </p>
                  <p>
                    <strong className="font-medium">
                      Emergency Phone Number:
                    </strong>{" "}
                    {singleVendor.emergency_phone || "N/A"}
                  </p>
                  <p>
                    <strong className="font-medium">Email:</strong>{" "}
                    {singleVendor.email}
                  </p>
                  <p>
                    <strong className="font-medium">Company Name:</strong>{" "}
                    {singleVendor.company_name}
                  </p>
                  <p>
                    <strong className="font-medium">Login:</strong>{" "}
                    {singleVendor.sign_up_method}
                  </p>
                </div>
              </div>
            </div>

            {/* More Options */}
            <div className="absolute top-4 right-4 text-gray-600 cursor-pointer">
              <MdMoreHoriz size={24} />
            </div>
          </div>

          <Divider>NID Card</Divider>
          <div className="flex justify-around p-3">
            <Image width={400} src={singleVendor?.nid_card_front || NID} />
            <Image width={400} src={singleVendor?.nid_card_back || NID} />
          </div>
        </div>
      </div>
      <VehicleinVendor vendorId={vendorId} />
    </div>
  );
};

export default VendorDetails;
