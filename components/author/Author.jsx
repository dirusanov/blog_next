import React from 'react';

import PostPreview from '../postPreview/PostPreview';

import styling from './Author.module.scss';
import Main from "../layout/main/Main";

const Author = ({ post }) => (
    <>
        <div className={styling.posts}>
                <PostPreview
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    previewText={post.text}
                    previewImage={post.image || ''}
                    lastEdit={new Date(post.updated_at).toDateString()}
                    small
                />
        </div>
    </>
);

export default Author;
