import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { productRoutes } from './productRoutes'

const RouteGenerator = () => {
    const routeDesign = (
        <Switch>
            {
                productRoutes.map(route => {
                    return <Route exact key={route.id} path={route.url} component={route.componentName} />

                })
            }
        </Switch>
    )
    return routeDesign;
}

export default RouteGenerator
