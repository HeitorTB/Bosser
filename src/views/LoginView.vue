<template>
  <main class="principal">
    <div class="form-container">
      <h2 class="Conecte-se">Conecte-se</h2>
      
      <form @submit.prevent="">
        <label for="email">Email</label><br>
        <input type="email" id="email" name="email" required class="caixa" /><br>
        
        <label for="senha">Senha</label><br>
        <input type="password" id="senha" name="senha" required class="caixa" />
        
        <p class="senha">Esqueceu a senha?</p>
        
        <label class="lembrar">
          <input type="checkbox" name="lembrar" /> Lembrar-me 
        </label><br>
        
        <input type="submit" value="Entrar" class="Entrar" />
      </form>
    </div>
  </main>
</template>
