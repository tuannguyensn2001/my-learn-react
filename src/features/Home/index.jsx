import React, {useEffect} from 'react';
import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import CourseBanner from "./components/CourseBanner";
import useLocalization from "../../hooks/useLocalization";


function Home() {

    const {trans} = useLocalization();

    useEffect(() => {
        document.title = trans('homeTitle.title');
    },[])

    return (
        <Layout>
            <Banner/>
            <CourseBanner/>
        </Layout>
    )
}

export default Home;