import React from "react";

import Auth from "./Auth";
import Home from "./Home";
import Register from "./Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import SandBox from "../UI-Kit/SandBox/SandBox";
import View from "../containers/View/View";
import AuthorizationPage from "./Authorization/AuthorizationPage";

class Navmenu extends React.Component {
  render() {
    return (
      <Router>
        <View>
          <AuthorizationPage />
        </View>
      </Router>
    );
  }
}

export default Navmenu;
