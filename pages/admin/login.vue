<template>
  <div>
    <form @keydown.enter="submit">
      <input ref="username" v-model="login.username" type="text">
      <input v-model="login.password" type="password">
      <div @click="submit">
        submit
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  middleware: 'auth',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  mounted() {
    this.$refs.username.focus()
  },
  methods: {
    async submit() {
      await this.$auth.login({
        data: this.login
      }).then(() => {
        alert('Successfully connected')
      }).catch((err) => {
        console.log('Error while disconnecting: ' + err.message)
      })
    }
  }
}
</script>
