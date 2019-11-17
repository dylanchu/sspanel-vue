<template>
  <div class="hello">
    <br>
    <h2>Dashboard</h2>
    <br>
    <div class="table-responsive">
      <table class="table table-hover table-sm">
        <thead class="thead-light">
        <tr>
          <th>note</th>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>level</th>
          <th>port</th>
          <th>ss pass</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.note}}</td>
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.level}}</td>
          <td>{{user.ss_port}}</td>
          <td>{{user.ss_pwd}}</td>
        </tr>
        <tr v-if="users.length === 0">
          <td>
            <small><i>空的.</i></small>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    data () {
      return {
        users: []
      }
    },
    created () {
      this.fetchData(this.$route.params)
    },
    methods: {
      fetchData (p) {
        // console.log(p)
        this.axios.get(this.$api.allUsers).then((response) => {
            this.users = response.data.data
            console.log('success', this.users)
          }, (response) => {
            console.error('error', response.data)
          }
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
