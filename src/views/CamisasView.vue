<script setup>
import { ref, onMounted } from 'vue'
import CardProduto from '../components/CardProduto.vue'

// Importando imagens
import imgBranco from '@/assets/Imagens/Lnho_branco.png'
import imgVerde from '@/assets/Imagens/Linho_verde.png'
import imgMarinho from '@/assets/Imagens/Linho_marinho.png'
import imgBebe from '@/assets/Imagens/Linho_bebe.png'

const listaCamisas = ref([])

// Dados Padrão das Camisas
const dadosPadrao = [
  { id: 1, nome: 'Camisa de Linho Branca', preco: 'R$ 399,90', img: imgBranco },
  { id: 2, nome: 'Camisa de Linho Verde Musgo', preco: 'R$ 399,90', img: imgVerde },
  { id: 3, nome: 'Camisa de Linho Azul Marinho', preco: 'R$ 399,90', img: imgMarinho },
  { id: 4, nome: 'Camisa de Linho Azul Bebê', preco: 'R$ 399,90', img: imgBebe },
]

onMounted(() => {
  // Chave exclusiva para camisas
  const dadosSalvos = localStorage.getItem('minhasCamisas')
  
  if (dadosSalvos) {
    listaCamisas.value = JSON.parse(dadosSalvos)
  } else {
    listaCamisas.value = dadosPadrao
    salvarNoBrowser()
  }
})

function salvarNoBrowser() {
  localStorage.setItem('minhasCamisas', JSON.stringify(listaCamisas.value))
}

function excluirItem(id) {
  if(confirm("Tem certeza que quer apagar esta camisa?")) {
    listaCamisas.value = listaCamisas.value.filter(item => item.id !== id)
    salvarNoBrowser()
  }
}

function restaurarPadrao() {
  listaCamisas.value = dadosPadrao
  salvarNoBrowser()
}
</script>

<template>
  <main>
    <div class="cabecalho-lista">
      <h2 class="titulo">Camisas de Linho (Gerenciado via LocalStorage)</h2>
      <button @click="restaurarPadrao" class="btn-restaurar">Restaurar Lista</button>
    </div>

    <section v-if="listaCamisas.length > 0">
      <div v-for="item in listaCamisas" :key="item.id" class="container-item">
        <CardProduto 
          :nome="item.nome"
          :preco="item.preco"
          :imagem="item.img"
        />
        <button @click="excluirItem(item.id)" class="btn-excluir">Excluir</button>
      </div>
    </section>

    <div v-else class="aviso-vazio">
      <p>Nenhuma camisa na lista.</p>
    </div>
  </main>
</template>

<style scoped>
.cabecalho-lista { display: flex; justify-content: space-between; align-items: center; padding-right: 50px; }
.btn-restaurar { background-color: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer; border-radius: 5px; }
.container-item { display: flex; flex-direction: column; align-items: center; }
.btn-excluir { background-color: #ff4d4d; color: white; border: none; padding: 5px 15px; margin-top: 10px; cursor: pointer; border-radius: 4px; }
.btn-excluir:hover { background-color: #cc0000; }
.aviso-vazio { text-align: center; margin-top: 50px; font-size: 1.5em; color: gray; }
</style>