import usersApi from '@/api/users'

const state = {
    data: null,
    user: null
}

export const mutationTypes = {
    getUsersListStart: '[users] getUsersListStart',
    getUsersListSuccess: '[users] getUsersListSuccess',
    getUsersListFailure: '[users] getUsersListFailure',

    getUserStart: '[users] getUserStart',
    getUserSuccess: '[users] getUserSuccess',
    getUserFailure: '[users] getUserFailure',
}
export const actionTypes = {
    getUsersList: '[users] getUsersList',
    getUser: '[users] getUser',
}

const mutations = {
    [mutationTypes.getUsersListStart](state) {
        state.data = null
    },
    [mutationTypes.getUsersListSuccess](state, payload) {
        state.data = payload
    },
    [mutationTypes.getUsersListFailure](state, payload) {
        console.warn(state,payload)
    },


    [mutationTypes.getUserStart](state) {
        state.user = null
    },
    [mutationTypes.getUserSuccess](state, payload) {
        state.user = payload
    },
    [mutationTypes.getUserFailure](state, payload) {
        console.warn(state,payload)
    },
}

const actions = {
    [actionTypes.getUsersList](context) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getUsersListStart)
            usersApi
                .getUsersList()
                .then(response => {
                    context.commit(mutationTypes.getUsersListSuccess, response.data)
                    resolve(response.data)
                })
                .catch((result) => {
                    context.commit(mutationTypes.getUsersListFailure, result.response.data.errors)
                })
        })
    },
    [actionTypes.getUser](context, id) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getUserStart)
            usersApi
                .getUser(id)
                .then(response => {
                    context.commit(mutationTypes.getUserSuccess, response.data)
                    resolve(response.data)
                })
                .catch((result) => {
                    context.commit(mutationTypes.getUserFailure, result.response.data.errors)
                })
        })
    }
}

export default {
    state, 
    mutations,
    actions
}