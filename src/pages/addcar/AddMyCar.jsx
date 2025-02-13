import { Input, Select, Checkbox, Button, Form, Collapse } from "antd";
import { CarOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddMyCar = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };
  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
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
            <Input placeholder="Enter Car Make" className="py-[10px]"/>
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
            <Input type="number" placeholder="Enter Year" className="py-[10px]"/>
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
            <Input placeholder="Enter Exterior Color" className="py-[10px]"/>
          </Form.Item>
          {/* MPG  */}
          <Form.Item label="MPG" name="MPG">
            <Input placeholder="Enter MPG" className="py-[10px]"/>
          </Form.Item>
          {/* Engine  */}
          <Form.Item label="Engine" name="Engine">
            <Input placeholder="Enter Engine" className="py-[10px]"/>
          </Form.Item>
          {/* Trim  */}
          <Form.Item label="Trim" name="Trim">
            <Input placeholder="Enter Trim" className="py-[10px]"/>
          </Form.Item>
          {/* VIN  */}
          <Form.Item label="VIN" name="VIN">
            <Input placeholder="Enter VIN" className="py-[10px]"/>
          </Form.Item>
          {/* Stock number  */}
          <Form.Item label="Stock number" name="Stock-number">
            <Input placeholder="Enter Stock number" className="py-[10px]"/>
          </Form.Item>
          {/* Interior color  */}
          <Form.Item label="Interior color" name="enterior-color">
            <Input placeholder="Enter Interior color" className="py-[10px]"/>
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
          {/* mileage  */}
          <Form.Item label="Mileage" name="mileage">
            <Input type="number" suffix="miles" placeholder="Enter Mileage" className="py-[10px]"/>
          </Form.Item>
          {/* transmission  */}
          <Form.Item label="Transmission" name="transmission">
            <Select placeholder="Select Transmission" className="h-[44px]">
              <Option value="Automatic">Automatic</Option>
              <Option value="Manual">Manual</Option>
            </Select>
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
                  <Checkbox.Group className="grid grid-cols-4">
                    <Checkbox value="ABS">ABS Brakes</Checkbox>
                    <Checkbox value="Backup Camera">Backup Camera</Checkbox>
                    <Checkbox value="Curtain-Airbags">Curtain Airbags</Checkbox>
                    <Checkbox value="Driver-Airbag">Driver Airbag</Checkbox>
                    <Checkbox value="Front-Side-Airbags">
                      Front Side Airbags
                    </Checkbox>
                    <Checkbox value="Passenger-Airbag">
                      Passenger Airbag
                    </Checkbox>
                    <Checkbox value="Rear-Side-Airbags">
                      Rear Side Airbags
                    </Checkbox>
                    <Checkbox value="Blind Spot Monitoring">
                      Blind Spot Monitoring
                    </Checkbox>
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

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full mt-5">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMyCar;
