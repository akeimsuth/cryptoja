export default {
    user: '/user',
    users: '/users',
    oneUser(id: string) {
        return `/user/${id}`
    },
    singleUser(id: string) {
        return `/user/details/${id}`
    },
    oneKYC(id: string) {
        return `/userKYC/${id}`
    },
    transactions: '/transactions',
    oneTransaction(id: string) {
        return `/transaction/${id}`
    },
    oneWallet(id: string) {
        return `/wallet/${id}`
    }
}