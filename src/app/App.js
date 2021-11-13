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
          <Route path="/extended-hooks/useCallback" component={UseCalbackExample} />
          <Route path="/extended-hooks/memo" component={MemoExample} />
          <Route path="/extended-hooks/useMemo" component={UseMemoExample} />
          <Route path="/extended-hooks/cloneElement" component={CloneElementExample} />
          <Route path="/extended-hooks/hoc" component={HOCLayout} />
          <Route path="/extended-hooks/children" component={ReactChildren} />
          <Route path="/extended-hooks/useRef" component={UseRefExample} />
          <Route path="/extended-hooks" exact component={Main} />
          <Redirect to="/extended-hooks" />
        </Switch>
      </ContainerWrapper>
    </>
  );
}

export default App;
