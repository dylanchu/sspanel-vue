<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'Logout',
    created () {
      this.$store.commit('setAuthenticated', false)
      this.$router.push('/')
    }
  }
</script>

<style scoped>

</style>
