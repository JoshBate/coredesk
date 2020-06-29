import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from './Login';
// import Switch from 'formik-antd';

export default () => {
  const { path } = useRouteMatch();

  return(
    <Switch>
      <Route path={`${path}/login`} component={Login} />
    </Switch>
  );
};

// const Router = () => (
//   <div>
//     <Route path="/accounts" component={Login} />
//   </div>
// );
//
// export default Router;
