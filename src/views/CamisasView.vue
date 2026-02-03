<script setup>
import { ref, onMounted } from 'vue'
import CardProduto from '../components/CardProduto.vue'

import imgBranco from '@/assets/Imagens/Lnho_branco.png'
import imgVerde from '@/assets/Imagens/Linho_verde.png'
import imgMarinho from '@/assets/Imagens/Linho_marinho.png'
import imgBebe from '@/assets/Imagens/Linho_bebe.png'

const listaCamisas = ref([])

const dadosPadrao = [
  { id: 1, nome: 'Camisa de Linho Branca', preco: 'R$ 399,90', img: imgBranco },
  { id: 2, nome: 'Camisa de Linho Verde Musgo', preco: 'R$ 399,90', img: imgVerde },
  { id: 3, nome: 'Camisa de Linho Azul Marinho', preco: 'R$ 399,90', img: imgMarinho },
  { id: 4, nome: 'Camisa de Linho Azul Bebê', preco: 'R$ 399,90', img: imgBebe },
]

onMounted(() => {
  const dadosSalvos = localStorage.getItem('minhasCamisas')
  
  if (dadosSalvos) {
    listaCamisas.value = JSON.parse(dadosSalvos)
  } else {
    localStorage.setItem('minhasCamisas', JSON.stringify(dadosPadrao))
    listaCamisas.value = dadosPadrao
  }
})
</script>

<template>
  <main>
    <h2 class="titulo">Camisas de Linho</h2>
    <section>
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