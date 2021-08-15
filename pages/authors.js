import React from 'react';

import Main from '../components/layout/main/Main';
import Author from '../components/author/Author';

import blogConfig from '../blogConfig';
import {API_URL} from "../utils/http-utils";


const Authors = ({ posts }) => (
    <Main>
        {(posts || []).map(post => <Author key={post.id} post={post} />)}
    </Main>
);

export async function getStaticProps() {
    try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        return {
            props: {
                posts,
            },
        }
    } catch (e) {
        console.log(e)
    }
}


export default Authors;
