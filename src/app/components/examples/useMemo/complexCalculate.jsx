import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = n => (n ? n * factorial(n - 1) : 1);
const runFactorial = n => {
  console.log("run factorial");
  return factorial(n);
};

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100);
  const fact = useMemo(() => runFactorial(value), [value]);
  const [otherState, setOtherState] = useState(false);

  const buttonColor = otherState ? "danger" : "success";
  useEffect(() => console.log("render button color"), [buttonColor]);

  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <p>value: {value}</p>
        <p>Result: {fact}</p>
        <button
          type="button"
          onClick={() => setValue(prevState => prevState + 10)}
          className="btn btn-primary mx-1"
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => setValue(prevState => prevState - 10)}
          className="btn btn-primary mx-1"
        >
          Decrement
        </button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <button
          onClick={() => setOtherState(prevState => !prevState)}
          type="button"
          className={"btn btn-" + buttonColor}
        >
          Change color
        </button>
      </CardWrapper>
    </>
  );
};

export default ComplexCalculateExample;
