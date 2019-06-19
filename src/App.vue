<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
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
        <LoginStatus></LoginStatus>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        Copyright &copy; {{new Date().getFullYear()}}. Made with ❤ by dylanchu.
      </div>
    </footer>
  </div>
</template>

<script>
  import LoginStatus from './components/login-status/LoginStatus'
  export default {
    components: {LoginStatus},
    comments: {
      LoginStatus
    }
  }
  // import customers from './Components/Customers.vue'
  // import about from './Components/About.vue'
  //
  // export default {
  //   name: 'app',
  // components: {
  //   customers: customers,
  //   about: about
  // },
  //   data () {
  //     return {
  //       msg: '我是App组件'
  //     }
  //   }
  // }
</script>

<style>
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    /*height: 50px;*/
    padding-bottom: 10px;
    /*background-color: #f5f5f5;*/
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
</style>
