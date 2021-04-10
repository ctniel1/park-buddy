import axios from 'axios'

export const state = () => ({
  queues: [],
  queue: {},
  userQueues: [],
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
  },
  getUserQueues(state, queues) {
    state.userQueues = []
    state.userQueues.push({
      queues,
    })
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
    await axios.get('http://localhost:8000/api/queues/queue' + queueId)
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
    await axios.put('http://localhost:8000/api/queues/queue' + queue.id, queue)
      .then((res) => {
        console.log(res)
      })
  },

  async deleteQueue({commit}, queueId) {
    await axios.delete('http://localhost:8000/api/queues/queue' + queueId)
      .then((res) => {
        console.log(res)
      })
  },

  async getUserQueues({commit}) {
    if (window.localStorage.getItem('user')) {
      await axios.get('http://localhost:8000/api/queues/userQueues/' + JSON.parse(window.localStorage.getItem('user')).id)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          commit('getUserQueues', res.data)
        }
      })
    } else {
      console.log('User not logged in')
    }
  },

  async getInQueue({commit}, userQueue) {
    await axios.put('http://localhost:8000/api/queues/userQueues', userQueue)
      .then((res) => {
        console.log(res)
      })
  }
}