import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
  const prevState = useRef("");
  const [currentState, setCurrentState] = useState("false");
  useEffect(() => {
    prevState.current = currentState;
  }, [currentState]);

  const handleChangeState = () => {
    setCurrentState(prevState => (prevState === "false" ? "true" : "false"));
  };

  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <Divider />
      <p>{`prev state: ${prevState.current}`}</p>
      <p>{`current state: ${currentState}`}</p>
      <button type="button" onClick={handleChangeState} className="btn btn-primary">
        change state
      </button>
    </CardWrapper>
  );
};

export default PrevStateExample;
