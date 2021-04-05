import axios from 'axios'

export const state = () => ({
  queues: [],
  queue: {}
})

export const getters = {
  queues: state => {
    return state.queues
  }
}

export const mutations = {
  getAll(state, queues) {
    state.queues = []
    state.queues.push({
      queues,
    })
  },
  getOne(state, queue) {
    state.queue = {}
    state.queue = queue
  }
}

export const actions = {
  async getQueues({commit}) {
    await axios.get('http://localhost:8000/api/queues')
      .then((res) => {
        if (res.status === 200) {
          commit('getAll', res.data)
        }
      })
  }, 

  async getQueue({commit}, queueId) {
    await axios.get('http://localhost:8000/api/queues/' + queueId)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          commit('getOne', res.data)
        }
      })
  },

  async addQueue({commit}, queue) {
    await axios.put('http://localhost:8000/api/queues/', queue)
      .then((res) => {
        console.log(res)
      })
  },

  async updateQueue({commit}, queue) {
    await axios.put('http://localhost:8000/api/queues/' + queue.id, queue)
      .then((res) => {
        console.log(res)
      })
  },

  async deleteQueue({commit}, queueId) {
    await axios.delete('http://localhost:8000/api/queues/' + queueId)
      .then((res) => {
        console.log(res)
      })
  }
}