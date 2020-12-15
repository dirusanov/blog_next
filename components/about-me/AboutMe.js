import React from 'react';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import Main from '../layout/main/Main';

import styling from './AboutMe.module.scss';


const AboutMeComponent = ({ AboutMeData }) => {
    const renderers = {
        code: ({language, value}) => {
            return <SyntaxHighlighter language={language} children={value} />
        }
    }
    return (
        <Main title="about-me">
            <div className={styling.header}>
                <img
                    src={AboutMeData.logo}
                    className={styling.previewImageBackground}
                    alt='preview logo'
                />
            </div>
            <article className={styling.elements}>
                <img
                    src={AboutMeData.image}
                    className={styling.previewImage}
                    alt='preview background image'
                />
                <h1 align='center'>{AboutMeData.title}</h1>
                <div className={styling.wrapper}>
                    <ReactMarkdown renderers={renderers}>{AboutMeData.text}</ReactMarkdown>
                </div>
            </article>
        </Main>
    );
};

export async function getStaticProps(context) {
    const res = await fetch(API_URL + 'about-me')
    const data = await res.json()
    if (!data) {
        return {
          notFound: true,
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}


export default AboutMeComponent;
