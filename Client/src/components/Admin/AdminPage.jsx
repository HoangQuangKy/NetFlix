import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MainData from './MainData';
import {
    UserOutlined,
    HomeOutlined,
    VideoCameraOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserSwitchOutlined,
    ExclamationCircleOutlined,
    VideoCameraAddOutlined,
    DeleteOutlined,
    SwitcherOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items1 = [
    getItem('Logout', '2', <LogoutOutlined />)
]
const items = [

    getItem('Administrator', '1', <HomeOutlined />,),
    getItem('Quản lí tài khoản', 'sub1', <UserOutlined />, [
        getItem('Thêm tài khoản', '2', <UserAddOutlined />),
        getItem('Xóa tài khoản', '3', <UserDeleteOutlined />),
        getItem('Thay đổi thông tin tài khoản', '4', <UserSwitchOutlined />),
        getItem('Danh sách phim', '5', <ExclamationCircleOutlined />),
    ]),
    getItem('Quản lí phim', 'sub2', <VideoCameraOutlined />, [
        getItem('Thêm phim', '6', <VideoCameraAddOutlined />),
        getItem('Xóa phim', '7', <DeleteOutlined />),
        getItem('Thay đỏi thông tin phim', '8', <SwitcherOutlined />),
    ]),
]
function AdminPage() {
    return (
        <div className='w-full h-[100vh] flex flex-row bg-white'>
            <div className='w-[260px] h-[100vh] bg-black pt-5 flex flex-col justify-between pb-5'>
                <Menu
                    className='w-[256px]'
                    theme='dark'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
                <Menu
                    className='w-[256px]'
                    mode='inline'
                    theme='dark'
                    items={items1}
                    defaultSelectedKeys={['1']}
                />
            </div>
            <MainData />
        </div>
    )
}

export default AdminPage
