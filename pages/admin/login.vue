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
import shajs from 'sha.js'

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
      const data = {
        username: this.login.username,
        password: this.hashPasswd(this.login.password)
      }
      await this.$auth.login({
        data
      }).then((res) => {
        // do nothing
      }).catch((err) => {
        console.log('Error while disconnecting: ' + err.message)
      })
    },
    hashPasswd(password) {
      for (let i = 0; i < 16384; i++) {
        password = shajs('sha256').update(password).digest('hex')
      }
      return password
    }
  }
}
</script>
