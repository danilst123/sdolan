import React, { useContext, useState } from "react";
import { selectAuthContext } from "../../features/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { changeContext } from "../../features/auth/authSlice";
import TextButton from "../../UI-Kit/Buttons/TextButton";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import RegistrationInfo from "./RegistrationInfo";
import AuthorizationFields from "./AuthorizationFields";
import Button from "../../UI-Kit/Buttons/Button";

const AuthorizationForm = () => {
  const dispatch = useDispatch();
  const authContext = useSelector(selectAuthContext);

  const handleAuthorizationObj = (context) => {
    switch (context) {
      case "sign-in":
        return {
          type: "sign-in",
          toggles: {
            top: {
              title: "Создать аккаунт",
              action: () => {
                formToggleHandler("registration");
              },
            },
          },
          titles: {
            main: "Войти в аккаунт",
            sub: "на демо-портале ЛАН-ПЭО",
          },
          form: {
            info: "Вы ввели неверную электронную почту или пароль",
            valid: false,
            component: <AuthorizationFields />,
            actions: {
              buttons: {
                primary: {
                  title: "Войти",
                  action: () => {},
                },
                addition: {
                  title: "Не помню пароль",
                  action: () => {
                    formToggleHandler("access-recovery");
                  },
                },
              },
            },
          },
        };
      case "sign-in-error":
        return {
          type: "sign-in-error",
          toggles: {
            top: {
              title: "Создать аккаунт",
              action: () => {
                formToggleHandler("registration");
              },
            },
          },
          titles: {
            main: "Войти в аккаунт",
            sub: "на демо-портале ЛАН-ПЭО",
          },
          form: {
            component: <AuthorizationFields />,
            actions: {
              buttons: {
                primary: {
                  title: "Войти",
                  action: () => {},
                },
                addition: {
                  title: "Не помню пароль",
                  action: () => {
                    formToggleHandler("access-recovery");
                  },
                },
              },
            },
          },
        };
      case "registration":
        return {
          type: "registration",
          toggles: {
            top: {
              title: "Войти в аккаунт",
              action: () => {
                formToggleHandler("sign-in");
              },
            },
          },
          titles: {
            main: "Создание аккаунта",
          },
          form: {
            component: <AuthorizationFields />,
            info: "Введите свой адрес электронной почты",
            actions: {
              buttons: {
                primary: {
                  title: "Продолжить",
                  action: () => {
                    formToggleHandler("registraion-code-check");
                  },
                },
              },
            },
          },
        };
      case "access-recovery":
        return {
          type: "access-recovery",
          toggles: {
            top: {
              title: "Создать аккаут",
              action: () => {
                formToggleHandler("registration");
              },
            },
            bottom: {
              title: "Войти в аккаунт",
              action: () => {
                formToggleHandler("sign-in");
              },
            },
          },
          titles: {
            main: "Восстановление доступа",
          },
          form: {
            component: <AuthorizationFields />,
            actions: {
              buttons: {
                primary: {
                  title: "Отправить временный код",
                  action: () => {
                    formToggleHandler("access-recovery-code-check");
                  },
                },
              },
            },
          },
        };
      case "access-recovery-code-check":
        return {
          type: "access-recovery-code-check",
          toggles: {
            top: {
              title: "Создать аккаут",
              action: () => {
                formToggleHandler("registration");
              },
            },
            bottom: {
              title: "Войти в аккаунт",
              action: () => {
                formToggleHandler("sign-in");
              },
            },
          },
          titles: {
            main: "Проверочный код",
          },
          form: {
            info: "Мы отправили код на почту, введите его",
            component: <AuthorizationFields />,
          },
        };
      case "registraion-code-check":
        return {
          type: "registraion-code-check",
          toggles: {
            top: {
              title: "Создать аккаут",
              action: () => {
                formToggleHandler("registration");
              },
            },
          },
          titles: {
            main: "Проверочный код",
          },
          form: {
            component: <AuthorizationFields />,
            info: "Мы отправили код на почту, введите его",
            submit: () => {
              formToggleHandler("last-step");
            },
          },
          info: {
            component: <RegistrationInfo />,
          },
        };
      case "last-step":
        return {
          type: "last-step",
          toggles: {
            top: {
              title: "Войти в другой аккаунт",
              action: () => {
                formToggleHandler("registration");
              },
            },
          },
          titles: {
            main: "Последний шаг",
          },
          form: {
            component: <AuthorizationFields />,
            actions: {
              buttons: {
                primary: {
                  title: "Продолжить",
                },
              },
            },
          },
        };
      default:
        return null;
    }
  };

  const formToggleHandler = (value) => {
    dispatch(changeContext(value));
  };

  const authObj = handleAuthorizationObj(authContext);

  const { type, toggles, titles, form, info } = authObj;

  return (
    <form
      className="authorization-form"
      data-form={authContext}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        if (form.submit) form.submit();
      }}
    >
      {authObj && (
        <>
          <div className="authorization-form__toggle">
            <TextButton
              onClick={() => {
                toggles.top.action();
              }}
            >
              <SwitchTransition>
                <CSSTransition
                  key={type}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                  classNames="fade"
                >
                  <div>{toggles.top.title}</div>
                </CSSTransition>
              </SwitchTransition>
            </TextButton>
          </div>
          <h1 className="authorization-form__title">
            <SwitchTransition>
              <CSSTransition
                key={type}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                classNames="fade"
              >
                <div>{titles.main}</div>
              </CSSTransition>
            </SwitchTransition>
          </h1>
          {/* <CSSTransition
            classNames="fade"
            timeout={200}
            in={!!titles.sub}
            mountOnEnter
          >
            <h3 className="authorization-form__subtitle">{titles.sub}</h3>
          </CSSTransition> */}
          <div className="authorization-form__fielset">
            <CSSTransition
              classNames="fade"
              timeout={200}
              in={!!form.info}
              mountOnEnter
            >
              <p className="authorization-form__info">{form.info}</p>
            </CSSTransition>

            <div className="authorization-form__fields">{form.component}</div>
          </div>
          {form.actions && (
            <div className="authorization-form__actions">
              {form.actions.buttons.primary && (
                <Button
                  variant="contained"
                  size="big"
                  onClick={() => {
                    form.actions.buttons.primary.action();
                  }}
                >
                  <SwitchTransition>
                    <CSSTransition
                      key={type}
                      addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                      }
                      classNames="fade"
                    >
                      <div>{form.actions.buttons.primary.title}</div>
                    </CSSTransition>
                  </SwitchTransition>
                </Button>
              )}
              {!!form.actions.buttons.addition && (
                <CSSTransition
                  classNames="fade"
                  timeout={200}
                  in={!!form.actions.buttons.addition}
                >
                  <div>
                    <TextButton
                      onClick={() => {
                        form.actions.buttons.addition.action();
                      }}
                    >
                      {form.actions.buttons.addition.title}
                    </TextButton>
                  </div>
                </CSSTransition>
              )}
            </div>
          )}
          <div className="authorization-form__bottom">
            {toggles.bottom && (
              <CSSTransition
                classNames="fade"
                timeout={200}
                in={!!toggles.bottom}
              >
                <div>
                  <TextButton
                    onClick={() => {
                      toggles.bottom.action();
                    }}
                  >
                    {toggles.bottom.title}
                  </TextButton>
                </div>
              </CSSTransition>
            )}
            {info && (
              <CSSTransition classNames="fade" timeout={200} in={!!info}>
                <div>{info.component}</div>
              </CSSTransition>
            )}
          </div>
        </>
      )}
    </form>
  );
};

AuthorizationForm.propTypes = {};

export default AuthorizationForm;
