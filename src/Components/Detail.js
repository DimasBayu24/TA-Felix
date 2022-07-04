import React from "react";
import "./Styles/download.css";
import Iphoneimg from "./Images/iphone.png";
import Androidimg from "./Images/android.png";
import Playstoreimg from "./Images/google-store.png";
import Appstoreimg from "./Images/apple-store.png";
import DetailPage from "./DetailProductPage/DetailProductPage";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col } from "antd";
import {
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { Button, Descriptions } from "antd";
import ProductImage from "../Components/DetailProductPage/Sections/ProductImage";
import ProductInfo from "../Components/DetailProductPage/Sections/ProductInfo";
import UserService from "../services/user.service";
import { Typography } from "antd";
const Download = () => {
  const [Product, setProduct] = useState(undefined);
  const [Picture, setPicture] = useState(undefined);
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  const [componentDisabled, setComponentDisabled] = useState(false);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  const [form] = Form.useForm();

  useEffect(() => {
    const pickId = JSON.parse(localStorage.getItem("destinationid"));
    const placeId = localStorage.getItem("destinationcity");
    console.log("berapa pick id ", pickId);
    UserService.getPickById(pickId).then(
      (response) => {
        console.log("data pick by id ", response.data);
        setProduct(response.data);
      },
      (error) => {
        console.log(error);
      },
      UserService.getTourByPlace(placeId).then(
        (response) => {
          console.log(response.data);
          setPicture(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }, []);
  const onFinish = (values) => {
    console.log(values);
    const a = values.orderdate.format("YYYY-MM-DD");
    const newDate = new Date(a);
    console.log("oke ", values.orderdate.format("YYYY-MM-DD"));
    UserService.orderHolidayPackage(
      values.fullname,
      Product.TransportID,
      Product.Size,
      Product.PricePackage,
      Product.ID,
      values.email,
      values.phone,
      newDate,
      Product.Duration
    ).then(
      (response) => {
        window.location.reload();
      },
      (error) => {}
    );
    // UserService.orderHolidayPackage()
  };
  const addToCartHandler = (productId) => {
    // dispatch(addToCart(productId))
  };
  return (
    <div className="top-cities-wrapper-1">
      <div>
        <div>
          <div
            style={{
              width: "100%",
              borderRadius: 20,
              backgroundColor: "white",
            }}
          >
            <div
              className="postPage"
              style={{ width: "100%", padding: "3rem 4rem" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>{Product ? Product.DestinationCity : "loading"}</h1>
              </div>

              <br />

              <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                  {/* <ProductImage detail={Product} /> */}
                  {Product ? (
                    <img src={Product.PictureUrl} />
                  ) : (
                    <img src="https://res.cloudinary.com/dimasbayuseno/image/upload/v1655650384/go-cloudinary/erphkho2rtqs5dwshhcm.jpg" />
                  )}
                  {/* <img src="https://res.cloudinary.com/dimasbayuseno/image/upload/v1655650384/go-cloudinary/erphkho2rtqs5dwshhcm.jpg" /> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexWrap: "wrap",
                    }}
                  >
                    {Picture
                      ? Picture.map((item) => {
                          return (
                            <div
                              style={{
                                width: 250,
                              }}
                            >
                              <img src={item.PictureUrl} />
                            </div>
                          );
                        })
                      : "loading..."}
                  </div>
                </Col>
                <Col lg={12} xs={24}>
                  {Product ? (
                    <div>
                      <Descriptions bordered={true} title="Product Info">
                        <Descriptions.Item span={6} label="Package">
                          {" "}
                          {Product.Package}
                        </Descriptions.Item>
                        <Descriptions.Item span={6} label="Car">
                          {" "}
                          {Product.Type}
                        </Descriptions.Item>
                        <Descriptions.Item span={6} label="Car Size">
                          {" "}
                          {Product.Size}
                        </Descriptions.Item>
                        <Descriptions.Item span={6} label="Price">
                          {Product.PricePackage}
                        </Descriptions.Item>
                        <Descriptions.Item span={6} label="Durasi">
                          {Product.Duration} Hari
                        </Descriptions.Item>
                        <Descriptions.Item span={6} label="Description">
                          {" "}
                          {Product.Description}
                        </Descriptions.Item>
                      </Descriptions>

                      <br />
                      <br />
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {/* <Button size="large" shape="round" type="danger"
                          onClick={addToCarthandler}
                      >
                          Add to Cart
                          </Button> */}
                      </div>
                    </div>
                  ) : (
                    "loading"
                  )}
                </Col>
              </Row>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: 20,
              backgroundColor: "white",
            }}
          >
            <div
              className="postPage"
              style={{ width: "100%", padding: "3rem 4rem", marginTop: 20 }}
            >
              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                initialValues={{
                  disabled: componentDisabled,
                }}
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
                onFinish={onFinish}
                form={form}
              >
                <Form.Item label="Full name" name="fullname">
                  <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                  <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>

                <Form.Item label="Order Date" name="orderdate">
                  <DatePicker />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Order
                </Button>
              </Form>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* <div className="download-wrapper">
      <div className="iphone">
        <img src={Iphoneimg} alt="Iphone :P" />
      </div>
      <div className="download-section">
        <h2>Headout on the go</h2>
        <hr
          style={{
            backgroundColor: '#ffbb58',
            width: '75px',
            height: '2px',
            border: 'none',
            marginTop: '0px',
            marginBottom: '0px'
          }}
        />
        <div>
          <p id="downloads-info">
            Download our mobile app for easier & faster checkout. <br />
            We can send you the download link to get started right away!
          </p>
        </div>
        <div className="download-links">
          <a
            href="https://itunes.apple.com/us/app/tourlandish/id899327000?ls=1&mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Appstoreimg} alt="Apple Store" className="store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.tourlandish.chronos&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Playstoreimg} alt="Google Play Store" className="store" />
          </a>
        </div>
      </div>
      <div className="android">
        <img src={Androidimg} alt="Android :D" />
      </div>
    </div> */}
    </div>
  );
};

export default Download;
