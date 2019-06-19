<template>
  <ul v-if="user" class="navbar-nav ml-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/user-center">用户中心</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/login">登录</router-link>
    </li>
  </ul>
  <ul v-else class="navbar-nav ml-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/register">注册</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/login">登录</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'LoginStatus',
    created () {
      this.user = false
    }
  }
</script>

<style scoped>

</style>
