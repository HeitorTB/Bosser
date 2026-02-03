<template>
  <main>
    <figure class="Elegancia">
      <img src="@/assets/Imagens/Elegância.png" class="ele_img">
    </figure>

    <figure class="itens">
      <RouterLink to="/camisas">
        <img src="@/assets/Imagens/camisa_linho.png" class="camisa_linho" width="650px" height="580px">
      </RouterLink>
      <div class="bone_birken">
        <RouterLink to="/bones">
          <img src="@/assets/Imagens/bone.png" class="bone">
        </RouterLink>
        <RouterLink to="/birkens">
          <img src="@/assets/Imagens/birken.png" class="birken">
        </RouterLink>
      </div>
    </figure>
  </main>
</template>