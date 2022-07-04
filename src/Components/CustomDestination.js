import React, { useEffect, useState } from "react";
import { HeaderNav } from "./Header";
import Detail from "./DetailCustom";
import TopCities from "./TopCities";
import Footer from "./footer";
import UserService from "../services/user.service";
import { Dropdown, Menu, Space, message } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
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
import { Button, Descriptions, Modal } from "antd";
const { Option } = Select;
const children = [];

const CustomDestination = () => {
  const [collection, setCollection] = useState(undefined);
  const [chosen, setChosen] = useState(false);
  const [trans, setTrans] = useState(0);
  const [value, setValue] = useState(undefined);
  const [cities, setCities] = useState(undefined);
  const [transportations, setTransportations] = useState(undefined);
  const [pick, setPick] = useState(undefined);
  const [itemPick, setItemPick] = useState([]);
  const [transPick, setTransPick] = useState([]);
  const [Product, setProduct] = useState(undefined);
  const [Picture, setPicture] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const handleChangeCity = (value) => {
    if (value != "") {
      UserService.getTourByPlace(value).then(
        (response) => {
          console.log("tour by place ", response.data);
          setPicture(response.data);
          setChosen(true);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      setChosen(false);
    }
    console.log(`selected ${value}`);
  };

  const handleChangeTrans = (value) => {
    UserService.getTransById(value).then(
      (response) => {
        console.log("mobil apa nich ", response.data);
        setTrans(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(`selected ${value}`);
  };
  const handleChange = (value) => {
    setTotalPrice(0);
    let dataDummy = 0;
    console.log(`selected place option ${value}`);
    console.log("tes jumlah valueeee ", value.length);
    if (value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < Picture.length; j++) {
          if (value[i] == Picture[j].ID) {
            dataDummy += Picture[j].Price;
          }
        }
      }
      setTotalPrice(dataDummy);
    } else {
      setTotalPrice(0);
    }
  };
  const [componentDisabled, setComponentDisabled] = useState(false);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  const [form] = Form.useForm();
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    console.log(value);
    console.log("Jumlah harga ", totalPrice);
    const a = value.orderdate.format("YYYY-MM-DD");
    const newDate = new Date(a);
    const destinationpackageid = null;
    const totalTotalPrice = trans.Price + totalPrice;
    const duration = value.placeoption.length;
    console.log("oke ", value.orderdate.format("YYYY-MM-DD"));
    UserService.orderHolidayPackageCustom(
      value.fullname,
      value.transportation,
      trans.Size,
      totalTotalPrice,
      destinationpackageid,
      value.email,
      value.phone,
      newDate,
      duration,
      value.placeoption
    ).then(
      (response) => {
        window.location.reload();
      },
      (error) => {}
    );
    // setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const onFinish = (values) => {
    showModal();
    setValue(values);
  };
  const onClick = ({ key }) => {
    UserService.getPickById(1).then(
      (response) => {
        console.log("data pick by id ", response.data);
        setProduct(response.data);
      },
      (error) => {
        console.log(error);
      },
      UserService.getTourByPlace("Bali").then(
        (response) => {
          console.log(response.data);
          setPicture(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
    );

    setChosen(true);
    message.info(`Click on item ${key}`);
    console.log("ini apa ", key);
  };
  const onClickTrans = ({ key }) => {
    UserService.getPickById(1).then(
      (response) => {
        console.log("data pick by id ", response.data);
        setProduct(response.data);
      },
      (error) => {
        console.log(error);
      },
      UserService.getTourByPlace("Bali").then(
        (response) => {
          console.log(response.data);
          setPicture(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
    );

    setChosen(true);
    message.info(`Click on item ${key}`);
    console.log("ini apa ", key);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    UserService.getCities().then(
      (response) => {
        setCities(response.data);
        let allData = [];
        for (let i = 0; i < response.data.length; i++) {
          console.log("ini apa woi", response.data[i]);
          let pickData = {
            label: response.data[i].Place,
            key: response.data[i].Place,
          };
          allData = [...allData, pickData];
          // this.setState({
          //   itemPick: [...this.state.itemPick, pickData],
          // });
        }
        setItemPick(allData);
        console.log("apakah ada adik ", allData);
        // this.setState({ collection: response.data });
      },
      (error) => {
        console.log(error);
      }
    );
    UserService.getTransportations().then(
      (response) => {
        setTransportations(response.data);
        console.log("ini nihh mobil ", response.data);
        let allData = [];
        for (let i = 0; i < response.data.length; i++) {
          console.log("ini apa woi", response.data[i]);
          let pickData = {
            label: response.data[i].Type,
            key: response.data[i].Type,
          };
          allData = [...allData, pickData];
          // this.setState({
          //   itemPick: [...this.state.itemPick, pickData],
          // });
        }
        setTransPick(allData);
        console.log("apakah ada adik ", allData);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <HeaderNav />
      <div style={{ paddingTop: "115px" }}>
        <div
          className="top-cities-wrapper-1"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Select
            defaultValue=""
            style={{
              width: 250,
            }}
            onChange={handleChangeCity}
          >
            <Option value="">Choose your destination</Option>
            {cities ? (
              cities.map((item) => {
                return <Option value={item.Place}>{item.Place}</Option>;
              })
            ) : (
              <div />
            )}
          </Select>
        </div>
        {chosen ? (
          <div className="top-cities-wrapper-1">
            <div
              style={{
                width: "100%",
                borderRadius: 20,
                backgroundColor: "white",
              }}
            >
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
                      <h1>{Picture ? Picture[0].Place : "loading"}</h1>
                    </div>

                    <br />

                    <Row gutter={[16, 16]}>
                      <Col lg={24} xs={24}>
                        {/* <ProductImage detail={Product} /> */}
                        {Picture ? (
                          <img src={Picture[0].PictureUrl} />
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
                    style={{
                      width: "100%",
                      padding: "3rem 4rem",
                      marginTop: 20,
                    }}
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
                      <Form.Item
                        label="Transportation"
                        name="transportation"
                        // style={{ display: "flex", justifyContent: "center" }}
                      >
                        {Picture ? (
                          <Select
                            defaultValue=""
                            style={{
                              width: "100%",
                              marginLeft: 0,
                            }}
                            onChange={handleChangeTrans}
                          >
                            <Option value="">Choose your transportation</Option>
                            {transportations ? (
                              transportations.map((item) => {
                                return (
                                  <Option value={item.ID}>{item.Type}</Option>
                                );
                              })
                            ) : (
                              <div />
                            )}
                          </Select>
                        ) : (
                          "loading"
                        )}
                      </Form.Item>
                      <Form.Item
                        label="Place Option"
                        name="placeoption"
                        // style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Select
                          mode="multiple"
                          style={{
                            width: "100%",
                          }}
                          placeholder="Choose place option"
                          defaultValue={[]}
                          onChange={handleChange}
                          optionLabelProp="label"
                        >
                          {Picture ? (
                            Picture.map((item) => {
                              return (
                                <Option
                                  value={item.ID}
                                  label={item.PlaceOption}
                                >
                                  <div className="demo-option-label-item">
                                    {item.PlaceOption}
                                  </div>
                                </Option>
                              );
                            })
                          ) : (
                            <div />
                          )}
                        </Select>
                      </Form.Item>
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
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
        {/* <Form /> */}
      </div>
      <TopCities />
      <Footer />
      <Modal
        title="Confirm Order"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>IDR {totalPrice + trans.Price}</p>
        <p>Are you sure?</p>
      </Modal>
    </div>
  );
};

export default CustomDestination;
