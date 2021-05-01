import React from 'react';
import Layout from "../../components/Layout";
import LeftNavBar from "../Profile/components/LeftNavBar";
import UserProfile from "./components/RightMainInfo/UserProfile";
import {Switch, Route,useRouteMatch} from 'react-router-dom';
import ProfilePage from "./pages/Profile";
import Account from "./pages/Account";
import Avatar from "./pages/Avatar";

function Profile()
{
    const {url, path} = useRouteMatch();
    return(
        <Layout>
            <div className="row container-fluid">
                <div className="container col-xl-10 d-flex mt-5">
                    <div className="col-xl-2">
                        <LeftNavBar/>
                    </div>
                    <div className="col-xl-10">

                        <Switch>
                            <Route path={`${path}/`} exact component={ProfilePage} />
                            <Route path={`${path}/avatar`} component={Avatar} />
                            <Route path={`${path}/account`} component={Account} />

                        </Switch>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Profile;