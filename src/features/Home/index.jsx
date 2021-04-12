import React from 'react';
import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import CourseBanner from "./components/CourseBanner";




function Home() {
    return (
        <Layout>
            <Banner/>
            <CourseBanner/>
        </Layout>
    )
}

export default Home;