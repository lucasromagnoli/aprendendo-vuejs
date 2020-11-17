<template>
  <section>
    <h2>Endereco de Envio</h2>
    <UsuarioForm>
      <button @click.prevent="finalizarCompra" class="btn">Finalizar compra</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm";
import {mapState} from "vuex";
import {api} from "@/services";

export default {
  name: "FinalizarCompra",
  components: {UsuarioForm},
  props: ["produto"],
  computed: {
    ...mapState(["usuario"]),
    compra() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado
        }
      }
    }
  },
  methods: {
    criarTransacao() {
      api.post("/transacao", this.compra).then(() => {
        this.$router.push({name: "compras"})
      })
    },
    async criarUsuario() {
      await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
      await this.$store.dispatch("getUsuario", this.$store.state.usuario.email);
      await this.criarTransacao();
    },
    finalizarCompra() {
      if (this.$store.state.login) {
        this.criarTransacao();
      } else {
        this.criarUsuario();
      }
    }
  }
}
</script>

<style scoped>

</style>