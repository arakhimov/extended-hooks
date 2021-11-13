import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };
  const handleLargeSize = () => {
    inputRef.current.style.width = "80%";
  };
  const handleSmallSize = () => {
    inputRef.current.style.width = "20%";
  };

  return (
    <CardWrapper>
      <SmallTitle className="card-title">Программируемые действия и свойства</SmallTitle>
      <Divider />
      <form action="">
        <label htmlFor="email">Email</label>
        <input ref={inputRef} type="email" id="email" className="me-2" />
        <button type="button" onClick={handleClick} className="btn btn-primary">
          set focus
        </button>
        <button type="button" onClick={handleLargeSize} className="btn btn-danger">
          set large size
        </button>
        <button type="button" onClick={handleSmallSize} className="btn btn-success">
          set small size
        </button>
      </form>
    </CardWrapper>
  );
};

export default ProgrammablActionsExample;
