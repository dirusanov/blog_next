import React from 'react';
import Link from 'next/link';


import styling from './PostPreview.module.scss';

const PostPreview = ({ id, previewImage, title, lastEdit, previewText, small }) => {

    return (
        <div className={small ? styling.wrapperSmall : styling.wrapper}>
            <Link href='/post/[id]' as={'/post/' + id}>
                <article className={styling.post}>
                    <div
                        className={styling.header}
                        style={{ backgroundImage: `url("${previewImage}")` }}
                        hidden={!previewImage}
                    />
                    {/*{title}*/}
                    <div className={styling.content}>
                        <h2>
                            <Link href='/post/[id]' as={'/post/' + id}>
                                <a>{title}</a>
                            </Link>
                        </h2>
                        <p>{previewText}</p>
                        <div>Last edit: {lastEdit}</div>
                    </div>
                </article>
            </Link>
        </div>
    );
};

export default PostPreview;
