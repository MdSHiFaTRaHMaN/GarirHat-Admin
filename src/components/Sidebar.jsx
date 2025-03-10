import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  CarOutlined,
  MessageOutlined,
  PlusSquareFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

const sidebarItems = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <PlusSquareFilled />,
    label: <Link to="/add-my-car">Add My Car</Link>,
  },
  {
    key: "3",
    icon: <CarOutlined />,
    label: <Link to="/my-vehicles">My Vehicles</Link>,
  },
  {
    key: "4",
    icon: <MessageOutlined />,
    label: <Link to="/user-messages">Massages</Link>,
  },
  {
    key: "5",
    icon: <UserOutlined />,
    label: <Link to="/user-profile">My Profile</Link>,
  },
  {
    key: "6",
    icon: <CiLogout />,
    label: <Link to="/user-profile">LogOut</Link>,
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
