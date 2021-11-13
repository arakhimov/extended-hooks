import React from "react";
import CollapseWrapper from "../common/collapse";

const ComponentList = ({ children }) => {
  return React.Children.map(children, (child, ind) => {
    return (
      <div className="d-flex">
        <span className="me-2">{ind + 1}</span>
        {child}
      </div>
    );
  });
};

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить порядковый номер,
        относительно того, как они располагаются на странице. Вы можете использовать как{" "}
        <code>React.Children.map</code> так и <code>React.Children.toArray</code>
      </p>
      <ComponentList>
        <Component />
        <Component />
        <Component />
      </ComponentList>
    </CollapseWrapper>
  );
};

const Component = ({ children }) => {
  return <div>Компонент списка</div>;
};

export default ChildrenExercise;
