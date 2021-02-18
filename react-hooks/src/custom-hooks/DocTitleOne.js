import React, { useState, useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount((preCount) => preCount + 1)}>
        Count:{count}
      </button>
    </div>
  );
}

export default DocTitleOne;
