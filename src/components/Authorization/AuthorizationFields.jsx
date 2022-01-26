import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAuthContext } from "../../features/auth/selectors";
import FieldSet from "../Forms/FieldSet";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TextField from "../../UI-Kit/Forms/Textfield";
import CodeRecieveCounter from "../Forms/CodeRecieveCounter";

const AuthorizationField = ({ label }) => {
  const dispatch = useDispatch();
  const authContext = useSelector(selectAuthContext);

  const [fields, setFields] = useState([]);

  const handleFields = (context) => {
    switch (context) {
      case "sign-in":
        return [
          {
            label: "Электронная почта",
            value: "",
            name: "mail",
          },
          {
            label: "Пароль",
            value: "",
            name: "password",
          },
        ];
      case "registration":
        return [
          {
            label: "Электронная почта",
            value: "",
            name: "mail",
          },
        ];
      case "access-recovery":
        return [
          {
            label: "Электронная почта",
            value: "",
            name: "mail",
          },
        ];
      case "access-recovery-code-check":
        return [
          {
            label: "Введите полученный код",
            value: "",
            name: "mail",
            helperText: <CodeRecieveCounter />,
          },
        ];
      case "registraion-code-check":
        return [
          {
            label: "Введите полученный код",
            value: "",
            name: "mail",
            helperText: <CodeRecieveCounter />,
          },
        ];
      case "last-step":
        return [
          {
            label: "Имя",
            value: "",
            name: "name",
          },
          {
            label: "Пароль",
            value: "",
            name: "password",
          },
        ];
      default:
        return null;
    }
  };

  const handleFieldValue = (event) => {};

  useEffect(() => {
    const initFields = handleFields(authContext);
    const mappedFields = initFields.map((field) => {
      return {
        ...field,
        onChange: (event) => {
          handleFieldValue(event);
        },
      };
    });
    setFields(mappedFields);
  }, [authContext]);

  return (
    <FieldSet>
      <TransitionGroup component={null}>
        {!!fields.length &&
          fields.length > 0 &&
          fields.map((field, index) => (
            <CSSTransition key={index} timeout={200} classNames="fade">
              <div>
                <TextField {...field} />
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </FieldSet>
  );
};

AuthorizationField.propTypes = {
  fields: PropTypes.array,
};

export default AuthorizationField;
