import { Button, Row, Col, Card, Divider, Table, Avatar } from "antd";
import {
  ReloadOutlined,
  ShareAltOutlined,
  EllipsisOutlined,
  UserOutlined,
  DollarOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import DashboardCard from "../../components/DashboardCard";
import MonthlyActiveUsersChart from "../../components/MonthlyActiveUsersChart";
import RevenueChart from "../../components/RevenueChart.js";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

// import DashboardCard from "../components/DashboardCard.jsx";

function Dashboard() {
  const onRefresh = () => {
    window.location.reload();
  };

  const data = [
    { name: "Blue", value: 30, color: "#2B6CB0" },
    { name: "Orange", value: 40, color: "#ED8936" },
    { name: "Red", value: 20, color: "#E53E3E" },
    { name: "Green", value: 10, color: "#38A169" },
  ];

  const columns = [
    {
      title: "Customers Name",
      dataIndex: "customer",
      key: "customer",
      render: (text, record) => (
        <div className="flex items-center">
          <Avatar src={record.avatar} size="large" className="mr-2" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Login Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Account Type",
      dataIndex: "item",
      key: "item",
    },
  ];

  const orders = [
    {
      key: "1",
      customer: "Elle Amberson",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      date: "15 Nov, 2022",
      item: "User",
    },
    {
      key: "2",
      customer: "Anna Catmire",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      date: "25 Nov, 2022",
      item: "Vendor",
    },
    {
      key: "3",
      customer: "Laura Dagson",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      date: "26 Nov, 2022",
      item: "User",
    },
    {
      key: "4",
      customer: "Rachel Green",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      date: "28 Nov, 2022",
      item: "User",
    },
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <DashboardCard
          title="New Users"
          value="34.7k"
          icon={<UserOutlined />}
          description="23 (22%)"
          change="23 (22%)"
          changeType="increase"
        />
        <DashboardCard
          title="Total Sales"
          value="$34,545"
          icon={<DollarOutlined />}
          description="Current month"
        />
        <DashboardCard
          title="Pending Leads"
          value="450"
          icon={<DatabaseOutlined />}
          description="50 in hot leads"
        />

        <Card className="col-span-1 shadow-lg">
          <h3 className="text-lg font-bold mb-2">Sales Statistic</h3>
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie data={data} dataKey="value" outerRadius={40} fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center font-bold text-lg">45,764 Total</p>
        </Card>
      </div>

      <Divider />

      {/* Monthly Active Users and Revenue Charts */}
      <Row gutter={16}>
        <Col span={12}>
          <Card
            title="Monthly Active Users (in K)"
            bordered={false}
            style={{ borderRadius: "8px", backgroundColor: "#e6f7ff" }}
          >
            <MonthlyActiveUsersChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Revenue"
            bordered={false}
            style={{ borderRadius: "8px", backgroundColor: "#fff1f0" }}
          >
            <RevenueChart />
          </Card>
        </Col>
      </Row>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 font-custom"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <Card className="col-span-3">
          <h3 className="text-lg font-bold mb-4">Recent User List</h3>
          <Table columns={columns} dataSource={orders} pagination={false} />
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
