import Login from '../pages/login';
// auth





// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: Login
};



// auth


// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [
    rootRoute
];

export const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes };
