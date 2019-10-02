export const actions = {
  async nuxtServerInit({ dispatch }, { params }) {
    await dispatch('blog/getBlog', params.blog)
  }
}
