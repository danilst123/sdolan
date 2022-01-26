import React from "react";
import PropTypes from "prop-types";
import AuthorizationShowcase from "./AuthorizationShowcase";
import AuthorizationForm from "./AuthorizationForm";

const AuthorizationWin = (props) => {
  return (
    <section className="authorization-win">
      <AuthorizationShowcase />
      <AuthorizationForm />
    </section>
  );
};

AuthorizationWin.propTypes = {};

export default AuthorizationWin;
