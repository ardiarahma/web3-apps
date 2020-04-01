import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import ContentPage from '../Content';
import ProfilePage from '../Profile';

class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ContentPage}/>
                <Route exact path="/profile-page" component={ProfilePage}/>
                {/* <Route exact path="/portofolio" component={PortofolioPage}/> */}
            </Switch>
        );
    }
}

export default Routing;