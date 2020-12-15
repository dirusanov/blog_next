import React from 'react'; 

import AboutMeComponent from "../components/about-me/AboutMe";
import API_URL from "../utils/http-utils";


const AboutMe = ( props ) => <AboutMeComponent key={props.id} AboutMeData={props} />;


export async function getStaticProps(context) {
    const res = await fetch(API_URL + 'about-me')
    const data = await res.json()
    const lastAboutMe = data.pop()
    if (!data) {
        return {
            props: null,
        }
    }

    return {
        props: lastAboutMe, // will be passed to the page component as props
    }
}


export default AboutMe;
