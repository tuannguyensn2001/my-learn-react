import React from 'react';
import Navbar from "./Navbar";
import styled from 'styled-components';

const Container = styled.div`
    padding-top: 60px;

`


function Layout(props)
{
    return(
        <div>
            <Navbar/>
                <Container>
                    {props.children}
                </Container>
        </div>
    )
}

export default Layout;
