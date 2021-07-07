import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { allFlattenRoutes as routes } from './index';


const Routes = ({onMouseMove}) => (
    // rendering the router with layout
    <BrowserRouter onMouseMove={onMouseMove}>
        <Switch>
            {routes.map((route, index) => {
                return (
                    !route.children && (
                        <route.route
                            key={index}
                            path={route.path}
                            roles={route.roles}
                            exact={route.exact}
                            component={route.component}>
                        </route.route>
                    )
                );
            })}
        </Switch>
    </BrowserRouter>
);

export default Routes;
