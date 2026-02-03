<script setup>
import { ref, onMounted } from 'vue'
import CardProduto from '../components/CardProduto.vue'

// Importando imagens (Conforme nomes no seu HTML original)
import imgPreto from '@/assets/Imagens/Bone_preto.png'
import imgVerde from '@/assets/Imagens/Bone_verde 1.png'
import imgMusgo from '@/assets/Imagens/Bone_verde 2.png'
import imgClaro from '@/assets/Imagens/Bone_verde 3.png'

const listaBones = ref([])

// Dados Padrão dos Bonés
const dadosPadrao = [
  { id: 1, nome: 'Boné Liso Preto', preco: 'R$ 199,90', img: imgPreto },
  { id: 2, nome: 'Boné Liso Verde', preco: 'R$ 199,90', img: imgVerde },
  { id: 3, nome: 'Boné Liso Verde Musgo', preco: 'R$ 199,90', img: imgMusgo },
  { id: 4, nome: 'Boné Liso Verde Claro', preco: 'R$ 199,90', img: imgClaro },
]

onMounted(() => {
  // ATENÇÃO: Mudamos a chave aqui para não misturar com as Birkens
  const dadosSalvos = localStorage.getItem('meusBones')
  
  if (dadosSalvos) {
    listaBones.value = JSON.parse(dadosSalvos)
  } else {
    listaBones.value = dadosPadrao
    salvarNoBrowser()
  }
})

function salvarNoBrowser() {
  localStorage.setItem('meusBones', JSON.stringify(listaBones.value))
}

function excluirItem(id) {
  if(confirm("Tem certeza que quer apagar este boné?")) {
    listaBones.value = listaBones.value.filter(item => item.id !== id)
    salvarNoBrowser()
  }
}

function restaurarPadrao() {
  listaBones.value = dadosPadrao
  salvarNoBrowser()
}
</script>

<template>
  <main>
    <div class="cabecalho-lista">
      <h2 class="titulo">Bonés (Gerenciado via LocalStorage)</h2>
      <button @click="restaurarPadrao" class="btn-restaurar">Restaurar Lista</button>
    </div>

    <section v-if="listaBones.length > 0">
      <div v-for="item in listaBones" :key="item.id" class="container-item">
        <CardProduto 
          :nome="item.nome"
          :preco="item.preco"
          :imagem="item.img"
        />
        <button @click="excluirItem(item.id)" class="btn-excluir">Excluir</button>
      </div>
    </section>

    <div v-else class="aviso-vazio">
      <p>Nenhum boné na lista.</p>
    </div>
  </main>
</template>

<style scoped>
/* Mesmo estilo usado na página de Birkens */
.cabecalho-lista { display: flex; justify-content: space-between; align-items: center; padding-right: 50px; }
.btn-restaurar { background-color: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer; border-radius: 5px; }
.container-item { display: flex; flex-direction: column; align-items: center; }
.btn-excluir { background-color: #ff4d4d; color: white; border: none; padding: 5px 15px; margin-top: 10px; cursor: pointer; border-radius: 4px; }
.btn-excluir:hover { background-color: #cc0000; }
.aviso-vazio { text-align: center; margin-top: 50px; font-size: 1.5em; color: gray; }
</style>