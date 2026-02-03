<script setup>
defineProps({
  nome: String,
  preco: String,
  imagem: String 
})
</script>

<template>
  <div>
    <img :src="imagem" :alt="nome">
    <div class="info">
      <h2>{{ nome }}</h2>
      <p class="preco">{{ preco }}</p>
    </div>
  </div>
</template>