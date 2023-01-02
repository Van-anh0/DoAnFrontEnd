import React, { useState } from "react";
import { authApi } from "actions";

//Adding antd modules and style
import { Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./Modal.scss";

const ModalSignUp = () => {
  //popup and form code
  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Đăng Ký"
        okText="Đăng Ký"
        cancelText="Thôi"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((data) => {
              form.resetFields();
              onCreate(data);
            })
            .catch((error) => {
              console.log("Validate Failed:", error);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Nhập email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Nhập mật khẩu!",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            label="Xác nhận mật khẩu"
            rules={[
              {
                required: true,
                message: "Hãy xác nhận lại mật khẩu!",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);

    const handleRegister = (data) => {
      if (data.password !== data.confirm_password) {
        alert("Nhập  lại mật khẩu không chính xác!");
        return;
      }
      authApi.register(data).then(() => {
        alert("Đăng ký thành công");
      });
      setVisible(false);
    };

    return (
      <div>
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          Đăng ký
        </button>
        <CollectionCreateForm
          visible={visible}
          onCreate={handleRegister}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    );
  };
  return (
    <div className="MainDiv">
      <div className="container">
        <CollectionsPage />
      </div>
    </div>
  );
};
export default ModalSignUp;
