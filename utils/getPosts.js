import API_URL from "./http-utils";


export async function getAllPostIds() {

    try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        return posts.map(post => {
            return {
                params: {
                    id: post.id.toString(),
                    all: '/'
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export async function getPostData(id) {
    try {
        const res = await fetch(API_URL + id)
        return await res.json()
    } catch (e) {
        console.log(e)
    }
}
