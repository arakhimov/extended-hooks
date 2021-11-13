import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withOutCallback = useRef(0);
  const withCallback = useRef(0);

  const handleChange = ({ target }) => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  // with out callback
  const validateWithOutCallback = data => {
    console.log(data);
  };
  useEffect(() => {
    withOutCallback.current++;
  }, [validateWithOutCallback]);

  // with callback
  const validateWithCallback = useCallback(data => {
    console.log(data);
  }, []);
  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);

  useEffect(() => {
    validateWithOutCallback(data);
    validateWithCallback(data);
  }, [data]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>{`Render count: ${withOutCallback.current}`}</p>
      <p>{`Render count: ${withCallback.current}`}</p>
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email || ""}
          onChange={handleChange}
          className="me-2"
        />
      </form>
    </CardWrapper>
  );
};

export default UseCallBackExample;
