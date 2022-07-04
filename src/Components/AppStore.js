import React, { Component } from "react";
import { HeaderNav } from "./Header";
import Detail from "./Detail";
import TopCities from "./TopCities";
import Footer from "./footer";
import Form from "./Form";

class AppStore extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <HeaderNav />
        <div style={{ paddingTop: "110px" }}>
          <Detail />
          {/* <Form /> */}
        </div>
        <TopCities />
        <Footer />
      </div>
    );
  }
}

export default AppStore;
