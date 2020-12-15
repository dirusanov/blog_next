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



export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
