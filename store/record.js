export const state = () => ({
  has: false,
  block: true,
  content: ''
})

export const mutations = {
  new(state, record) {
    state.has = true
    state.block = record.block
    state.content = record.content
  }
}

export const actions = {
  async getRecord({ commit }) {
    const record = await this.$axios.$get(`/record`)
    if (record) {
      commit('new', record.data)
    }
  }
}
