import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withCardAndAuth = Component => props => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(isAuth));
    setIsAuth(prevState => !prevState);
  };
  const handleLogOut = () => {
    localStorage.setItem("user", JSON.stringify(isAuth));
    setIsAuth(prevState => !prevState);
  };

  return (
    <CardWrapper>
      <Component {...props} isAuth={isAuth} onLogin={handleLogin} onLogOut={handleLogOut} />
    </CardWrapper>
  );
};

export default withCardAndAuth;
