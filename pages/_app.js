import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

// Blog config
import blogConfig from '../blogConfig';

// Import style sheets
import '../stylesheets/global.css';
import '../stylesheets/nprogress.css';
import '../stylesheets/nightOwl.css';
import '../assets/paginate.scss'


// Loading indicator
Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);


/**
 * The component ensures that every site has title and meta element
 * in the header. Additional meta tags can be added below. Make sure
 * to add them als children of the Head component.
 * @param Component {jsx} the component that is currently display
 * @param pageProps {object} the currently active element's props
 * @returns {*}
 * @constructor
 */
const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title key='title'>{blogConfig.blogName || ''}</title>
            <meta key='description' name='description' content={blogConfig.description} />
         <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
         />
         <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}');
          `
            }}
        />
        <script
            dangerouslySetInnerHTML={{
              __html: `
            <!-- Yandex.Metrika counter -->
            <script type="text/javascript" >
               (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

               ym(74360284, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    ecommerce:"dataLayer"
               });
            </script>
            <noscript><div><img src="https://mc.yandex.ru/watch/74360284" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
            <!-- /Yandex.Metrika counter -->
          `
            }}
        />
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;
