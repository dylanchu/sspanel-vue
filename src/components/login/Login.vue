<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username"/>
    <input type="password" name="password" v-model="input.password" placeholder="Password"/>
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        input: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        if (this.input.username !== '' && this.input.password !== '') {
          let promise = this.$store.dispatch('setAuthenticated', true)
          promise
            ? this.$router.push('/dashboard')
            : console.log('failed log in')
          this.$router.push('/dashboard')
        } else {
          alert('用户名和密码不可为空')
        }
      }
    }
  }
</script>

<style scoped>

</style>
