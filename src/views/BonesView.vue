<script setup>
import { ref, onMounted } from 'vue'
import CardProduto from '../components/CardProduto.vue'

import imgPreto from '@/assets/Imagens/Bone_preto.png'
import imgVerde from '@/assets/Imagens/Bone_verde 1.png'
import imgMusgo from '@/assets/Imagens/Bone_verde 2.png'
import imgClaro from '@/assets/Imagens/Bone_verde 3.png'

const listaBones = ref([])

const dadosPadrao = [
  { id: 1, nome: 'Boné Liso Preto', preco: 'R$ 199,90', img: imgPreto },
  { id: 2, nome: 'Boné Liso Verde', preco: 'R$ 199,90', img: imgVerde },
  { id: 3, nome: 'Boné Liso Verde Musgo', preco: 'R$ 199,90', img: imgMusgo },
  { id: 4, nome: 'Boné Liso Verde Claro', preco: 'R$ 199,90', img: imgClaro },
]

onMounted(() => {
  const dadosSalvos = localStorage.getItem('meusBones')
  
  if (dadosSalvos) {
    listaBones.value = JSON.parse(dadosSalvos)
  } else {
    localStorage.setItem('meusBones', JSON.stringify(dadosPadrao))
    listaBones.value = dadosPadrao
  }
})
</script>

<template>
  <main>
    <h2 class="titulo">Bonés</h2>
    <section>
      <CardProduto 
        v-for="item in listaBones" 
        :key="item.id"
        :nome="item.nome"
        :preco="item.preco"
        :imagem="item.img"
      />
    </section>
  </main>
</template>