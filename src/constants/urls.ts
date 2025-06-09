export const baseUrlHolder = 'https://jsonplaceholder.typicode.com';
export const baseDummy = 'https://dummyjson.com';
export const urlsHolder = {
    users: {
        allUsers: baseUrlHolder + '/users',
        byId: (id: number) => {
            return baseUrlHolder + '/' + id
        }//це якщо треба по айді
    },
    posts: {
        allPosts: baseUrlHolder + '/posts'
    },
    comments: {
        allComments:baseUrlHolder+'/comments'
    }
}
export const urlsDummy = {
    users: {
        allUsers:baseDummy+'/users'
    },
    posts: {
        allPosts:baseDummy+'/posts'
    },
    comments: {
        allComments:baseDummy+'/comments'
    }
}