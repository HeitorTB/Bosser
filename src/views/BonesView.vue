<script setup>
import { ref } from 'vue'
import CardProduto from '../components/CardProduto.vue'

// Importando imagens (ajuste o nome do arquivo se estiver diferente na sua pasta)
import imgPreto from '@/assets/Imagens/Bone_preto.png'
import imgVerde1 from '@/assets/Imagens/Bone_verde 1.png'
import imgVerde2 from '@/assets/Imagens/Bone_verde 2.png'
import imgVerde3 from '@/assets/Imagens/Bone_verde 3.png'

const listaBones = ref([
  { id: 1, nome: 'Boné Liso Preto', preco: 'R$ 199,90', img: imgPreto },
  { id: 2, nome: 'Boné Liso Verde', preco: 'R$ 199,90', img: imgVerde1 },
  { id: 3, nome: 'Boné Liso Verde Musgo', preco: 'R$ 199,90', img: imgVerde2 },
  { id: 4, nome: 'Boné Liso Verde Claro', preco: 'R$ 199,90', img: imgVerde3 },
])
</script>

<template>
  <main>
    <h2 class="titulo">Bonés</h2>
    <section>
      <CardProduto 
        v-for="bone in listaBones" 
        :key="bone.id"
        :nome="bone.nome"
        :preco="bone.preco"
        :imagem="bone.img"
      />
    </section>
  </main>
</template>