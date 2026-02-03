<script setup>
import { ref } from 'vue'
import CardProduto from '../components/CardProduto.vue'

// Importe as imagens para o Vue reconhecer
import imgPreta from '@/assets/Imagens/Birken_Preta.png'
import imgOff from '@/assets/Imagens/Birken_off.png'
import imgVerde from '@/assets/Imagens/Birken_verde.png'
import imgCinza from '@/assets/Imagens/Birken_Cinza.png'

const listaBirkens = ref([
  { id: 1, nome: 'Sandália Birken Preta', preco: 'R$ 259,90', img: imgPreta },
  { id: 2, nome: 'Sandália Birken OFF White', preco: 'R$ 259,90', img: imgOff },
  { id: 3, nome: 'Sandália Birken Verde', preco: 'R$ 259,90', img: imgVerde },
  { id: 4, nome: 'Sandália Birken Cinza', preco: 'R$ 259,90', img: imgCinza },
  // ... repita ou adicione mais itens conforme sua necessidade
])
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