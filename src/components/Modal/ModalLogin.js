import React, { useState } from "react";

//Adding antd modules and style
import { Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./Modal.scss";

import { useDispatch } from "react-redux";
import { loginAPI } from "redux/user/userSlice";

const ModalLog = () => {
  const dispatch = useDispatch();
  //popup and form code
  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Đăng nhập"
        okText="Đăng nhập"
        cancelText="Thôi"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
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
                message: "Hãy nhập email",
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
                message: "Hãy nhập password",
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

    const handleLogin = (values) => {
      dispatch(loginAPI(values));
      setVisible(false);
    };

    return (
      <div>
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          Đăng nhập
        </button>
        <CollectionCreateForm
          visible={visible}
          onCreate={handleLogin}
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
export default ModalLog;
