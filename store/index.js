export const actions = {
  async nuxtServerInit({ dispatch }, { params }) {
    await dispatch('record/getRecord', params.record)
    await dispatch('blog/getBlog', params.blog)
  }
}
