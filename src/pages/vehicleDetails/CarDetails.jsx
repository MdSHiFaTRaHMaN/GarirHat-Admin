import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarOverview from "./CarOverview";
import Features from "./Features";
import Specifications from "./Specifications";
import { useParams } from "react-router-dom";
import { Image, Button, Select, Badge } from "antd";
import { useVehicleDetails } from "../../api/api";

const CarDetails = () => {
  const { vehicleID } = useParams();
  const { vehicleDetails, isLoading, isError, error } =
    useVehicleDetails(vehicleID);

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (vehicleDetails?.data) {
      setStatus(vehicleDetails.data.status);
    }
  }, [vehicleDetails]);

  const vehicle = vehicleDetails?.data;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // Optional for sliding 1 item at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">
        {error.message || "Something went wrong"}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-4 grid md:grid-cols-2 gap-6">
      <Carousel responsive={responsive} className="h-[370px]">
          {vehicle.images.map((img, index) => (
            <Image
              width="100%"
              height="370px"
              className="rounded-lg"
              key={index}
              src={img}
              alt="vehicle_images"
            />
          ))}
        </Carousel>

        <div>
          <h1 className="text-3xl font-bold">
            {vehicle?.year_of_manufacture} {vehicle.make} {vehicle.model}
          </h1>
          <p className="text-green-600 text-2xl font-semibold">
            ৳{vehicle.price}
          </p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong>Vehicle Code:</strong> {vehicle.vehicle_code}
            </p>
            <p>
              <strong>Location:</strong> {vehicle.city && `${vehicle.city},`}{" "}
              {vehicle.district}, {vehicle.division}
            </p>
            <p>
              <strong>Discount Price:</strong> ৳{vehicle.discount_price}
            </p>
            <p>
              <strong>Advertised On: </strong>
              {new Date(vehicle.created_at).toLocaleString()}
            </p>
            <div>
              <strong>Status: </strong>
              <Select
                value={status}
                onChange={handleStatusChange}
                style={{ width: 120 }}
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Upcoming", label: "Upcoming" },
                ]}
                disabled={
                  vehicle.status !== "Active" && vehicle.status !== "Upcoming"
                }
              />
            </div>
            <div className="pt-1">
              <Badge count={3}>
                <Button>Report for this Vehicle</Button>
              </Badge>
            </div>
            <div>
              <Button>Delete</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <CarOverview vehicle={vehicle} />
        <Features features={vehicle?.features} />
        <Specifications vehicle={vehicle} />
      </div>
    </div>
  );
};

export default CarDetails;
