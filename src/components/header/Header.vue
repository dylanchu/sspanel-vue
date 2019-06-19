<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <!-- Brand -->
    <router-link class="navbar-brand" to="/">
      <img src="./assets/logo.png" alt="Logo" style="width:40px;"> Welcome
    </router-link>
    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <!-- Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">关于</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/add">添加</router-link>
        </li>
        <!-- Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Dropdown link
          </a>
          <div class="dropdown-menu">
            <router-link class="dropdown-item" to="/add">router-link会让页面变化</router-link>
            <a class="dropdown-item" href="#">单页应用，a标签不会让页面变化</a>
          </div>
        </li>
      </ul>
      <ul v-if="logged_in" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/user-center">用户中心</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/logout">登出</router-link>
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
    </div>
  </nav>
</template>

<script>
  import {mapGetters} from 'vuex' // 单个导出（不是export default）的，要加花括号

  export default {
    name: 'Header',
    computed: {
      ...mapGetters({
        logged_in: 'authenticated'
      })

      // 这样写也行:
      // logged_in () {
      //   return this.$store.getters.authenticated
      // }

      // other variables 还可以再加其他没使用mapGetters的变量
    }
  }
</script>

<style scoped>

</style>
