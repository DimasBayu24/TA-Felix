import axios from "axios";

const API_URL = "http://localhost:8080/";

const getPublicContent = () => {
  return axios.get(API_URL + "tours");
};

const getPicks = () => {
  return axios.get(API_URL + "picks");
};

const getCities = () => {
  return axios.get(API_URL + "cities");
};

const paymentUrl = (id, PictureUrl) => {
  return axios.patch(API_URL + `upload-payment/patch?id=${id}`, { PictureUrl });
};

const getTransportations = () => {
  return axios.get(API_URL + "transportations-custom");
};

const getProducts = () => {
  return axios.get(API_URL + "products", { withCredentials: true });
};
const getPickById = (id) => {
  return axios.get(API_URL + `pick?id=${id}`);
};

const getTransById = (id) => {
  return axios.get(API_URL + `transportation-custom?id=${id}`);
};

const getTourByPlace = (place) => {
  return axios.get(API_URL + `tour?place=${place}`);
};

const getOrder = () => {
  return axios.get(API_URL + "products", { withCredentials: true });
};

const getAllOrderById = (id) => {
  return axios.get(API_URL + `orders_by_id?user_id=${id}`, {
    withCredentials: true,
  });
};

const orderFood = (id, price, quantity) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.ID;
  return axios.post(
    API_URL + "order_food",
    { id, quantity, user_id, price },
    { withCredentials: true }
  );
};

const orderHolidayPackage = (
  Fullname,
  TransportationID,
  TransportationQty,
  TotalPrice,
  DestinationPackageByID,
  Email,
  Phone,
  OrderDate,
  Duration
) => {
  const Status = "Not Done";
  const IsPackage = true;
  return axios.post(API_URL + "order/package", {
    Fullname,
    Status,
    TransportationID,
    TransportationQty,
    TotalPrice,
    DestinationPackageByID,
    IsPackage,
    Email,
    Phone,
    OrderDate,
    Duration,
  });
};

const orderHolidayPackageCustom = (
  Fullname,
  TransportationID,
  TransportationQty,
  TotalPrice,
  DestinationPackageByID,
  Email,
  Phone,
  OrderDate,
  Duration,
  arrOrderItem
) => {
  const Status = "Not Done";
  const IsPackage = false;
  return axios.post(API_URL + "order/custom", {
    Fullname,
    Status,
    TransportationID,
    TransportationQty,
    TotalPrice,
    DestinationPackageByID,
    IsPackage,
    Email,
    Phone,
    OrderDate,
    Duration,
    arrOrderItem,
  });
};

const getAvailableById = (id) => {
  return axios.get(API_URL + `available_product?product_id=${id}`, {
    withCredentials: true,
  });
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getProducts,
  getAllOrderById,
  getPickById,
  getOrder,
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAvailableById,
  orderFood,
  getPicks,
  getTourByPlace,
  orderHolidayPackage,
  getCities,
  getTransportations,
  getTransById,
  orderHolidayPackageCustom,
  paymentUrl,
};

export default UserService;
