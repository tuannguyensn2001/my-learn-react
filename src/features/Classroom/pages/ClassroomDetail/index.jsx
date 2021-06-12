import React from 'react';
import Layout from "../../../../components/Layout";
import {useParams} from "react-router-dom";
import {Col, Row} from 'antd';
import Sidebar from "../../components/Sidebar";

function ClassroomDetail() {
    const {code} = useParams();


    return (
        <Layout>
            <div className="container">
                <Row gutter={16}>
                    <Col md={4}>
                        <Sidebar code={code}/>
                    </Col>
                </Row>
            </div>

        </Layout>
    )
}

export default ClassroomDetail;