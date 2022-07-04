import React from "react";
import "./Styles/download.css";
import Iphoneimg from "./Images/iphone.png";
import Androidimg from "./Images/android.png";
import Playstoreimg from "./Images/google-store.png";
import Appstoreimg from "./Images/apple-store.png";
import DetailCustomPage from "./DetailProductPage/DetailProductPageCustom";

const Download = () => (
  <div className="top-cities-wrapper-1">
    <div style={{ width: "100%", borderRadius: 20, backgroundColor: "white" }}>
      <DetailCustomPage />
    </div>
  </div>
);

export default Download;
