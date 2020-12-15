import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import Main from '../components/layout/main/Main';
import PostPreview from '../components/postPreview/PostPreview';
import API_URL from "../utils/http-utils";
import blogConfig from "../blogConfig";


const Posts = (props) => {
    const posts = props.posts

    const [isLoading, setLoading] = useState(false); //State for the loading indicator
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    useEffect(() => { //After the component is mounted set router event handlers
        Router.events.on('routeChangeStart', startLoading);
        Router.events.on('routeChangeComplete', stopLoading);

        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
        }
    }, [])

    const paginationHandler = (page) => {
        const currentPath = props.router.pathname;
        const currentQuery = props.router.query;
        currentQuery.page = page.selected + 1;

        props.router.push({
            pathname: currentPath,
            query: currentQuery,
        });

    };
    const renderers = {
        code: ({language, value}) => {
            return <SyntaxHighlighter language={language} children={value} />
        }
    }
    let content;
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div>centered content</div>
    </div>
    if (isLoading)
        content = <div style={{display: 'flex', justifyContent: 'center'}}>
        <div>Loading...</div>
    </div>;
    else {
        //Generating posts list
        content = (
            (posts || []).map(post => (
                <PostPreview
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    previewText=<ReactMarkdown renderers={renderers}>{post.text}</ReactMarkdown>
                    previewImage={post.image}
                    lastEdit={new Date(post.updated_at).toDateString()}
                />
            ))
        );
    }
    let paginate = null
    if (props.totalCount >= props.perPage) {  
        paginate = <div className="paginate-container">
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            activeClassName={'active'}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            initialPage={props.currentPage - 1}
                            pageCount={props.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={paginationHandler}
                        />
                    </div>
    }

    return (
        <div className="container">
            <Main>
                <div className="posts">
                    {content}
                    {paginate}
                </div>
            </Main>
        </div>
    );
};


//Fetching posts in get Intial Props to make the app seo friendly
Posts.getInitialProps = async ({ query }) => {
    const currentPage = query.page
    const perPage = blogConfig.pagination.amountPostsOnPage

    let pageOffset;
    if (currentPage === '0' || currentPage === '1' || currentPage == null) {
        pageOffset = 0
    } else {
        pageOffset = parseInt(currentPage) * perPage - perPage
    }
    const url = API_URL + `?limit=${perPage}` + `&offset=${pageOffset}`
    const res = await fetch(url);
    const posts = await res.json()
    const pageCount = posts.count / perPage

    return {
        totalCount: posts.count,
        pageCount: pageCount,
        currentPage: currentPage,
        perPage: perPage,
        posts: posts.results,
    };
}


export default withRouter(Posts);
