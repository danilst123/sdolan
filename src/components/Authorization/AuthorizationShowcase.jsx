import React from "react";
import PropTypes from "prop-types";
import Logo from "../Logo/Logo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAuthContext } from "../../features/auth/selectors";
import AuthorizationIllustration from "./AuthorizationIllustration";

const AuthorizationShowcase = (props) => {
  const dispatch = useDispatch();
  const authContext = useSelector(selectAuthContext);

  return (
    <section className="authorization-showcase">
      <Logo direction="column" />
      <AuthorizationIllustration />
    </section>
  );
};

AuthorizationShowcase.propTypes = {};

export default AuthorizationShowcase;
