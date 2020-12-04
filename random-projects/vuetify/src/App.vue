<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card max-width="500px">
          <v-card-title>Alertas</v-card-title>
          <v-alert type="success">Mensagem de sucesso</v-alert>
          <v-alert type="warning" icon="mdi-firework">Mensagem de aviso</v-alert>
          <v-alert type="error" dismissible v-model="alertIsOpen" @input="alertClose">
            Mensagem de erro com trigger no close
          </v-alert>
        </v-card>

        <v-card class="green mx-auto" width="2000" max-height="500">
          <v-avatar
                    color="grey"
                    size="100%"
                    >

            <v-img height="150px"
                   max-width="150px"
                   src="https://julianish.files.wordpress.com/2013/04/tumblr_mkc1q4xido1r9dmr3o1_500.jpg?w=584">
            </v-img>
          </v-avatar>
        </v-card>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},
  data() {
    return {
      alertIsOpen: true
    }
  },
  methods: {
    alertClose(vuetify) {
      console.log(vuetify);
    }
  }
};
</script>
