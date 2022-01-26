import React, { useEffect, useState } from "react";

const CodeRecieveCounter = ({ startCount = 59 }) => {
  const [count, setCount] = useState(startCount);

  return (
    <p className="code-recieve-counter">{`Осталось ${count} секунды до повторной отправки кода`}</p>
  );
};

export default CodeRecieveCounter;
