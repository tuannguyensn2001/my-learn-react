import React from 'react';
import Layout from "../../components/Layout";
import styled from 'styled-components'

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AuthComponent = styled.div`
  margin-top: 130px;
  width: 30%;
  padding: 24px;
  box-shadow: 0 2px 5px 0 rgb(51 62 73 / 10%);

`


const LayoutAuth = (WrapperComponent) => {
    return (props) => {
        return(
            <Layout>
                <AuthWrapper>
                    <AuthComponent>
                        <WrapperComponent {...props}/>
                    </AuthComponent>
                </AuthWrapper>
            </Layout>
        )
    }
}

export default LayoutAuth;