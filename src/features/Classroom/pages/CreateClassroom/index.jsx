import React, {useState} from 'react';
import Layout from "../../../../components/Layout";
import {Button, Image, notification} from "antd";
import styled from "styled-components";
import {Form, Input, Switch} from 'antd';
import useLocalization from "../../../../hooks/useLocalization";
import src from '../../../../assets/img/create_classroom.png';
import {fetchAPICreateClassroom} from "../../services";
import {useHistory} from "react-router-dom";

// const src = 'https://www.seekpng.com/png/full/193-1932978_student-cartoon-png-student-cartoon-image-png.png';


const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ClassroomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled(Form)`
  margin-top: 50px;
  width: 50%;
`

const SubmitButton = styled(Button)`
  width: 100%;
`

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 14},
};

const tailLayout = {
    wrapperCol: {offset: 0, span: 24},
};

function CreateClassroom() {

    const [isPrivateCode, setIsPrivateCode] = useState(false);
    const {trans} = useLocalization();
    const [form] = Form.useForm();
    const history = useHistory();

    const onFinish = (value) => {
        if (!value.private_code) value.private_code = null;
        fetchAPICreateClassroom({
            classroom: value
        })
            .then(response => {
                history.push('/classroom')
                notification['success']({
                    description: response.data.message,
                })
            })
            .catch(err => console.log(err));
    }

    return (
        <Layout>
            <div className="container">
                <ImageWrapper>
                    <Image width={'300px'} height={'300px'} src={src}/>
                </ImageWrapper>
                <ClassroomWrapper>
                    <FormWrapper
                        onFinish={onFinish}
                        layout={'vertical'}
                    >
                        <Form.Item
                            label={trans('classroom.name')}
                            name={'name'}
                            rules={[
                                {
                                    required: true,
                                    message: trans('classroom.required.name')
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label={trans('classroom.category')}
                            name={'category'}
                            rules={[
                                {
                                    required: true,
                                    message: trans('classroom.required.category')
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label={trans('classroom.private_code')}
                            name={'is_private_code'}
                        >
                            <Switch
                                onChange={setIsPrivateCode}
                            />
                        </Form.Item>

                        {isPrivateCode &&
                        <Form.Item
                            label={null}
                            name={'private_code'}
                            rules={[
                                {
                                    required: true,
                                    message: trans('classroom.required.code')
                                }
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>
                        }

                        <Form.Item
                            label={trans('classroom.is_accept')}
                            name={'is_accept'}
                        >
                            <Switch/>
                        </Form.Item>

                        <Form.Item {...tailLayout} >
                            <SubmitButton type={'primary'}
                                          htmlType={'submit'}>{trans('classroom.create')}</SubmitButton>
                        </Form.Item>
                    </FormWrapper>
                </ClassroomWrapper>
            </div>
        </Layout>
    )
}

export default CreateClassroom;