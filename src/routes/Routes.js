import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// Import
import { connect } from 'react-redux';
import { Dashboard } from '../refs';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        {/* <MustBeUser user={user} path="/" exact component={Main} /> */}
                        <Route path="/" exact component={Dashboard}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

// const MustBeUser = ({ component: Component, ...rest }) => {
//     const { user } = rest;
//     const token = localStorage.getItem("TOKEN");
//     return (
//         <Route {...rest} render={(props) => {
//             if (!user._id && token) return <Redirect to={{ pathname: '/authentication', state: { from: props.location } }} />
//             return <Redirect to='/login' />
//         }} />
//     )
// }

const mapStateToProps = (state) => {
    return {
        user: state.user,
        fetchDataStatus: state.fetchDataStatus
    };
}
export default connect(mapStateToProps, null)(Routes);
