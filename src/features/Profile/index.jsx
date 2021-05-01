import React from 'react';
import Layout from "../../components/Layout";
import LeftNavBar from "../Profile/components/LeftNavBar";
import UserProfile from "./components/RightMainInfo/UserProfile";


function Profile()
{
    return(
        <Layout>
            <div className="row container-fluid">
                <div className="container col-xl-10 d-flex mt-5">
                    <div className="col-xl-2">
                        <LeftNavBar/>
                    </div>
                    <div className="col-xl-10">
                        <UserProfile/>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Profile;