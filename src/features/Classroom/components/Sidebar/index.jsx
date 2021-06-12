import React from 'react';
import styled from 'styled-components';
import {Breadcrumb, Tooltip, Divider} from "antd";
import PropTypes from 'prop-types';
import useLocalization from "../../../../hooks/useLocalization";
import {Link} from 'react-router-dom';
import {SettingOutlined} from '@ant-design/icons';
import tooltip from "../../../../defines/tooltip";
import components from "./styled";


const {
    SidebarWrapper,
    SidebarTitle,
    SidebarClassroomName,
    SidebarNameWrapper,
    SidebarName,
    SettingWrapper,
    Setting
} = components;


function Sidebar({code}) {

    const {trans} = useLocalization();

    return (
        <SidebarWrapper>
            <SidebarTitle>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Tooltip placement={tooltip.PLACEMENT_BOTTOM} title={trans('classroom.back_classroom')}>
                            <Link to={'/classroom'}>{trans('classroom.list_classroom')}</Link>
                        </Tooltip>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>
                        {code}
                    </Breadcrumb.Item>

                </Breadcrumb>
            </SidebarTitle>
            <SidebarClassroomName>
                <SidebarNameWrapper>
                    <SidebarName>{trans('classroom.classroom_code')} : {code} </SidebarName>
                </SidebarNameWrapper>
                <SettingWrapper>
                    <Tooltip placement={tooltip.PLACEMENT_BOTTOM} title={trans('classroom.setting')}>
                        <Setting/>
                    </Tooltip>
                </SettingWrapper>
            </SidebarClassroomName>
            <Divider/>
        </SidebarWrapper>
    )
}


Sidebar.propTypes = {
    code: PropTypes.string
}


export default Sidebar;