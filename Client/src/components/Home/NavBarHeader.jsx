import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu, Button } from 'antd';
function NavBarHeader() {
    const navigate = useNavigate()
    const handleClickLogout = () => {
        localStorage.clear("accessToken")
        navigate('/login')
    }
    const menu = (
        <Menu>
            <Menu.Item key="profile">Manage Profile</Menu.Item>
            <Menu.Item key="account">Account</Menu.Item>
            <Menu.Item key="logout">
                <Button type="link" onClick={handleClickLogout}>
                    Logout
                </Button>
            </Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button className='text-white'>
                User
            </Button>
        </Dropdown>
    );
}

export default NavBarHeader
