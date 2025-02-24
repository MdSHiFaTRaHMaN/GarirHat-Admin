import { Collapse } from "antd";
import { FaCheck } from "react-icons/fa";

const Specifications = () => {
  const panelStyle = {
    border: "none",
    background: "white",
  };

  const feature = {
    "Engine Type": "TwinPower Turbo 6-cylinder engine",
    Displacement: "2998 cc",
    "Motor Type": "48V Electric Motor",
    "Max Power": "375.48bhp@5200-6250rpm",
    "Max Torque": "520Nm@1850-5000rpm",
    "No. of Cylinders": 6,
    "Valves Per Cylinder": 4,
    "Turbo Charger": "Twin",
    "Super Charge": "No",
    "Transmission Type": "Automatic",
    Gearbox: "8-Speed Steptronics",
    "Drive Type": "4WD",
  };

  const items = [
    {
      key: "1",
      label: <span className="text-base">Engine & Transmission</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {Object.entries(feature).map(([key, value], index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>
                <strong>{key}:</strong> {value}
              </span>
            </p>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: <span className="text-base">Fuel & Performance</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {Object.entries(feature).map(([key, value], index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>
                <strong>{key}:</strong> {value}
              </span>
            </p>
          ))}
        </div>
      ),
    },
    {
      key: "3",
      label: <span className="text-base">Suspension, Steering & Brakes</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {Object.entries(feature).map(([key, value], index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>
                <strong>{key}:</strong> {value}
              </span>
            </p>
          ))}
        </div>
      ),
    },
    {
      key: "4",
      label: <span className="text-base">Dimensions & Capacity</span>,
      children: (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-700">
          {Object.entries(feature).map(([key, value], index) => (
            <p key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>
                <strong>{key}:</strong> {value}
              </span>
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
    <div
      className="bg-white p-5 border shadow-lg rounded-lg"
      id="specifications"
    >
      <h2 className="text-xl font-semibold mb-4">Specifications</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
        <p>
          Engine: <span className="font-semibold">2998 cc</span>
        </p>
        <p>
          Power: <span className="font-semibold">375.48 bhp</span>
        </p>
        <p>
          Transmission: <span className="font-semibold">Automatic</span>
        </p>
        <p>
          Top Speed: <span className="font-semibold">243 kmph</span>
        </p>
        <p>
          Drive Type: <span className="font-semibold">4WD</span>
        </p>
        <p>
          Fuel: <span className="font-semibold">Petrol</span>
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

export default Specifications;
