import axios from 'axios'

export const state = () => ({
  attractions: [],
  attraction: {}
})

export const getters = {
  attractions: state => {
    return state.attractions
  }
}

export const mutations = {
  getAll(state, attractions) {
    state.attractions = []
    state.attractions.push({
      attractions,
    })
  },
  getOne(state, attraction) {
    state.attraction = {}
    state.attraction = attraction
  }
}

export const actions = {
  async getAttractions({commit}) {
    await axios.get('http://localhost:8000/api/attractions')
      .then((res) => {
        if (res.status === 200) {
          commit('getAll', res.data)
        }
      })
  }, 

  async getAttraction({commit}, attractionId) {
    await axios.get('http://localhost:8000/api/attractions/' + attractionId)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          commit('getOne', res.data)
        }
      })
  },

  async addAttraction({commit}, attraction) {
    await axios.put('http://localhost:8000/api/attractions/', attraction)
      .then((res) => {
        console.log(res)
      })
  },

  async updateAttraction({commit}, attraction) {
    await axios.put('http://localhost:8000/api/attractions/' + attraction.id, attraction)
      .then((res) => {
        console.log(res)
      })
  },

  async deleteAttraction({commit}, attractionId) {
    await axios.delete('http://localhost:8000/api/attractions/' + attractionId)
      .then((res) => {
        console.log(res)
      })
  }
}