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
  right: 16px;
  width: 10rem;
  border-radius: 2px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
`

const SubListMenu = styled.ul`
    list-style-type: none;
    padding: 0;
    text-align: center;
    font-size: .9rem;
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
  padding: 1rem 0;
  width: 100%;
  &:hover {
    cursor: pointer;
    background: #ccc;
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
                src={'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_04_28/image001_2.jpg'}
                />
            </AvatarWrapper>


            <ListMenu style={{
                display: isOpen ? 'block' : 'none'
            }
            }>
                <SubListMenu>
                    <MenuItem>
                        <Link to={'/profile'}>Thông tin cá nhân</Link>
                    </MenuItem>
                    <MenuItem onClick={confirmLogout}>Đăng xuất</MenuItem>
                </SubListMenu>
            </ListMenu>
        </Wrapper>
    )
}

export default Avatar;