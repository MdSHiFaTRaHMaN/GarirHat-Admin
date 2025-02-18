import { Button, Row, Col, Card, Divider, Table, Tooltip } from "antd";
import {
  ReloadOutlined,
  ShareAltOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
// import RevenueChart from "../../components/RevenueChart.js";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { FaChartBar, FaMoneyBill, FaUser } from "react-icons/fa";
import PostViewChart from "../../components/PostViewChart.jsx";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

function Dashboard() {
  const onRefresh = () => {
    window.location.reload();
  };

  const data = [
    {
      name: "Total Earning",
      value: "৳34 Crore",
      color: "#4225F4",
      icon: <FaBangladeshiTakaSign />
      ,
    },
    { name: "Customers", value: 1485, color: "#4285F4", icon: <FaUser /> },
    { name: "Revenue", value: 5873, color: "#FBBC05", icon: <FaMoneyBill /> },
    { name: "Profit", value: 70, color: "#EA4335", icon: <FaChartBar /> },
  ];

  const mounthlydata = [
    { name: "Jan", value: 80 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 70 },
    { name: "Apr", value: 20 },
    { name: "May", value: 50 },
    { name: "Jun", value: 80 },
    { name: "Jul", value: 40 },
    { name: "Aug", value: 55 },
    { name: "Sep", value: 70 },
    { name: "Oct", value: 90 },
    { name: "Nov", value: 50 },
    { name: "Dec", value: 95 },
  ];

  const recentActivity = [
    {
      key: 1,
      type: "Inquiry",
      detail: "New inquiry on Model A",
      date: "2025-02-17",
    },
    {
      key: 2,
      type: "Message",
      detail: "Customer sent a message",
      date: "2025-02-16",
    },
    { key: 3, type: "Sale", detail: "Model B was sold", date: "2025-02-15" },
  ];

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="flex gap-2">
          <Button icon={<ReloadOutlined />} onClick={onRefresh}>
            Refresh
          </Button>
          <Button icon={<ShareAltOutlined />}>Share</Button>
          <Button shape="circle" icon={<EllipsisOutlined />} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4  gap-4 p-6">
        {data.map((item, index) => (
          <Card
            key={index}
            className="shadow-lg rounded-lg p-4 border relative"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 font-medium">{item.name}</p>
                <h2 className="text-2xl font-bold">
                  {item.name === "Revenue" ? `$${item.value}` : item.value}
                </h2>
                <p
                  className={
                    item.name === "Profit" ? "text-red-500" : "text-green-500"
                  }
                >
                  {item.name === "Profit" ? "▼ -2.3%" : "▲ +4.6%"}
                </p>
              </div>
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <BarChart data={mounthlydata}>
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="value" fill="#4285F4" radius={[5, 5, 0, 0]} />
                <Bar dataKey="value" fill="#FBBC05" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        ))}
      </div>

      <Divider />

      <Card
        title="View Post Chart"
        bordered={false}
        style={{ borderRadius: "8px", backgroundColor: "#fff1f0" }}
        className=""
      >
        <PostViewChart />
      </Card>
      {/* Monthly Active Users and Revenue Charts */}
      {/* <Row gutter={16} className="w-full">
        <Col span={12}>
          <Card
            title="Revenue"
            bordered={false}
            style={{ borderRadius: "8px", backgroundColor: "#fff1f0" }}
          >
            <RevenueChart />
          </Card>
        </Col>
      </Row> */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 font-custom"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <Card className="col-span-3">
          <h3 className="text-lg font-bold mb-4">Recent User List</h3>
          <Table
            columns={[
              { title: "Type", dataIndex: "type" },
              { title: "Detail", dataIndex: "detail" },
              { title: "Date", dataIndex: "date" },
            ]}
            dataSource={recentActivity}
            pagination={false}
          />
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
