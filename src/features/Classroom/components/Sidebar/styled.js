import styled from "styled-components";
import {SettingOutlined} from "@ant-design/icons";

export const SidebarWrapper = styled.div`
  margin-top: 50px;
  background-color: #fff;
  height: auto;
`

export const SidebarTitle = styled.div`

`

export const SidebarClassroomName = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

`

export const SidebarNameWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const SidebarName = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
`

export const SettingWrapper = styled.div`
  border-radius: 50%;

  &:hover {
    background-color: #f0f2f5;
  }
`

export const Setting = styled(SettingOutlined)`
  font-size: 20px;
  padding: 10px;
`

const components = {
    SidebarWrapper,
    SidebarTitle,
    SidebarClassroomName,
    SidebarNameWrapper,
    SidebarName,
    SettingWrapper,
    Setting
}

export default components;