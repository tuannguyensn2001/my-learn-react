import React from 'react';
import Layout from "../../components/Layout";
import {Row, Col, Input, Select, Button} from 'antd';
import styled from 'styled-components';
import {SearchOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useQuery} from "react-query";
import {fetchAPIGetClassroom} from "./services";


const Container = styled.div`
  margin-top: 50px;
`


const style = {
    backgroundColor: 'blue',
}

const {Option} = Select;

function Classroom() {
    const {data: classrooms} = useQuery('classrooms', async () => {
        const response = await fetchAPIGetClassroom();
        return response.data.data;
    })
    return (
        <Layout>
            <Container className="container">
                <Row gutter={16}>
                    <Col md={18} className={'gutter-row'}>
                        <div>
                            <Input suffix={<SearchOutlined/>} placeholder={"tuan Nhokvip"}/>
                        </div>
                    </Col>
                    <Col className={'gutter-row'} md={3}>
                        <div>
                            <Select style={{width: '100%'}} defaultValue="lucy">
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col className={'gutter-row'} md={3}>
                        <div><Link to={'/classroom/create'}>Tạo lớp học</Link></div>
                    </Col>

                </Row>

                <Row>
                    {classrooms?.map(classroom => (
                        <div>{classroom.name}</div>
                    ))}
                </Row>
            </Container>
        </Layout>
    )
}

export default Classroom;