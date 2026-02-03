<script setup>
import { ref, onMounted } from 'vue'
import CardProduto from '../components/CardProduto.vue'

// Importando imagens
import imgPreta from '@/assets/Imagens/Birken_Preta.png'
import imgOff from '@/assets/Imagens/Birken_off.png'
import imgVerde from '@/assets/Imagens/Birken_verde.png'
import imgCinza from '@/assets/Imagens/Birken_Cinza.png'

// 1. Criamos a lista reativa vazia inicialmente
const listaBirkens = ref([])

// 2. Definimos os dados padrão (caso seja a primeira visita)
const dadosPadrao = [
  { id: 1, nome: 'Sandália Birken Preta', preco: 'R$ 259,90', img: imgPreta },
  { id: 2, nome: 'Sandália Birken OFF White', preco: 'R$ 259,90', img: imgOff },
  { id: 3, nome: 'Sandália Birken Verde', preco: 'R$ 259,90', img: imgVerde },
  { id: 4, nome: 'Sandália Birken Cinza', preco: 'R$ 259,90', img: imgCinza },
]

// 3. Função que carrega os dados ao iniciar a página
onMounted(() => {
  const dadosSalvos = localStorage.getItem('minhasBirkens')
  
  if (dadosSalvos) {
    // Se já existe no navegador, usa o salvo
    listaBirkens.value = JSON.parse(dadosSalvos)
  } else {
    // Se não existe, usa o padrão e salva no navegador pela primeira vez
    listaBirkens.value = dadosPadrao
    salvarNoBrowser()
  }
})

// Função auxiliar para salvar
function salvarNoBrowser() {
  localStorage.setItem('minhasBirkens', JSON.stringify(listaBirkens.value))
}

// 4. Função para EXCLUIR um item (Testando o "Controle")
function excluirItem(id) {
  // Confirmação simples
  if(confirm("Tem certeza que quer apagar este produto?")) {
    // Filtra a lista removendo o item com aquele ID
    listaBirkens.value = listaBirkens.value.filter(item => item.id !== id)
    
    // Atualiza o LocalStorage
    salvarNoBrowser()
  }
}

// Função para Restaurar (caso você apague tudo e queira voltar ao normal)
function restaurarPadrao() {
  listaBirkens.value = dadosPadrao
  salvarNoBrowser()
}
</script>

<template>
  <main>
    <div class="cabecalho-lista">
      <h2 class="titulo">Sandálias Birken (Gerenciado via LocalStorage)</h2>
      <button @click="restaurarPadrao" class="btn-restaurar">Restaurar Lista Original</button>
    </div>

    <section v-if="listaBirkens.length > 0">
      <div v-for="item in listaBirkens" :key="item.id" class="container-item">
        
        <CardProduto 
          :nome="item.nome"
          :preco="item.preco"
          :imagem="item.img"
        />
        
        <button @click="excluirItem(item.id)" class="btn-excluir">
          Excluir
        </button>
      
      </div>
    </section>

    <div v-else class="aviso-vazio">
      <p>Nenhum produto na lista.</p>
    </div>
  </main>
</template>

<style scoped>
/* Estilos extras apenas para os botões de controle */
.cabecalho-lista { display: flex; justify-content: space-between; align-items: center; padding-right: 50px; }
.btn-restaurar { background-color: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer; border-radius: 5px; }
.container-item { display: flex; flex-direction: column; align-items: center; }
.btn-excluir { background-color: #ff4d4d; color: white; border: none; padding: 5px 15px; margin-top: 10px; cursor: pointer; border-radius: 4px; }
.btn-excluir:hover { background-color: #cc0000; }
.aviso-vazio { text-align: center; margin-top: 50px; font-size: 1.5em; color: gray; }
</style>