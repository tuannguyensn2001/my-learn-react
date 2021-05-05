import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Avatar as AvatarAntd, Modal, notification} from "antd";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";



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

  &:hover {
    cursor: pointer;
  }

`

const MenuItem = styled.li`
  &:hover {
    cursor: pointer;
  }
`

const {confirm} = Modal;


function Avatar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {
        console.log('render 2');
    }, [])


    const history = useHistory();

    const confirmLogout = () => {
        confirm({
            content: 'Bạn chắc chắn muốn đăng xuất ?',
            okText: 'Đồng ý',
            cancelText: 'Hủy',
            onOk() {
                // localStorage.removeItem('user_token');
                // history.push('/');

                import('../../slice/authSlice')
                    .then(module => {
                        const {setLogOut} = module;
                        dispatch(setLogOut());
                        notification['success']({
                            message: 'Đăng xuất thành công'
                        })
                    });

            }

        })
    }

    return (
        <Wrapper className={'d-flex'}>
            <Link to={'/cart'} style={{
                paddingRight: '10px',
                color: '#fff',
                paddingTop: '3px'
            }
            }><i className="fas fa-shopping-cart fa-2x"/></Link>
            <AvatarWrapper onClick={() => setIsOpen((prevState) => !prevState)}>

                <AvatarAntd
                    src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/149042797_2797977147136560_97490099559862791_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DeTHIC3FWMMAX-MTonz&_nc_ht=scontent-hkt1-1.xx&oh=1a01931737480f968a9a26f911c653ac&oe=609DB3DC"/>
            </AvatarWrapper>


            <ListMenu style={{
                display: isOpen ? 'block' : 'none'
            }
            }>
                <ul>
                    <MenuItem>
                        <Link to={'/profile'}>Thông tin cá nhân</Link>
                    </MenuItem>
                    <MenuItem onClick={confirmLogout}>Đăng xuất</MenuItem>
                </ul>
            </ListMenu>
        </Wrapper>
    )
}

export default Avatar;