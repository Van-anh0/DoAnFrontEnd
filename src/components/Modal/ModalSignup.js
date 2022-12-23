import React, { useState } from "react";
import { register } from "../../actions/ApiCall";

//Adding antd modules and style
import { Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./Modal.scss";

const ModalSign = () => {
  const [registerRequest, setRegisterRequest] = useState({});

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

    const onCreate = (data) => {
      if (data.password !== data.confirm_password) {
        console.log("Nhập  lại mật khẩu không chính xác!");
        return;
      }
      register(data)
        .then((result) => {
          alert("dang ky thanh cong");
        })
        .catch((error) => {
          console.log(error);
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
          onCreate={onCreate}
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
export default ModalSign;
