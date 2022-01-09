import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";import { useDispatch } from 'react-redux'
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 14,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const RegisterStudent = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const onFinish = (formdata) => {
    console.log(formdata);
    dispatch({
      type:"ADD_USER",
      formdata
    })
    history.push("/");
  };
  return (
    <div className="form">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        labelAlign="left"
      >
        <Form.Item
          name="RollNo"
          label="Roll No"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="StudentName"
          label="Student Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="FatherName"
          label="Father Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Maths"
          label="Maths Marks"
          rules={[
            {
              type: "number",
              min: 0,
              max: 100,
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="Physics"
          label="Physics Marks"
          rules={[
            {
              type: "number",
              min: 0,
              max: 100,
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="Computers"
          label="Computers Marks"
          rules={[
            {
              type: "number",
              min: 0,
              max: 100,
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <div className="submit">
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default RegisterStudent;
