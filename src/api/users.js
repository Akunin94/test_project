import axios from '@/api/axios'

const getUsersList = () => {
    return axios.get('/users')
}

const getUser = userId => {
    return axios.get(`/users/${userId}`)
}

export default {
    getUsersList,
    getUser
}