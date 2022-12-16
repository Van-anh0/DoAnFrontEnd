import React, { useState } from 'react';


//Adding antd modules and style
import { Modal, Form, Input, Radio } from 'antd';
import "antd/dist/antd.css";
import "./Modal.scss"

class ModalLog extends React.Component {
  render(){
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
                  console.log('Validate Failed:', info);
                });
            }}
          >
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              initialValues={{
                modifier: 'public',
              }}
            >
              <Form.Item
                name="username"
                label="Tên"
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập tên!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Mật khẩu"
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập mật khẩu!',
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
          console.log('Received values of form: ', values);
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
}

}
export default ModalLog;