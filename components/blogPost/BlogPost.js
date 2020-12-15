import React from 'react';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import Main from '../layout/main/Main';

import styling from './BlogPost.module.scss';

/**
 * Renders a blog post. It dynamically determines the all the elements
 * and renders their corresponding components.
 * @param post {object} data of the blog post
 * @returns {*}
 * @constructor
 */
const Post = ({ post }) => {
    const CustomParagraph = ({ children }) => <h3 className="testClass">{children}</h3>
    const renderers = {
        code: ({language, value}) => {
            return <SyntaxHighlighter language={language} children={value} />
        },
    }

    return (
        <Main title={post.title}>
            <div className={styling.header} hidden={!post.image}>
                <img
                    src={post.image || ''}
                    className={styling.previewImageBackground}
                    alt='preview image background'
                />
            </div>
            <article className={styling.elements}>
                <img
                    src={post.image || ''}
                    className={styling.previewImage}
                    alt='preview image'
                    hidden={!post.image}
                />
                <h1 align='center'>{post.title}</h1>
                <div className='post-body'>
                    <div className={styling.wrapper}>
                        <ReactMarkdown renderers={renderers}>{post.text}</ReactMarkdown>
                        <i className={styling.lastEdit}>Last edit: {new Date(post.updated_at).toDateString()}</i>
                    </div>
                </div>
            </article>
        </Main>
    );
};

export default Post;
