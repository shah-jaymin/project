import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPageComponent from "../components/Login";
import AdminDashboardComponent from '../components/AdminComponents/AdminDashboard';
// import StudentTableComponent from '../components/AdminComponents/StudentTableComponent';
// import SubjectsComponent from '../components/AdminComponents/SubjectsComponent';
// import AdminRoutingComponent from '../components/AdminComponents/AdminRoutingComponent';
import FacultyMainPage from '../components/Faculty/FacultyMainPage'
import AdminRoutingComponent from "../components/AdminComponents/AdminRouting";
import RegisterComponent from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import ChangePassword from "../components/ChangePassword";
import Forums from "../components/Forum";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPageComponent />
      </Route>
      <Route exact path="/login">
        <LoginPageComponent />
      </Route>

      <Route exact path="/register">
        <RegisterComponent />
      </Route>

      {/* <AdminRoutingComponent /> */}

      {/* Admin Routing */}
      <Route exact path="/changepassword">
        <ChangePassword />
      </Route>
      <Route exact path="/forum">
        <Forums />
      </Route>
      {/* <AdminRoutingComponent /> */}
      <FacultyMainPage />
    </Switch>
  );
};

export default Routing;
