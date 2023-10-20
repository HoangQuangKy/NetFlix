import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
function NavBarHeader() {
    const items = [
        {
            key: '1',
            label: 'Manage Profile',
        },
        {
            key: '2',
            label: 'Account',
        },
        {
            key: '3',
            label: 'Logout',
        },
    ];
    return (
        <Dropdown
            menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ['3'],
            }}

        >
            <Typography.Link >
                <Space className='text-white text-sm'>
                    User
                    <DownOutlined />
                </Space>
            </Typography.Link>
        </Dropdown>
    )
}

export default NavBarHeader
