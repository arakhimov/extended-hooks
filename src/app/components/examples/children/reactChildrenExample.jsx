import PropTypes, { node } from "prop-types";
import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";

const FormComponent = ({ children }) => {
  const [state, setState] = useState({});
  const handleChange = target => {
    setState(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  return React.Children.map(children, child => {
    const config = {
      ...child.props,
      onChange: handleChange,
      value: state[child.props.name] || ""
    };

    return React.cloneElement(child, config);
  });
};

FormComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(node), PropTypes.node])
};

const ReactChildrenExample = () => {
  return (
    <CardWrapper>
      <SmallTitle>Clone form and add props</SmallTitle>
      <Divider />
      <FormComponent>
        <TextField name="email" label="email" />
        <TextField name="password" label="Пароль" type="password" />
      </FormComponent>
    </CardWrapper>
  );
};

export default ReactChildrenExample;
