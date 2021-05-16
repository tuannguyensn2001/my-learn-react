import React from 'react';
import Layout from "../../components/Layout";
import {Row,Col,Input,Select,Button} from 'antd';
import styled from 'styled-components';
import {SearchOutlined} from '@ant-design/icons';


const Container = styled.div`
  margin-top: 50px;
`


const style = {
    backgroundColor: 'blue',
}

const {Option} = Select;

function Classroom()
{
    return(
        <Layout>
            <Container className="container">
                <Row gutter={16}>
                    <Col  md={18} className={'gutter-row'}>
                        <div>
                            <Input suffix={<SearchOutlined/>} placeholder={"tuan Nhokvip"}/>
                        </div>
                    </Col>
                    <Col className={'gutter-row'} md={3}>
                        <div>
                            <Select style={{width: '100%'}} defaultValue="lucy" >
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
                        <div><Button>Tạo lớp học</Button></div>
                    </Col>

                </Row>
            </Container>
        </Layout>
    )
}

export default Classroom;