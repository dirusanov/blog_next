import React from 'react';
import {getAllPostIds, getPostData} from '../../utils/getPosts'


import BlogPost from '../../components/blogPost/BlogPost';


/**
 * Renders the blog post for the given data.
 * @param post
 * @returns {*}
 * @constructor
 */
const Post = (post) => <BlogPost post={post.postData} />;

export default Post;



export async function getStaticPaths({ props }) {
    const paths = await getAllPostIds()
    let add = paths.forEach(function(item, i, paths) {
        item.locale = 'ru';
    });
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params, locale }) {
    const postData = await getPostData(params.slug)
    return {
        props: {
            postData
        }
    }
}
