import { Collapse } from "antd";
import { FaCheck } from "react-icons/fa";

const Features = () => {
  const panelStyle = {
    border: "none",
    background: "white",
  };
  const feature = [
    "Power Steering",
    "Air Conditioner",
    "Heater",
    "Adjustable Steering",
    "Height Adjustable Driver Seat",
    "Automatic Climate Control",
    "Air Quality Control",
    "Remote Trunk Opener",
    "Accessory Power Outlet",
    "Trunk Light",
    "Vanity Mirror",
    "Rear Reading Lamp",
    "Rear Seat Headrest",
    "Adjustable Headrest",
    "Rear Seat Centre Arm Rest",
    "Height Adjustable Front Seat Belts",
    "Rear AC Vents",
    "Lumbar Support",
    "Cruise Control",
    "Smart Access Card Entry",
    "KeyLess Entry",
    "Engine Start/Stop Button",
    "Voice Commands",
    "Paddle Shifters",
    "Central Console Armrest",
    "Tailgate Ajar Warning",
    "Hands-Free Tailgate",
    "Automatic Headlamps",
  ];

  const items = [
    {
      key: "1",
      label: <span className="text-base">Comfort & Convenience</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {feature.map((list, index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {list}
            </p>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label:<span className="text-base">Interior</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {feature.map((list, index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {list}
            </p>
          ))}
        </div>
      ),
    },
    {
      key: "3",
      label: <span className="text-base">Exterior</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {feature.map((list, index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {list}
            </p>
          ))}
        </div>
      ),
    },
    {
      key: "4",
      label: <span className="text-base">Safety</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {feature.map((list, index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {list}
            </p>
          ))}
        </div>
      ),
    },
    {
      key: "5",
      label: <span className="text-base">Entertainment & Communication</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {feature.map((list, index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {list}
            </p>
          ))}
        </div>
      ),
    },
  ];
  const getItems = (panelStyle) => [
    {
      key: "1",
      label: (
        <p className="text-TextColor mt-2 text-base cursor-pointer">
          View all Features ➤
        </p>
      ),
      children: (
        <Collapse
          items={items}
          bordered={false}
          style={{ backgroundColor: "white" }}
          expandIconPosition="end"
        />
      ),
      style: panelStyle,
    },
  ];
  return (
    <div className="bg-white p-5 border shadow-lg rounded-lg" id="features">
      <h2 className="text-xl font-semibold mb-4">Features</h2>
      <div className="grid grid-cols-3 gap-4 text-gray-700">
        <p className="flex items-center">
          <FaCheck className="text-green-500 mr-2" /> 360 Degree
          Camera
        </p>
        <p className="flex items-center">
          <FaCheck className="text-green-500 mr-2" /> Memory
          Function For Seats
        </p>
        <p className="flex items-center">
          <FaCheck className="text-green-500 mr-2" /> Adjustable
          Headrest
        </p>
        <p className="flex items-center">
          <FaCheck className="text-green-500 mr-2" /> Panoramic
          Sunroof
        </p>
        <p className="flex items-center">
          <FaCheck className="text-green-500 mr-2" /> Panoramic
          Vanity Mirror
        </p>
        <p className="flex items-center">
          <FaCheck className="text-green-500 mr-2" /> Panoramic
          Trunk Light
        </p>
      </div>
      <Collapse
        bordered={false}
        expandIcon={() => null}
        items={getItems(panelStyle)}
      />
    </div>
  );
};

export default Features;
