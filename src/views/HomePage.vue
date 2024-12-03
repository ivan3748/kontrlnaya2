<template>
  <div class="home">
    <h1>Добро пожаловать</h1>
    <p>Это демо-приложение с использованием Vue.js и роутинга.</p>
 
    <router-link to="/login" class="btn">Авторизоваться</router-link>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.home-image {
  width: 300px;
  margin: 20px 0;
}

.btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
