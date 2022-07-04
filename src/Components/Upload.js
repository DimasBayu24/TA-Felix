import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import UserService from "../services/user.service";
import React, { useState } from "react";

const UploadPayment = () => {
  const { Dragger } = Upload;
  const [url, setUrl] = useState(undefined);
  const onFinish = (values) => {
    console.log("Success:", values);
    UserService.paymentUrl(values.paymentid, url).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    window.location.reload();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const props = {
    name: "file",
    action: "http://localhost:8080/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        console.log("tes dulu brodi ", info.file.response.data.data);
        setUrl(info.file.response.data.data);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 8,
          }}
          label="Payment ID"
          name="paymentid"
          rules={[
            {
              required: true,
              message: "Please input your payment id!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadPayment;
