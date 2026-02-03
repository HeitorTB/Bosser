<script setup>
import { ref, onMounted } from 'vue'
import CardProduto from '../components/CardProduto.vue'

import imgPreta from '@/assets/Imagens/Birken_Preta.png'
import imgOff from '@/assets/Imagens/Birken_off.png'
import imgVerde from '@/assets/Imagens/Birken_verde.png'
import imgCinza from '@/assets/Imagens/Birken_Cinza.png'

const listaBirkens = ref([])
const dadosPadrao = [
  { id: 1, nome: 'Sandália Birken Preta', preco: 'R$ 259,90', img: imgPreta },
  { id: 2, nome: 'Sandália Birken OFF White', preco: 'R$ 259,90', img: imgOff },
  { id: 3, nome: 'Sandália Birken Verde', preco: 'R$ 259,90', img: imgVerde },
  { id: 4, nome: 'Sandália Birken Cinza', preco: 'R$ 259,90', img: imgCinza },
  { id: 5, nome: 'Birken Preta Clássica', preco: 'R$ 259,90', img: imgPreta },
  { id: 6, nome: 'Birken White Basic', preco: 'R$ 259,90', img: imgOff },
  { id: 7, nome: 'Birken Verde Musgo', preco: 'R$ 259,90', img: imgVerde },
  { id: 8, nome: 'Birken Cinza Urbano', preco: 'R$ 259,90', img: imgCinza },
  { id: 9, nome: 'Birken Confort Preta', preco: 'R$ 259,90', img: imgPreta },
  { id: 10, nome: 'Birken OFF Style', preco: 'R$ 259,90', img: imgOff },
  { id: 11, nome: 'Birken Nature Green', preco: 'R$ 259,90', img: imgVerde },
  { id: 12, nome: 'Birken Grey Day', preco: 'R$ 259,90', img: imgCinza },
]

onMounted(() => {
  const dadosSalvos = localStorage.getItem('minhasBirkens_v2')
  
  if (dadosSalvos) {
    listaBirkens.value = JSON.parse(dadosSalvos)
  } else {
    localStorage.setItem('minhasBirkens_v2', JSON.stringify(dadosPadrao))
    listaBirkens.value = dadosPadrao
  }
})
</script>

<template>
  <main>
    <h2 class="titulo">Sandálias Birken</h2>
    <section class="grade-produtos">
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

<style scoped>
.grade-produtos {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  padding: 20px;
  
  margin: 0 auto; 
  width: 100%;    
  max-width: 1200px; 
}
</style>