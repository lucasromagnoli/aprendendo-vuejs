<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      name: {{currentUser.name}}
      email: {{currentUser.email}}
      id: {{id}}
    </div>
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="email" v-model="email">
    <button @click.prevent="loginAction">Action</button>
    <button @click.prevent="loginMutation">Mutation</button>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      name: '',
      email: '',
    }
  },
  computed: {
    ...mapGetters({
      id: 'user/getId'
    }),
    ...mapState('user', ["currentUser"]),
  },
  methods: {
    ...mapActions({
      setCurrentUser: 'user/setCurrentUser',
    }),
    ...mapMutations({
      setCurrentUserMutation: 'user/SET_CURRENT_USER'
    }),
    loginMutation() {
      this.setCurrentUserMutation({id: 'lmutation-'+new Date().getTime(), name: this.name, email: this.email})
    },
    loginAction() {
      this.setCurrentUser({id: '', name: this.name, email: this.email})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
