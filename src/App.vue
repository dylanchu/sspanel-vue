<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from 'components/header/Header'
  import Footer from 'components/footer/Footer'

  export default {
    components: {
      Header,
      Footer
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
</style>
