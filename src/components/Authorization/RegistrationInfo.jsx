import React from "react";

const RegistrationInfo = () => {
  return (
    <p className="text-main">
      Введя код, вы соглашаетесь с{" "}
      <a className="link" href="">
        условиями сервиса
      </a>
      <br />и политикой{" "}
      <a className="link" href="">
        {" "}
        обработки персональных данных
      </a>
    </p>
  );
};

export default RegistrationInfo;
