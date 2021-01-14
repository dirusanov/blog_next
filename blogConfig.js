/**
 * This files contains all the meta data of your blog. Feel
 * free to change it according to your needs. Please
 * keep in mind, that the actual blog posts are fetched
 * from the Caasy API. This file only contains static
 * information that does not change such as the name
 * of the blog.
 */
module.exports = {
    caasySDKConfig: {
        siteId: '5f7cc20dc302c4fa0a961f81'
    },
    blogName: 'Rusanov',
    defaultTitle: 'BLOG',
    description: 'This is the blog of Dmitry Rusanov, a lawyer and programmer. I am writing articles about what interests me.',
    // The default language is used to improve accessibility.
    // It is set on the HTML element. You can change this
    // to the main language of your content.
    defaultLocale: 'ru',
    // The locale is used for multi language content. This
    // feature hasn't been released yet. Please don't change
    // this until Caasy fully supports multi language content.
    locales: ['ru', 'en-US'],
    pagination: {
        amountPostsOnPage: 10
    },
    social: {
        github: 'https://github.com/Random1k11',
        stackoverflow: 'https://stackoverflow.com/users/12097204/random1k11?tab=profile',
        // dev: 'https://dev.to/jz222',
        // twitter: 'https://twitter.com',
        // linkedin: 'https://www.linkedin.com/in/timo-zimmermann',
        youtube: 'https://www.youtube.com/channel/UCjl1oFkCqlAXjqqSD_1oVGw?view_as=subscriber',
        // facebook: 'https://facebook.com',
        // instagram: 'https://instagram.com'
    },
    footer: {
        links: [
            {
                title: 'Website',
                items: [
                    { label: 'Caasy', url: 'https://caasy.io' }
                ]
            },
            {
                title: 'Developer',
                items: [
                    { label: 'Docs', url: 'https://docs.caasy.io' },
                    { label: 'Github', url: 'https://logowl.io' },
                    { label: 'JS SDK', url: 'https://mosaic.mc' }
                ]
            },
            {
                title: 'About',
                items: [
                    { label: 'Mosaic', url: 'https://mosaic.mc' },
                    { label: 'Log Owl', url: 'https://logowl.io' }
                ]
            }
        ]
    }
}
