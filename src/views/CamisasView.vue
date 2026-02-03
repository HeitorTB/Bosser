<script setup>
import { ref, onMounted } from 'vue'
import CardProduto from '../components/CardProduto.vue'

import imgBranco from '@/assets/Imagens/Lnho_branco.png'
import imgVerde from '@/assets/Imagens/Linho_verde.png'
import imgMarinho from '@/assets/Imagens/Linho_marinho.png'
import imgBebe from '@/assets/Imagens/Linho_bebe.png'

const listaCamisas = ref([])
const dadosPadrao = [
  { id: 1, nome: 'Linho Branca', preco: 'R$ 399,90', img: imgBranco },
  { id: 2, nome: 'Linho Verde Musgo', preco: 'R$ 399,90', img: imgVerde },
  { id: 3, nome: 'Linho Azul Marinho', preco: 'R$ 399,90', img: imgMarinho },
  { id: 4, nome: 'Linho Azul Bebê', preco: 'R$ 399,90', img: imgBebe },
  { id: 5, nome: 'Camisa White Premium', preco: 'R$ 399,90', img: imgBranco },
  { id: 6, nome: 'Camisa Green Nature', preco: 'R$ 399,90', img: imgVerde },
  { id: 7, nome: 'Camisa Navy Blue', preco: 'R$ 399,90', img: imgMarinho },
  { id: 8, nome: 'Camisa Soft Blue', preco: 'R$ 399,90', img: imgBebe },
  { id: 9, nome: 'Linho Clássico Branco', preco: 'R$ 399,90', img: imgBranco },
  { id: 10, nome: 'Linho Modern Verde', preco: 'R$ 399,90', img: imgVerde },
  { id: 11, nome: 'Linho Executivo Azul', preco: 'R$ 399,90', img: imgMarinho },
  { id: 12, nome: 'Linho Casual Bebê', preco: 'R$ 399,90', img: imgBebe },
]

onMounted(() => {
  const dadosSalvos = localStorage.getItem('minhasCamisas_v2')
  
  if (dadosSalvos) {
    listaCamisas.value = JSON.parse(dadosSalvos)
  } else {
    localStorage.setItem('minhasCamisas_v2', JSON.stringify(dadosPadrao))
    listaCamisas.value = dadosPadrao
  }
})
</script>

<template>
  <main>
    <h2 class="titulo">Camisas de Linho</h2>
    <section class="grade-produtos">
      <CardProduto 
        v-for="item in listaCamisas" 
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
  gap: 30px;
  justify-content: center; 
  padding: 20px;
  
  margin: 0 auto; 
  width: 100%;    
  max-width: 1200px; 
}
</style>