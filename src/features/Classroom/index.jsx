import React from 'react';
import Layout from "../../components/Layout";
import {Row, Col, Input, Select, Button} from 'antd';
import styled from 'styled-components';
import {SearchOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useQuery} from "react-query";
import {fetchAPIGetClassroom} from "./services";
import ClassroomItem from "./components/ClassroomItem";
import useLocalization from "../../hooks/useLocalization";


const Container = styled.div`
  margin-top: 50px;
`
const RowClassroom = styled.div`
  margin-top: 30px;
`

const {Option} = Select;

function Classroom() {
    const {trans} = useLocalization();
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
                            <Input suffix={<SearchOutlined/>} placeholder={""}/>
                        </div>
                    </Col>
                    <Col className={'gutter-row'} md={3}>
                        <div>
                            <Select style={{width: '100%'}} defaultValue="">

                            </Select>
                        </div>
                    </Col>
                    <Col className={'gutter-row'} md={3}>
                        <div><Link to={'/classroom/create'}>{trans('classroom.create_classroom')}</Link></div>
                    </Col>

                </Row>

                <RowClassroom>
                    <p>{trans('classroom.my_classroom')}</p>
                    <Row gutter={24}>
                        {classrooms?.map(classroom => (
                            <Col md={6} sm={8} xs={12} className={'gutter-row'} key={classroom.id}>
                                <ClassroomItem classroom={classroom}/>
                            </Col>
                        ))}
                    </Row>
                </RowClassroom>
            </Container>
        </Layout>
    )
}

export default Classroom;