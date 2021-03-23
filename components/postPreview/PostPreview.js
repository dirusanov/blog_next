import React from 'react';
import Link from 'next/link';


import styling from './PostPreview.module.scss';

const PostPreview = ({ slug, previewImage, title, lastEdit, previewText, small }) => {

    return (
        <div className={small ? styling.wrapperSmall : styling.wrapper}>
            <Link href='/post/[slug]' as={'/post/' + slug}>
                <article className={styling.post}>
                    <img
                        className={styling.header}
                        src={previewImage}
                        hidden={!previewImage}
                    />
                    {/*{title}*/}
                    <div className={styling.content}>
                        <h2>
                            <Link href='/post/[slug]' as={'/post/' + slug}>
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
