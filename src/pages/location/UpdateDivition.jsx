import { EditFilled, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Form, Input, Upload, message } from "antd";
import { useState } from "react";
import { API } from "../../api/api";
import React from "react";

const UpdateDivition = ({divition, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [profileFile, setProfileFile] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  // Handle file selection
  const handleProfileImage = ({ fileList }) => {
    setProfileFile([...fileList]);
  };

  const handleOk = async () => {
    try {
      // Create FormData object
      const formData = new FormData();
      // If a new image is uploaded, append it to FormData
      if (profileFile.length > 0) {
        formData.append("image", profileFile[0].originFileObj);
      }
      setLoading(true);

      // API Call
      const response = await API.put(`/location/division/${divition.key}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        message.success("Divition Image Updated Successfully");
        setIsModalOpen(false);
        refetch();
      } else {
        message.error("Update failed");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      message.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Update Division Image"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          name="edit-profile"
            initialValues={{
                image: divition.image
                ? [{ url: divition.image }]
                : [],
            }}
        >
          <Form.Item label="Profile Image" name="image">
            <Upload
              listType="picture-card"
              className="avatar-uploader mt-4"
              beforeUpload={(file) => {
                const isImage = file.type.startsWith("image/");
                if (!isImage) {
                  message.error("You can only upload image files!");
                }
                return false;
              }}
              maxCount={1}
              fileList={profileFile}
              onChange={handleProfileImage}
            >
              {profileFile.length < 1 && (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" loading={loading} onClick={handleOk}>
              Update Divition Image
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateDivition;
