import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  CarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";

const { SubMenu } = Menu;

const sidebarItems = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <TeamOutlined />,
    label: <Link to="/">Vendor list</Link>,
  },
  {
    key: "3",
    icon: <TeamOutlined />,
    label: <Link to="/">All User List</Link>,
  },
  {
    key: "4",
    icon: <CarOutlined />,
    label: <Link to="/">All Car List</Link>,
  },
  {
    key: "5",
    icon: <FaCarSide  />,
    label: <Link to="/">Car Brand List</Link>,
  },
  {
    key: "6",
    icon: <CiLocationOn />,
    label: <Link to="/">Nearby Location List</Link>,
  },

 
];

const Sidebar = ({ onClick }) => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["4"]} // Automatically opens "Products"
      items={sidebarItems}
      onClick={onClick}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    />
  );
};

export default Sidebar;
