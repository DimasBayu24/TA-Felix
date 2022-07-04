import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from "./Components/MainHome";
import NewYork from "./Components/NewYork";
import AppStore from "./Components/AppStore";
import CustomDestination from "./Components/CustomDestination";
import history from "./history";
import Upload from "./Components/Upload";

const CityRoutes = () => (
  <BrowserRouter history={history}>
    <Routes>
      <Route exact path="/" element={<MainHome />} />
      <Route exact path="/cities/new-york" element={<NewYork />} />
      <Route exact path="/cities/las-vegas" element={<MainHome />} />
      <Route exact path="/cities/rome" element={<MainHome />} />
      <Route exact path="/cities/paris" element={<MainHome />} />
      <Route exact path="/cities/london" element={<MainHome />} />
      <Route exact path="/cities/dubai" element={<MainHome />} />
      <Route exact path="/cities/barcelona" element={<MainHome />} />
      <Route exact path="/cities/madrid" element={<MainHome />} />
      <Route exact path="/cities/singapore" element={<MainHome />} />
      <Route exact path="/cities/venice" element={<MainHome />} />
      <Route exact path="/cities/milan" element={<MainHome />} />
      <Route exact path="/cities/naples" element={<MainHome />} />
      <Route exact path="/cities/budapest" element={<MainHome />} />
      <Route exact path="/cities/edinburg" element={<MainHome />} />
      <Route exact path="/cities/florence" element={<MainHome />} />
      <Route exact path="/upload-payment" element={<Upload />} />
      <Route exact path="/detail" element={<AppStore />} />
      <Route exact path="/custom-destination" element={<CustomDestination />} />
    </Routes>
  </BrowserRouter>
);

export default CityRoutes;
