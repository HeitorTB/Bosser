<script setup>
import { ref, onMounted } from 'vue'
import CardProduto from '../components/CardProduto.vue'

// Importando imagens
import imgPreta from '@/assets/Imagens/Birken_Preta.png'
import imgOff from '@/assets/Imagens/Birken_off.png'
import imgVerde from '@/assets/Imagens/Birken_verde.png'
import imgCinza from '@/assets/Imagens/Birken_Cinza.png'

const listaBirkens = ref([])

// Lista fixa (serve como nosso "backup" inicial)
const dadosPadrao = [
  { id: 1, nome: 'Sandália Birken Preta', preco: 'R$ 259,90', img: imgPreta },
  { id: 2, nome: 'Sandália Birken OFF White', preco: 'R$ 259,90', img: imgOff },
  { id: 3, nome: 'Sandália Birken Verde', preco: 'R$ 259,90', img: imgVerde },
  { id: 4, nome: 'Sandália Birken Cinza', preco: 'R$ 259,90', img: imgCinza },
]

onMounted(() => {
  // Verifica se JÁ existe algo salvo
  const dadosSalvos = localStorage.getItem('minhasBirkens')
  
  if (dadosSalvos) {
    // Se existir, carrega do armazenamento
    listaBirkens.value = JSON.parse(dadosSalvos)
  } else {
    // Se NÃO existir, salva a lista padrão no armazenamento e carrega ela
    localStorage.setItem('minhasBirkens', JSON.stringify(dadosPadrao))
    listaBirkens.value = dadosPadrao
  }
})
</script>

<template>
  <main>
    <h2 class="titulo">Sandálias Birken</h2>
    <section>
      <CardProduto 
        v-for="item in listaBirkens" 
        :key="item.id"
        :nome="item.nome"
        :preco="item.preco"
        :imagem="item.img"
      />
    </section>
  </main>
</template>