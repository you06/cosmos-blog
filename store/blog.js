export const state = () => ({
  title: '',
  content: '',
  date: new Date()
})

export const mutations = {
  new(state, blog) {
    state.title = blog.title
    state.content = blog.content
    state.date = new Date(blog.date)
  }
}

export const actions = {
  async getBlog({ commit }, blogKey) {
    if (!blogKey) {
      return
    }
    const blog = await this.$axios.$get(`/blog/${blogKey}`)
    commit('new', blog.data)
  }
}
