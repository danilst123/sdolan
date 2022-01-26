import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { selectSelectedTheme } from "../../features/theme/selectors";
import { selectViewScrolled } from "../../features/view/selectors";
import { toggleViewScrolled } from "../../features/view/slice";

const View = ({ children }) => {
  let location = useLocation();
  const dispatch = useDispatch();

  const viewScrolled = useSelector(selectViewScrolled);
  const selectedTheme = useSelector(selectSelectedTheme);

  const viewRef = createRef();

  const handleHeaderHeight = (scrollTop) => {
    scrollTop > 0
      ? dispatch(toggleViewScrolled(true))
      : dispatch(toggleViewScrolled(false));
  };

  useEffect(() => {
    const view = viewRef.current;

    handleHeaderHeight(view.scrollTop);

    view.addEventListener("scroll", (event) => {
      handleHeaderHeight(view.scrollTop);
    });
  }, [location.pathname]);

  return (
    <div
      ref={viewRef}
      className="view"
      data-scrolled={viewScrolled}
      data-theme={selectedTheme}
      data-dark={false}
    >
      {children}
    </div>
  );
};

export default View;
