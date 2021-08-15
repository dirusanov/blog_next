import React from 'react';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import Main from '../layout/main/Main';
import {API_URL} from "../../utils/http-utils";

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


export default AboutMeComponent;
