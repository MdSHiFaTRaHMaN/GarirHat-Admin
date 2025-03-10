import React from "react";
import { Card } from "antd";
import { UserOutlined, BoxOutlined } from "@ant-design/icons";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", sales: 100 },
  { month: "Feb", sales: 350 },
  { month: "Mar", sales: 180 },
  { month: "Apr", sales: 270 },
  { month: "May", sales: 190 },
  { month: "Jun", sales: 200 },
  { month: "Jul", sales: 90 },
  { month: "Aug", sales: 150 },
  { month: "Sep", sales: 220 },
  { month: "Oct", sales: 340 },
  { month: "Nov", sales: 250 },
  { month: "Dec", sales: 80 },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Customers Card */}
        <Card className="p-4 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <UserOutlined className="text-2xl bg-gray-200 p-2 rounded-full" />
              <div>
                <p className="text-gray-500">Customers</p>
                <h2 className="text-2xl font-bold">3,782</h2>
              </div>
            </div>
            <span className="text-green-500 flex items-center">
              <AiOutlineArrowUp /> 11.01%
            </span>
          </div>
        </Card>

        {/* Orders Card */}
        <Card className="p-4 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BoxOutlined className="text-2xl bg-gray-200 p-2 rounded-full" />
              <div>
                <p className="text-gray-500">Orders</p>
                <h2 className="text-2xl font-bold">5,359</h2>
              </div>
            </div>
            <span className="text-red-500 flex items-center">
              <AiOutlineArrowDown /> 9.05%
            </span>
          </div>
        </Card>
      </div>

      {/* Monthly Sales Chart */}
      <div className="mt-6">
        <Card className="p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#2563EB" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Monthly Target */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 shadow-md">
          <h3 className="text-lg font-semibold">Monthly Target</h3>
          <p className="text-gray-500">Target you’ve set for each month</p>
          <div className="relative w-40 h-40 mx-auto mt-4">
            <div className="w-full h-full rounded-full bg-gray-200 absolute"></div>
            <div className="w-full h-full rounded-full bg-blue-500 absolute" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">75.55%</div>
          </div>
          <p className="text-green-500 mt-2 text-center">+10%</p>
          <p className="text-gray-500 text-center mt-2">You earned $3287 today, higher than last month.</p>
        </Card>

        {/* Target, Revenue, Today */}
        <Card className="p-4 shadow-md">
          <div className="grid grid-cols-3 text-center">
            <div>
              <p className="text-gray-500">Target</p>
              <h3 className="text-xl font-bold">$20K</h3>
              <p className="text-red-500 flex items-center justify-center">
                <AiOutlineArrowDown /> 10%
              </p>
            </div>
            <div>
              <p className="text-gray-500">Revenue</p>
              <h3 className="text-xl font-bold">$20K</h3>
              <p className="text-green-500 flex items-center justify-center">
                <AiOutlineArrowUp /> 15%
              </p>
            </div>
            <div>
              <p className="text-gray-500">Today</p>
              <h3 className="text-xl font-bold">$20K</h3>
              <p className="text-green-500 flex items-center justify-center">
                <AiOutlineArrowUp /> 8%
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
