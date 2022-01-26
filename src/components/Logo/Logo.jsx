import React from "react";
import PropTypes from "prop-types";
import { LogoSvgIcon } from "../SvgIcons/SvgIcons";

const Logo = ({ direction }) => {
  return (
    <div className="logo" data-direction={direction}>
      <div className="logo__icon">
        <LogoSvgIcon />
      </div>
      <div className="logo__text">
        <h2 className="logo__title">ЛАН-ПЭО</h2>
        <h3 className="logo__subtitle">Демо-портал</h3>
      </div>
    </div>
  );
};

Logo.propTypes = {
  direction: PropTypes.string,
};

Logo.defaultProps = {
  direction: "row",
};

export default Logo;
