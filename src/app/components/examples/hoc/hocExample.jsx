import React from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
import SimpleComponent from "./simpleComponent";
import Component from "./someComponent";
import withAuth from "./withAuth";
import withCardAndAuth from "./withCardAndAuth";
import withPropsStyles from "./withPropsStyles";

const ComponentWithAuth = withAuth(Component);
const ComponentWithPropsStyles = withPropsStyles(Component);
const ComposedComponent = withPropsStyles(withAuth(Component));
const SimpleComponentWithCardAndAuth = withCardAndAuth(SimpleComponent);

const HOCExample = () => {
  return (
    <>
      <CardWrapper>
        <SmallTitle>1. Обычный компонент</SmallTitle>
        <Divider />
        <Component />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>2. Функциональный HOC</SmallTitle>
        <Divider />
        <ComponentWithAuth />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>3. HOC With Styles and Props</SmallTitle>
        <Divider />
        <ComponentWithPropsStyles />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>4. Composed HOC</SmallTitle>
        <Divider />
        <ComposedComponent />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Exercise</SmallTitle>
        <Divider />
        <SimpleComponentWithCardAndAuth />
      </CardWrapper>
    </>
  );
};

export default HOCExample;
