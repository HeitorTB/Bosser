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
  { id: 3, nome: 'Boné Verde Musgo', preco: 'R$ 199,90', img: imgMusgo },
  { id: 4, nome: 'Boné Verde Claro', preco: 'R$ 199,90', img: imgClaro },
  { id: 5, nome: 'Boné Black Edition', preco: 'R$ 199,90', img: imgPreto },
  { id: 6, nome: 'Boné Green Basic', preco: 'R$ 199,90', img: imgVerde },
  { id: 7, nome: 'Boné Forest', preco: 'R$ 199,90', img: imgMusgo },
  { id: 8, nome: 'Boné Light Green', preco: 'R$ 199,90', img: imgClaro },
  { id: 9, nome: 'Boné Preto Premium', preco: 'R$ 199,90', img: imgPreto },
  { id: 10, nome: 'Boné Verde Sport', preco: 'R$ 199,90', img: imgVerde },
  { id: 11, nome: 'Boné Musgo Style', preco: 'R$ 199,90', img: imgMusgo },
  { id: 12, nome: 'Boné Claro Casual', preco: 'R$ 199,90', img: imgClaro },
]

onMounted(() => {
  const dadosSalvos = localStorage.getItem('meusBones_v2')
  
  if (dadosSalvos) {
    listaBones.value = JSON.parse(dadosSalvos)
  } else {
    localStorage.setItem('meusBones_v2', JSON.stringify(dadosPadrao))
    listaBones.value = dadosPadrao
  }
})
</script>

<template>
  <main>
    <h2 class="titulo">Bonés</h2>
    <section class="grade-produtos">
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

<style scoped>
.grade-produtos {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center; 
  padding: 20px;
  
  margin: 0 auto; 
  width: 100%;    /* Garante que use a tela toda */
  max-width: 1200px; /* (Opcional) Limita a largura em telas gigantes */
}
</style>