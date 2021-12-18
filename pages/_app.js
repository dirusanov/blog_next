import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { YMInitializer } from 'react-yandex-metrika'

// Blog config
import blogConfig from '../blogConfig'

// Import style sheets
import '../stylesheets/global.css'
import '../stylesheets/nprogress.css'
import '../stylesheets/nightOwl.css'
import '../assets/paginate.scss'

// Loading indicator
Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeComplete', NProgress.done)
Router.events.on('routeChangeError', NProgress.done)

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
			<title key="title">{blogConfig.blogName || ''}</title>
			<meta
				key="description"
				name="description"
				content={blogConfig.description}
			/>
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
              `,
				}}
			/>
		</Head>
		<YMInitializer
			accounts={[74360284]}
			options={{
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true,
			}}
		/>
		<Component {...pageProps} />
	</>
)

export default App
