import React from 'react';
import Layout from "../../components/Layout";
import OptionFilter from "../../components/OptionFilter";
import Course from "../../components/Common/Course";
import styled from 'styled-components'
import {Input} from 'antd';

const Option = styled.div`
    margin-top: 30px;
`



const {Search} = Input;

function CoursePage()
{

    const change  = event => console.log(event.target);


    const renderCourse = [1,2,3,4,5,6].map(item => {
        return (
            <div key={item} className="col-md-6 col-lg-5">
                <Course/>
            </div>
        )
    })

    return(
        <Layout>
            <div className="container">
               <div className="row">
                   <div className="col-md-3 col-lg-3">
                       <Option>
                           <Search placeholder="Tìm kiếm" />
                           <OptionFilter changeOption={change}/>
                           <OptionFilter/>
                       </Option>
                   </div>
                   <div className="col-md-9 col-lg-9">
                       <div className="row">
                           {renderCourse}
                       </div>
                   </div>
               </div>
            </div>
        </Layout>
    )
}

export default CoursePage;