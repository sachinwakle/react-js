import React from "react";
import Inline from "./Inline";
import Style from "./Style.module.css";

function ModuleStyle() {
  return (
    <div>
      <h1 className={Style.secondary}>ModuleStyle</h1>
      <Inline />
    </div>
  );
}

export default ModuleStyle;
