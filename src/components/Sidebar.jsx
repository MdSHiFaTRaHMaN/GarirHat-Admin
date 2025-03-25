import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  CarFilled,
  CarOutlined,
  MessageOutlined,
  PlusSquareFilled,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { TbBrandAdobe, TbBrandArc } from "react-icons/tb";
import { FaBangladeshiTakaSign, FaPeopleGroup } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const sidebarItems = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: (
      <Link to="/">
        <span className="font-semibold">Dashboard</span>
      </Link>
    ),
  },
  {
    key: "2",
    icon: <CarOutlined />,
    label: (
      <Link to="/all-vehicles">
        <span className="font-semibold">All Vehicles</span>
      </Link>
    ),
  },
  {
    key: "3",
    icon: <TbBrandArc />,
    label: <span className="font-semibold">Brand</span>,
    children: [
      {
        key: "3-1",
        label: <Link to="/brand">All Brand</Link>,
      },
      {
        key: "3-2",
        label: <Link to="brand-request">New Brand Request</Link>,
      },
    ],
  },
  {
    key: "4",
    icon: <TbBrandAdobe />,
    label: <span className="font-semibold">Model</span>,
    children: [
      {
        key: "4-1",
        label: <Link to="/model">All Model</Link>,
      },
      // {
      //   key: "4-2",
      //   label: <Link to="/model-request">New Model Request</Link>,
      // },
    ],
  },
  {
    key: "5",
    icon: <SettingOutlined />,
    label: <span className="font-semibold">Feature</span>,
    children: [
      {
        key: "5-1",
        label: <Link to="/feature">All Feature</Link>,
      },
      {
        key: "5-2",
        label: <Link to="/request-feature">New Feature Request</Link>,
      },
    ],
  },

  {
    key: "6",
    icon: <UserOutlined />,
    label: (
      <Link to="/vendor-list">
        <span className="font-semibold">Vendors List</span>
      </Link>
    ),
  },
  {
    key: "7",
    icon: <FaPeopleGroup />,
    label: (
      <Link to="/user-list">
        <span className="font-semibold">Users List</span>
      </Link>
    ),
  },
  {
    key: "8",
    icon: <MdLocationPin />,
    label: (
      <Link to="/divition-bd">
        <span className="font-semibold">Location</span>
      </Link>
    ),
  },
  {
    key: "9",
    icon: <FaBangladeshiTakaSign />,
    label: (
      <Link to="/price-reason">
        <span className="font-semibold">Price Reason</span>
      </Link>
    ),
  },
  {
    key: "10",
    icon: <SettingOutlined />,
    label: <span className="font-semibold">Setting</span>,
    children: [
      {
        key: "10-1",
        label: <Link to="/about-us">About US</Link>,
      },
      {
        key: "10-2",
        label: <Link to="/term-condition">Term & Condition</Link>,
      },
      {
        key: "10-3",
        label: <Link to="/privacy-policy">Privacy Policy</Link>,
      },
    ],
  },
  {
    key: "11",
    icon: <CiLogout />,
    label: (
      <Link to="/user-profile">
        <span className="font-semibold">LogOut</span>
      </Link>
    ),
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
