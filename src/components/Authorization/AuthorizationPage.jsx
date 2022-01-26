import React from "react";
import { AuthBg } from "../SvgIcons/SvgIcons";
import AuthorizationWin from "./AuthorizationWin";

const AuthorizationPage = () => {
  return (
    <article className="authorization-page">
      <div className="authorization-page__bg">
        <AuthBg />
      </div>
      <div className="authorization-page__content">
        <AuthorizationWin />
      </div>
    </article>
  );
};

export default AuthorizationPage;
