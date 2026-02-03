<template>
  <header>
    <div class="imagens">
      <figure class="lupa">
        <img src="@/assets/Imagens/Lupa 1.png" alt="ícone de pesquisar" width="25px">
      </figure>
      
      <RouterLink to="/">
        <h1><img src="@/assets/Imagens/Logo-Principal.png" alt="Logo" width="190px"></h1>
      </RouterLink>
      
      <ol class="Lista_icones">
        <li><img src="@/assets/Imagens/carrinhos 1.png" alt="compras" width="25px"></li>
        <li>
          <RouterLink to="/login">
            <img src="@/assets/Imagens/avatar 1.png" alt="perfil" width="25px">
          </RouterLink>
        </li>
      </ol>
    </div>

    <nav class="nav_menu">
      <ol>
        <li>Quem somos</li>
        <li><RouterLink to="/">Início</RouterLink></li>
        <li><RouterLink to="/camisas">Produtos</RouterLink></li>
        <li>Destaques</li>
      </ol>
    </nav>
  </header>
</template>