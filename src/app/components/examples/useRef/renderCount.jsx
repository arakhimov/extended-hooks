import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const RenderCountExample = () => {
  const renderCount = useRef(0);
  const [otherState, setOtherState] = useState(false);
  useEffect(() => {
    renderCount.current++;
  }, [otherState]);

  const handleClick = () => {
    setOtherState(prevState => !prevState);
  };

  return (
    <CardWrapper>
      <SmallTitle>Подсчет количесва рендеров</SmallTitle>
      <Divider />
      <p>{`render count: ${renderCount.current}`}</p>
      <button type="button" onClick={handleClick} className="btn btn-primary">
        change other state
      </button>
    </CardWrapper>
  );
};

export default RenderCountExample;
