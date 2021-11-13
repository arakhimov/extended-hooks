import PropTypes from "prop-types";
import React from "react";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return (
    <>
      {isAuth ? (
        <button type="button" onClick={onLogOut} className="btn btn-danger">
          Выйти из системы
        </button>
      ) : (
        <button type="button" onClick={onLogin} className="btn btn-primary">
          Войти
        </button>
      )}
    </>
  );
};

SimpleComponent.propTypes = {
  onLogOut: PropTypes.func,
  onLogin: PropTypes.func,
  isAuth: PropTypes.bool
};

export default SimpleComponent;
