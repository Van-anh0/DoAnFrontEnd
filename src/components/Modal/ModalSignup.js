import React, { useState } from "react";

//Adding antd modules and style
import { Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./Modal.scss";

const ModalSign = () => {
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
            name="username"
            label="Tên"
            rules={[
              {
                required: true,
                message: "Nhập tên!",
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
            name="passwordcorrect"
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

    const onCreate = (values) => {
      console.log("Received values of form: ", values);
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
