import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';


const Demo = (props) => {
    return (
        <Comment
            author={<a>Han Solo</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    {props.text}
                </p>
            }

        />
    );
};

export default Demo;