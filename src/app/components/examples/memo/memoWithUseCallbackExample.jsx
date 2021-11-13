import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";

const LogOutButton = ({ onLogOot }) => {
  useEffect(() => {
    console.log("render button");
  });

  return (
    <button className="btn btn-danger" type="button" onClick={onLogOot}>
      logOut
    </button>
  );
};

LogOutButton.proppTypes = {
  onLogOot: PropTypes.func
};

function areEqual(prevState, nextState) {
  if (prevState.handleLogOut !== nextState.handleLogOut) {
    return false;
  }
  return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = props => {
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("Auth");
  }, [props]);

  const [state, setState] = useState(false);

  return (
    <>
      <button
        className="btn btn-primary me-2"
        type="button"
        onClick={() => setState(prevState => !prevState)}
      >
        initiate rerender
      </button>
      <MemoizedLogOutButton onLogOot={handleLogOut} />
    </>
  );
};

export default MemoWithUseCallbackExample;
