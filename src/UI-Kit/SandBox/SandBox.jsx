import React from "react";
import Button from "../Buttons/Button";

const SandBox = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <Button size="big" style={{ marginLeft: "20px" }}>
          Сохранить
        </Button>
        <Button size="medium" style={{ marginLeft: "20px" }}>
          Сохранить
        </Button>
        <Button size="small" style={{ marginLeft: "20px" }}>
          Сохранить
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <Button size="big" color="secondary" style={{ marginLeft: "20px" }}>
          Сохранить
        </Button>
        <Button size="medium" color="secondary" style={{ marginLeft: "20px" }}>
          Сохранить
        </Button>
        <Button size="small" color="secondary" style={{ marginLeft: "20px" }}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default SandBox;
