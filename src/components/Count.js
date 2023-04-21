import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  function handleCountClick() {
    setCount((count) => count + 1);

    setCount((count) => count + 1);
  }

  return (
    <div>
      <button onClick={handleCountClick}>click count: {count}</button>
    </div>
  );
};

export default Count;
