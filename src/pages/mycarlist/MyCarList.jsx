import { Button, Image, Space, Table, Tag } from "antd";
import CarImage from "../../assets/WhatsApp Image 2025-02-13 at 3.58.45 PM.jpeg";
const MyCarList = () => {
    const columns = [
        {
          title: "Image",
          dataIndex: "image",
          key: "image",
          render: (image) => <Image src={image} width={70} className="rounded-md" />,
        },
        {
          title: "Model",
          dataIndex: "name",
          key: "name",
          render: (text) => <a className="text-blue-600">{text}</a>,
        },
        {
          title: "Year",
          dataIndex: "year",
          key: "year",
        },
        {
          title: "Condition",
          dataIndex: "condition",
          key: "condition",
        },
        {
          title: "Tags",
          key: "tags",
          dataIndex: "tags",
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag === "new" ? "green" : tag === "used" ? "blue" : "volcano";
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <Button type="primary">View Details</Button>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: "1",
          name: "BMW X5",
          year: 2020,
          condition: "Used",
          tags: ["used"],
          image: CarImage,
        },
        {
          key: "2",
          name: "Audi Q7",
          year: 2022,
          condition: "New",
          tags: ["new"],
          image: CarImage,
        },
        {
          key: "3",
          name: "Toyota Corolla",
          year: 2019,
          condition: "Certified",
          tags: ["certified"],
          image: CarImage,
        },
      ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MyCarList;
