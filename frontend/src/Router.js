import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import NavBar from "./components/NavBar/NavBar";
import SeeAllLogros from "./components/LogrosComponent/SeeLogros";
import SeeAllTrabajos from "./components/TrabajosComponents/SeeAllTrabajos";
import Contactme from "./components/Contact/Contactme";
const Router = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archivments" component={SeeAllLogros} />
        <Route exact path="/works" component={SeeAllTrabajos} />
        <Route exact path="/contact" component={Contactme} />
      </Switch>
    </BrowserRouter>
  </>
);
export default Router;
