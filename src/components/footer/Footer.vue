<template>
  <footer class="footer">
    <div class="container">
      Made with ❤ · Copyright &copy; {{new Date().getFullYear()}}
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
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
