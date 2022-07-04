import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHome from "./Components/MainHome";
import NewYork from "./Components/NewYork";
import AppStore from "./Components/AppStore";
import CustomDestination from "./Components/CustomDestination";
import history from "./history";

const CityRoutes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={MainHome} />
      <Route exact path="/cities/new-york" component={NewYork} />
      <Route exact path="/cities/las-vegas" component={MainHome} />
      <Route exact path="/cities/rome" component={MainHome} />
      <Route exact path="/cities/paris" component={MainHome} />
      <Route exact path="/cities/london" component={MainHome} />
      <Route exact path="/cities/dubai" component={MainHome} />
      <Route exact path="/cities/barcelona" component={MainHome} />
      <Route exact path="/cities/madrid" component={MainHome} />
      <Route exact path="/cities/singapore" component={MainHome} />
      <Route exact path="/cities/venice" component={MainHome} />
      <Route exact path="/cities/milan" component={MainHome} />
      <Route exact path="/cities/naples" component={MainHome} />
      <Route exact path="/cities/budapest" component={MainHome} />
      <Route exact path="/cities/edinburg" component={MainHome} />
      <Route exact path="/cities/florence" component={MainHome} />
      <Route exact path="/detail" component={AppStore} />
      <Route exact path="/custom-destination" component={CustomDestination} />
    </Switch>
  </BrowserRouter>
);

export default CityRoutes;
