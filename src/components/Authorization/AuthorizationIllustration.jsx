import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { selectAuthContext } from "../../features/auth/selectors";
import {
  AlertSvgIcon,
  ArmchairSvg,
  CatWomanSvg,
  HeartSvgIcon,
  LampPlantSvg,
  PasswordSvgIcon,
  PlaySiteSvg,
  QestionMarkSvgIcon,
  SitesSvg,
  Woman1Svg,
  Woman2Svg,
} from "../SvgIcons/SvgIcons";

const AuthorizationIllustration = () => {
  const dispatch = useDispatch();
  const authContext = useSelector(selectAuthContext);

  const renderTop = (context) => {
    return null;
  };
  const renderLeft = (context) => {
    const armChairContextArr = [
      "sign-in",
      "access-recovery",
      "access-recovery-code-check",
    ];
    const sitePlayContextArr = ["registration", "registraion-code-check"];

    if (armChairContextArr.includes(context)) {
      return <ArmchairSvg className="svg" data-svg="arm-chair" />;
    }
    if (sitePlayContextArr.includes(context)) {
      return <PlaySiteSvg className="svg" data-svg="play-site" />;
    }
    return null;
  };
  const renderRight = (context) => {
    const lampPlantContextArr = [
      "sign-in",
      "access-recovery",
      "access-recovery-code-check",
    ];
    const sitesContextArr = ["registration", "registraion-code-check"];

    if (lampPlantContextArr.includes(context)) {
      return <LampPlantSvg className="svg" data-svg="lamp-plant" />;
    }
    if (sitesContextArr.includes(context)) {
      return <SitesSvg className="svg" data-svg="sites" />;
    }
    return null;
  };
  const renderBottom = (context) => {
    const catWomanContextArr = [
      "sign-in",
      "access-recovery",
      "access-recovery-code-check",
    ];
    const woman1ContextArr = ["registration"];
    const woman3ContextArr = ["registraion-code-check"];

    if (catWomanContextArr.includes(context)) {
      return <CatWomanSvg className="svg" data-svg="cat-woman" />;
    }
    if (woman1ContextArr.includes(context)) {
      return <Woman1Svg className="svg" data-svg="woman-1" />;
    }
    if (woman3ContextArr.includes(context)) {
      return <Woman2Svg className="svg" data-svg="woman-2" />;
    }
    return null;
  };

  const right = (
    <SwitchTransition>
      <CSSTransition
        key={authContext}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames="slide-right"
      >
        <div>{renderRight(authContext)}</div>
      </CSSTransition>
    </SwitchTransition>
  );

  const bottom = (
    <SwitchTransition>
      <CSSTransition
        key={authContext}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames="slide-bottom"
      >
        <div>{renderBottom(authContext)}</div>
      </CSSTransition>
    </SwitchTransition>
  );

  const left = (
    <SwitchTransition>
      <CSSTransition
        key={authContext}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames="slide-left"
      >
        <div>{renderLeft(authContext)}</div>
      </CSSTransition>
    </SwitchTransition>
  );

  return (
    <div className="authorization-illustration" data-form={authContext}>
      <div className="authorization-illustration__item authorization-illustration__top">
        {/*  <AlertSvgIcon className="svg" />
        <PasswordSvgIcon className="svg" />
        <QestionMarkSvgIcon className="svg" />
        <HeartSvgIcon className="svg" /> */}
      </div>
      <div className="authorization-illustration__item authorization-illustration__right">
        {right}
      </div>
      <div className="authorization-illustration__item authorization-illustration__left">
        {left}
      </div>
      <div className="authorization-illustration__item authorization-illustration__bottom">
        {bottom}
      </div>
    </div>
  );
};

export default AuthorizationIllustration;
