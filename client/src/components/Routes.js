import React from 'react'
import { Route, Switch } from 'react-router'
import { routes } from '../utils/routes'

export const Routes = () => {

    const renderRoutes = routes.map((route) => <Route exact path={route.path} component={route.component} />)

    return (
        <Switch>
            {renderRoutes}
        </Switch>
    )
}
