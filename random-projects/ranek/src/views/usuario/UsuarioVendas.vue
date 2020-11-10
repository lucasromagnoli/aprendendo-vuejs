<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div class="vendas-wrapper" v-for="(venda, index) in vendas" :key="index">
        <ProdutoItem v-if="venda.produto" :produto="venda.produto">
          <p class="comprador">
            <span>Comprador:</span>
            {{venda.comprador_id}}
          </p>
        </ProdutoItem>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul v-if="venda.endereco">
            <li v-for="(v,k) in venda.endereco" :key="k">
              {{k}}:{{v}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem";
import {mapState} from "vuex";
import {api} from "@/services";

export default {
  name: "UsuarioVendas",
  components: {ProdutoItem},
  computed: {
    ...mapState(["usuario", "login"])
  },
  data() {
    return {
      vendas: null
    }
  },
  methods: {
    getVendas() {
      api.get(`/transacao?vendedor_id=${this.usuario.id}`).then(r => {
        this.vendas = r.data;
      })
    }
  },
  created() {
    if (this.login) {
      this.getVendas();
    }
  },
  watch: {
    login() {
      this.getVendas();
    }
  }
}
</script>

<style scoped>
.vendas-wrapper {
  margin-bottom: 40px;
}

.vendedor span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}

.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}

h3 {
  margin: 0px;
  justify-self: end;
}
</style>