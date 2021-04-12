import axios from 'axios'

export const state = () => ({
  users: [],
  user: {},
  loggedInUser: false,
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
  },
  login(state, user) {
    state.loggedInUser = user
  },
  logout(state, user) {
    state.loggedInUser = false
  },
  loadUser(state, user) {
    state.loggedInUser = user
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
        if (res.status === 200) {
          window.alert('User added successfully')
        }
      })
  },

  async updateUser({commit}, user) {
    await axios.put('http://localhost:8000/api/users/user/' + user.id, user)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          window.alert('User updated successfully')
        }
      })
  },

  async deleteUser({commit}, userId) {
    await axios.delete('http://localhost:8000/api/users/user/' + userId)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          window.alert('User deleted successfully')
        }
      })
  },

  async loginUser({commit}, user) {
    await axios.put('http://localhost:8000/api/users/easyLogin', user)
      .then((res) => {
        if (res.data[0]) {
          commit('login', res.data[0])
          console.log(res.data[0])
          window.localStorage.setItem('user', JSON.stringify(res.data[0]))
          window.location.replace('/')
        } else {
          window.alert("Login failed. Try again.")
        }
      })
  },

  async logoutUser({commit}) {
    await axios.get('http://localhost:8000/api/users/logout')
      .then((res) => {
        console.log(res)
      })
    commit('logout')
    window.localStorage.clear();
  },

  loadUser({commit}) {
    console.log(window.localStorage.getItem('user'))
    commit('loadUser', JSON.parse(window.localStorage.getItem('user')))
  }
}