import axios from 'axios'

export const state = () => ({
  users: [],
  user: {}
})

export const getters = {
  users: state => {
    return state.users
  }
}

export const mutations = {
  getAll(state, users) {
    state.users.push({
      users,
    })
  },
  getOne(state, user) {
    state.user = user
  }
}

export const actions = {
  async getUsers({commit}) {
    await axios.get('http://localhost:8000/api/users')
      .then((res) => {
        if (res.status === 200) {
          commit('getAll', res.data)
        }
      })
  }, 

  async getUser({commit}, userId) {
    await axios.get('http://localhost:8000/api/users/user/' + userId)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          commit('getOne', res.data)
        }
      })
  },

  async addUser({commit}, user) {
    await axios.put('http://localhost:8000/api/users/', user)
      .then((res) => {
        console.log(res)
      })
  },

  async updateUser({commit}, user) {
    await axios.put('http://localhost:8000/api/users/user/' + user.id, user)
      .then((res) => {
        console.log(res)
      })
  },

  async deleteUser({commit}, userId) {
    await axios.delete('http://localhost:8000/api/users/user/' + userId)
      .then((res) => {
        console.log(res)
      })
  },

  async loginUser({commit}, user) {
    await axios.post('http://localhost:8000/api/users/login', user)
      .then((res) => {
        console.log(res)
      })
  },

  async logoutUser({commit}) {
    await axios.get('http://localhost:8000/api/users/logout')
      .then((res) => {
        console.log(res)
      })
  }
}