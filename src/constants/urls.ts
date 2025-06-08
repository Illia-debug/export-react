export const baseUrlHolder = 'https://jsonplaceholder.typicode.com';
export const baseDummy = 'https://dummyjson.com';
export const urlsHolder = {
    users: {
        allUsers: baseUrlHolder + '/users',
        byId: (id: number) => {
            return baseUrlHolder + '/' + id
        }//це якщо треба по айді
    },
    posts: {}
}
export const urlsDummy = {
    users: {
        allUsers:baseDummy+'/users'
    },
    posts: {}
}