import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleUser } from '../../api/api';
import { Image, Tag, Card } from 'antd';
import { MailOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';

const SingleUserInfo = () => {
    const { userId } = useParams();
    const { singleUser } = useSingleUser(userId);
    
    return (
        <div className="flex justify-center items-center p-4">
            <div className="max-w-md w-full p-6 bg-white text-center">
                <Image 
                    src={singleUser.profile_pic} 
                    alt="Profile Picture" 
                    className="rounded-full mx-auto" 
                    width={120} 
                />
                <h1 className="text-2xl font-semibold mt-4 flex items-center justify-center gap-2">
                    <UserOutlined /> {singleUser.name}
                </h1>
                <p className="text-gray-600 flex items-center justify-center gap-2">
                    <MailOutlined /> {singleUser.email}
                </p>
                <p className="text-gray-500 flex items-center justify-center gap-2">
                    <LoginOutlined /> Login: {singleUser.sign_up_method}
                </p>
                <Tag color={singleUser.status === 'Active' ? 'green' : 'red'} className="mt-3">
                    {singleUser.status}
                </Tag>
            </div>
        </div>
    );
};

export default SingleUserInfo;