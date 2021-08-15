import {API_URL} from "./http-utils";


export async function getAllPostIds() {
    
    try {
        debugger
        const res = await fetch(API_URL)
        const posts = await res.json()
        return posts.map(post => {
            return {
                params: {
                    slug: post.slug,
                    all: '/'
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export async function getPostData(slug) {
    try {
        const res = await fetch(API_URL + slug)
        return await res.json()
    } catch (e) {
        console.log(e)
    }
}
