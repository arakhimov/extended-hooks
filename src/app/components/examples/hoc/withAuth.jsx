import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withAuth = Component => props => {
  const isAuth = localStorage.getItem("Auth");
  return isAuth ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>;
};

export default withAuth;
