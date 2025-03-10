import React from "react";
import { Card, Progress } from "antd";
import { UserOutlined, BoxPlotOutlined } from "@ant-design/icons";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

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
    <div className="flex">
      <div className="w-4/6">
        <div className="flex gap-6 w-full">
          {/* Customers Card */}
          <Card className="p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <UserOutlined className="text-4xl bg-blue-100 p-3 rounded-full text-blue-600" />
                <div>
                  <p className="text-gray-500">Customers</p>
                  <h2 className="text-3xl font-bold">3,782</h2>
                </div>
              </div>
              <span className="text-green-500 flex items-center text-lg">
                <AiOutlineArrowUp /> 11.01%
              </span>
            </div>
          </Card>
          {/* Orders Card */}
          <Card className="p-6 rounded-lg border-l-4 border-red-500">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <BoxPlotOutlined className="text-4xl bg-red-100 p-3 rounded-full text-red-600" />
                <div>
                  <p className="text-gray-500">Orders</p>
                  <h2 className="text-3xl font-bold">5,359</h2>
                </div>
              </div>
              <span className="text-red-500 flex items-center text-lg">
                <AiOutlineArrowDown /> 9.05%
              </span>
            </div>
          </Card>
        </div>

        {/* Monthly Sales Chart */}
        <div className="mt-6">
          <Card className="p-4">
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
      </div>

      {/* Monthly Target */}
      <div className="mt-2 grid grid-cols-1 w-2/6">
      <Card className="p-6 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold">Monthly Target</h3>
          <p className="text-gray-500">Your progress towards the monthly goal</p>
          <div className="flex justify-center mt-6">
            <Progress type="circle" percent={75.55} strokeColor="#2563EB" format={(percent) => `${percent}%`} />
          </div>
          <p className="text-green-500 mt-4 text-center">+10%</p>
          <p className="text-gray-500 text-center mt-2">You earned $3,287 today, higher than last month.</p>
        </Card>

        {/* Target, Revenue, Today */}
        <Card className="p-4">
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
