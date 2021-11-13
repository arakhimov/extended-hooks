import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ContainerWrapper from "./components/common/container";
import NavBar from "./components/ui/navBar";
import CloneElementExample from "./layouts/cloneElement";
import HOCLayout from "./layouts/hoc";
import Main from "./layouts/main";
import MemoExample from "./layouts/memo";
import ReactChildren from "./layouts/reactChildren";
import UseCalbackExample from "./layouts/useCallback";
import UseMemoExample from "./layouts/useMemo";
import UseRefExample from "./layouts/useRef";

function App() {
  return (
    <>
      <NavBar />
      <ContainerWrapper>
        <Switch>
          <Route path="/useCallback" component={UseCalbackExample} />
          <Route path="/memo" component={MemoExample} />
          <Route path="/useMemo" component={UseMemoExample} />
          <Route path="/cloneElement" component={CloneElementExample} />
          <Route path="/hoc" component={HOCLayout} />
          <Route path="/children" component={ReactChildren} />

          <Route path="/useRef" component={UseRefExample} />
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </ContainerWrapper>
    </>
  );
}

export default App;
