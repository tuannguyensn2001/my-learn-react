import React from 'react';
import LayoutAuth from "../layout";
import {Form, Input, Button, Checkbox} from 'antd';
import {login} from "../../../services/authService";
import {useDispatch} from "react-redux";
import {setLoggedIn} from "../../../slice/authSlice";
import {useHistory} from 'react-router-dom';


function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const submitForm = (data) => {
        const {email, password} = data;

        login({email, password})
            .then(response => {
                dispatch(setLoggedIn(response.data));
                history.push('/');
            })
            .catch(err => console.log(err));


    }


    return (
        <div>
            <h3>Đăng nhập MyLearn</h3>
            <Form
                layout="vertical"
                name="basic"
                initialValues={{remember: true}}
                onFinish={submitForm}

            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, email: true, message: 'Vui lòng nhập email'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{required: true, message: 'Vui lòng nhập mật khẩu'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LayoutAuth(LoginPage);