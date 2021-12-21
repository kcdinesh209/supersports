import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Shipping from './containers/Shipping';
import Signin from './containers/Signin';
import Thankyou from './containers/Thankyou';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/shipping'} component={Shipping} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/signup'} component={Signin} />
                <Route exact path={'/thankyou'} component={Thankyou} />
            </Switch>
        </>
    );
};
export default Router;
