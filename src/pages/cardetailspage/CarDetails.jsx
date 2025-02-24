import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarImg1 from "../../assets/car-d1.jpg";
import CarImg2 from "../../assets/car-d22.jpg";
import CarImg3 from "../../assets/car-d33.jpg";
import CarImg4 from "../../assets/car-d22.jpg";
import CarOverview from "./CarOverview";
import Features from "./Features";
import Specifications from "./Specifications";
const CarDetails = () => {
  const carImages = [CarImg1, CarImg2, CarImg3, CarImg4];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className=" p-4 grid md:grid-cols-2 gap-6">
        {/* Image Carousel */}
        <div>
          <Carousel responsive={responsive}>
            {carImages.map((img, index) => (
              <img key={index} src={img} alt="Car" className="rounded-lg" />
            ))}
          </Carousel>
        </div>

        {/* Car Details */}
        <div>
          <h1 className="text-3xl font-bold">Mercedes Benz E 220</h1>
          <p className="text-green-600 text-2xl font-semibold">
            ৳14,000.00 Taka
          </p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong>Post ID:</strong> 1E7R95
            </p>
            <p>
              <strong>Location:</strong> Manda,Mugdha, Dhaka
            </p>
            <p>
              <strong>Desired Price:</strong> €14,000.00
            </p>
            <p>
              <strong>Minimum Price:</strong> €14,000.00
            </p>
            <p>
              <strong>Advertised On:</strong> 12/15/22 | 10:12 AM
            </p>
            <p>
              <strong>Planned Sale:</strong> As soon as possible
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <CarOverview />
        <Features />
        <Specifications />
      </div>
    </div>
  );
};

export default CarDetails;
