<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div class="produtos-wrapper" v-for="(compra, index) in compras" :key="index">
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor">
            <span>Vendedor:</span>
            {{ compra.vendedor_id }}
          </p>
        </ProdutoItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem";
import {mapState} from "vuex";
import {api} from "@/services";

export default {
  name: "UsuarioCompras",
  components: {ProdutoItem},
  computed: {
    ...mapState(["usuario", "login"])
  },
  data() {
    return {
      compras: null
    }
  },
  methods: {
    getCompras() {
      api.get(`/transacao?comprador_id=${this.usuario.id}`).then(r => {
        this.compras = r.data;
      })
    }
  },
  created() {
    if (this.login) {
      this.getCompras();
    }
  },
  watch: {
    login() {
      this.getCompras();
    }
  }
}
</script>

<style scoped>
.produtos-wrapper {
  margin-bottom: 40px;
}

.vendedor span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}
</style>