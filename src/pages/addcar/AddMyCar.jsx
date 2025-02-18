import {
  Input,
  Select,
  Checkbox,
  Button,
  Form,
  Collapse,
  Upload,
  message,
} from "antd";
import { CarOutlined, PlusOutlined } from "@ant-design/icons";
import { useAlFeature, useAlLocation } from "../../api/api";
import { useState } from "react";

const { Option } = Select;

const AddMyCar = () => {
  const [form] = Form.useForm();
  const { alLocation } = useAlLocation();
  const { alFeature } = useAlFeature();

  // price calculate

  const [values, setValues] = useState({
    regularPrice: 0,
    vatTax: 0,
    repairPrice: 0,
    otherCost: 0,
  });

  const handleChangePrice = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: Number(value) || 0, // Convert input to number
    }));
  };

  const totalCost =
    values.regularPrice + values.vatTax + values.repairPrice + values.otherCost;

  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  // Handle Division Change
  const handleDivisionChange = (value) => {
    setSelectedDivision(value);
    setSelectedDistrict(null); // Reset district on division change
    setFilteredUpazilas([]); // Reset Upazilas
    const selectedDiv = alLocation.find((div) => div.id === value);
    setFilteredDistricts(selectedDiv ? selectedDiv.districts : []);
  };

  // Handle District Change
  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    const selectedDist = filteredDistricts.find((dist) => dist.id === value);
    setFilteredUpazilas(selectedDist ? selectedDist.upazilas : []);
  };

  // search feature
  const [searchTerm, setSearchTerm] = useState("");
  // Filtered Features Based on Search Input
  const filteredFeatures = alFeature.filter((feature) =>
    feature.feature_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  // input all data
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="mx-auto bg-white p-6">
      <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center gap-2 font-MyStyle">
        <CarOutlined />
        Sell your car from home for the best price
      </h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="grid grid-cols-2 gap-x-4">
          {/* car make  */}
          <Form.Item
            label="Make"
            name="make"
            rules={[{ required: true, message: "Please enter make" }]}
          >
            <Input placeholder="Enter Car Make" className="py-[10px]" />
          </Form.Item>
          {/* car mdoel  */}
          <Form.Item
            label="Model"
            name="model"
            rules={[{ required: true, message: "Please enter model" }]}
          >
            <Input placeholder="Enter Car Model" className="py-[10px]" />
          </Form.Item>
          {/* car year  */}
          <Form.Item
            label="Year"
            name="year"
            rules={[{ required: true, message: "Please enter year" }]}
          >
            <Input
              type="number"
              placeholder="Enter Year"
              className="py-[10px]"
            />
          </Form.Item>
          {/* Trim  */}
          <Form.Item label="Trim" name="Trim">
            <Input placeholder="Enter Trim" className="py-[10px]" />
          </Form.Item>
          {/* VIN  */}
          <Form.Item
            label="VIN (Vehicle Identification/Chassis Number)"
            name="VIN"
          >
            <Input placeholder="Enter VIN" className="py-[10px]" />
          </Form.Item>
          {/* Engine  */}
          <Form.Item label="Engine" name="Engine">
            <Input placeholder="Enter Engine" className="py-[10px]" />
          </Form.Item>
          {/* mileage  */}
          <Form.Item label="Mileage" name="mileage">
            <Input
              type="number"
              suffix="miles"
              placeholder="Enter Mileage"
              className="py-[10px]"
            />
          </Form.Item>
          {/* drivetrain  */}
          <Form.Item label="Drivetrain" name="drivetrain">
            <Select placeholder="Select Drivetrain" className="h-[44px]">
              <Option value="AWD">AWD</Option>
              <Option value="FWD">FWD</Option>
              <Option value="RWD">RWD</Option>
            </Select>
          </Form.Item>
          {/* Exterior Color */}
          <Form.Item label="Exterior Color" name="exteriorColor">
            <Input placeholder="Enter Exterior Color" className="py-[10px]" />
          </Form.Item>
          {/* Interior color  */}
          <Form.Item label="Interior color" name="enterior-color">
            <Input placeholder="Enter Interior color" className="py-[10px]" />
          </Form.Item>
          {/* MPG  */}
          <Form.Item label="MPG" name="MPG">
            <Input placeholder="Enter MPG" className="py-[10px]" />
          </Form.Item>
          {/* Stock number  */}
          <Form.Item label="Stock number" name="Stock-number">
            <Input placeholder="Enter Stock number" className="py-[10px]" />
          </Form.Item>
          {/* fuelType */}
          <Form.Item label="Fuel Type" name="fuelType">
            <Select placeholder="Select Fuel Type" className="h-[44px]">
              <Option value="Petrol">Petrol</Option>
              <Option value="Diesel">Diesel</Option>
              <Option value="CNG">CNG</Option>
              <Option value="LPG">LPG</Option>
            </Select>
          </Form.Item>
          {/* Condition  */}
          <Form.Item label="Condition" name="Condition">
            <Select placeholder="Select Condition" className="h-[44px]">
              <Option value="New">New</Option>
              <Option value="Used">Used</Option>
            </Select>
          </Form.Item>
          {/* Loan Condition  */}
          <Form.Item label="Loan" name="Loan Condition">
            <Select placeholder="Select Loan Condition" className="h-[44px]">
              <Option value="Available">Available</Option>
              <Option value="notAvailable">Not Available</Option>
            </Select>
          </Form.Item>
          {/* transmission  */}
          <Form.Item label="Transmission" name="transmission">
            <Select placeholder="Select Transmission" className="h-[44px]">
              <Option value="Automatic">Automatic</Option>
              <Option value="Manual">Manual</Option>
            </Select>
          </Form.Item>
          {/* Select Division */}
          <Form.Item label="Division" name="division">
            <Select
              showSearch
              className="h-[44px]"
              placeholder="Select a division"
              optionFilterProp="label"
              options={alLocation.map((location) => ({
                value: location.id,
                label: location.name,
              }))}
              onChange={handleDivisionChange}
            />
          </Form.Item>
          {/* Select District */}
          <Form.Item label="District" name="district">
            <Select
              showSearch
              className="h-[44px]"
              placeholder="Select a District"
              optionFilterProp="label"
              options={filteredDistricts.map((district) => ({
                value: district.id,
                label: district.name,
              }))}
              disabled={!selectedDivision}
              onChange={handleDistrictChange}
            />
          </Form.Item>
          {/* Select Upazila */}
          <Form.Item label="Upazila" name="upazila">
            <Select
              showSearch
              className="h-[44px]"
              placeholder="Select an Upazila"
              optionFilterProp="label"
              options={filteredUpazilas.map((upazila) => ({
                value: upazila.id,
                label: upazila.name,
              }))}
              disabled={!selectedDistrict}
            />
          </Form.Item>
        </div>
        {/* Safety Feature  */}
        <Collapse
          items={[
            {
              key: "1",
              label: "Safety Features",
              children: (
                <Form.Item name="safetyFeatures">
                  {/* Search Input */}
                  <Input
                    className="my-3 py-[10px]"
                    placeholder="Search Feature"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  {/* Checkbox Group */}
                  <Checkbox.Group className="grid grid-cols-4">
                    {filteredFeatures.map((feature) => (
                      <Checkbox key={feature.id} value={feature.feature_name}>
                        {feature.feature_name}
                      </Checkbox>
                    ))}
                  </Checkbox.Group>
                </Form.Item>
              ),
            },
          ]}
        />
        {/* measurements  */}
        <Collapse
          className="my-5"
          items={[
            {
              key: "2",
              label: "Measurements",
              children: (
                <Form.Item name="measurements">
                  <div className="grid grid-cols-2 gap-x-4">
                    {/* Doors  */}
                    <Form.Item label="Doors" name="Doors">
                      <Select placeholder="Select Doors" className="h-[44px]">
                        <Option value="4-Doors">4 Doors</Option>
                        <Option value="5-Doors">5 Doors</Option>
                        <Option value="6-Doors">6 Doors</Option>
                        <Option value="7-Doors">7 Doors</Option>
                      </Select>
                    </Form.Item>
                    {/* Front-legroom  */}
                    <Form.Item label="Front legroom" name="Front-legroom">
                      <Input
                        type="number"
                        suffix="in"
                        className="py-[10px]"
                        placeholder="Enter Front legroom"
                      />
                    </Form.Item>
                    {/* Back legroom  */}
                    <Form.Item label="Back legroom" name="Back-legroom">
                      <Input
                        type="number"
                        suffix="in"
                        className="py-[10px]"
                        placeholder="Enter Front Back legroom"
                      />
                    </Form.Item>
                    {/* Cargo volume  */}
                    <Form.Item label="Cargo volume" name="Cargo volume">
                      <Input
                        type="number"
                        suffix="in"
                        className="py-[10px]"
                        placeholder="Enter Front Back legroom"
                      />
                    </Form.Item>
                  </div>
                </Form.Item>
              ),
            },
          ]}
        />
        {/* Options  */}
        <Collapse
          items={[
            {
              key: "1",
              label: "Options",
              children: (
                <Form.Item name="Options">
                  <Checkbox.Group className="grid grid-cols-4">
                    <Checkbox value="Alloy-Wheels">Alloy Wheels</Checkbox>
                    <Checkbox value="Bluetooth">Bluetooth</Checkbox>
                    <Checkbox value="Executive-Package">
                      Executive Package
                    </Checkbox>
                    <Checkbox value="Heated-Seats">Heated Seats</Checkbox>
                    <Checkbox value="Leather-Seats">Leather Seats</Checkbox>
                    <Checkbox value="Navigation-System">
                      Navigation System
                    </Checkbox>
                    <Checkbox value="Remote-Start">Remote Start</Checkbox>
                    <Checkbox value="Sunroof-Moonroof">
                      Sunroof/Moonroof
                    </Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              ),
            },
          ]}
        />
        {/* Price Calculate  */}
        <Collapse
          className="my-5"
          items={[
            {
              key: "1",
              label: "Price Calculate",
              children: (
                <div className="grid grid-cols-2 gap-x-4">
                  {/* Front-legroom  */}
                  <Form.Item label="Car Reguler Price" name="reguler-price">
                    <Input
                      type="number"
                      className="py-[10px]"
                      placeholder="Enter Car Reguler Price"
                      onChange={(e) =>
                        handleChangePrice("regularPrice", e.target.value)
                      }
                    />
                  </Form.Item>
                  {/* Back legroom  */}
                  <Form.Item label="Vat & Tax Cost " name="vat-tax">
                    <Input
                      type="number"
                      className="py-[10px]"
                      placeholder="Enter Vat & Tax Cost"
                      onChange={(e) =>
                        handleChangePrice("vatTax", e.target.value)
                      }
                    />
                  </Form.Item>
                  {/* Cargo volume  */}
                  <Form.Item label="Enter Repair Cost" name="repair-parice">
                    <Input
                      type="number"
                      className="py-[10px]"
                      placeholder="Enter Front Back legroom"
                      onChange={(e) =>
                        handleChangePrice("repairPrice", e.target.value)
                      }
                    />
                  </Form.Item>
                  {/* Other Cost  */}
                  <Form.Item label="Enter Other Cost" name="other-cost">
                    <Input
                      type="number"
                      className="py-[10px]"
                      placeholder="Enter Other Cost"
                      onChange={(e) =>
                        handleChangePrice("otherCost", e.target.value)
                      }
                    />
                  </Form.Item>
                  <div>
                    <h1 className="text-2xl font-MyStyle">
                      Total Car Price With Cost:{" "}
                      <span className="font-semibold">
                        {totalCost.toLocaleString()} Taka
                      </span>
                    </h1>
                  </div>
                </div>
              ),
            },
          ]}
        />
        {/* Selling price  */}
        <Form.Item label="Selling Price" name="selling-price" className="mt-3">
          <Input placeholder="Enter Selling Price" className="py-[10px]" />
        </Form.Item>
        <span>Update Image</span>
        <Upload
          name="images"
          listType="picture-card"
          className="avatar-uploader mt-4"
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          beforeUpload={(file) => {
            const isImage = file.type.startsWith("image/");
            if (!isImage) {
              message.error("You can only upload image files!");
            }
            return isImage;
          }}
          multiple={true}
          fileList={fileList}
          onChange={handleChange}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
        <Form.Item>
          <Button
            htmlType="submit"
            className="w-full mt-5 bg-ButtonColor hover:!bg-ButtonHover hover:!text-white font-semibold text-white py-5"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMyCar;
