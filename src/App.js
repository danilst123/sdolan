import "./App.css";

import NavMenu from "./components/NavMenu";

import { Component } from "react";
import { init } from "./features/auth/authSlice";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    return <NavMenu />;
  }
}

export default connect(null, { init })(App);
