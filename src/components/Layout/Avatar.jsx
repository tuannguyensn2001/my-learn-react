import React,{useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Avatar as AvatarAntd} from "antd";



const ListMenu = styled.div`
  position: absolute;
  background-color: #fff;
  top: 40px;
  right: 20px;

`

const Wrapper = styled.div`
  position: relative;

  //&:hover {
  //  cursor: pointer;
  //}

`

const AvatarWrapper = styled.div`

`


function Avatar(props) {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <Wrapper className={'d-flex'}>
            <Link to={'/cart'} style={{
                color: '#fff'
            }
            }>{props.courseList.length}</Link>
            <AvatarWrapper onMouseEnter={() => setIsOpen(true)}  onMouseLeave={() => setIsOpen(false)} >

                <AvatarAntd
                    src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/149042797_2797977147136560_97490099559862791_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DeTHIC3FWMMAX-MTonz&_nc_ht=scontent-hkt1-1.xx&oh=1a01931737480f968a9a26f911c653ac&oe=609DB3DC"/>
            </AvatarWrapper>
            <ListMenu style={{
            display: 'block'}
            }>
                <ul>
                    <li>
                        <Link to={'/profile'} >Thông tin cá nhân</Link>
                    </li>
                    <li>Đăng xuất</li>
                </ul>
            </ListMenu>
        </Wrapper>
    )
}

export default Avatar;