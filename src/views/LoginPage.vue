<template>
  <div class="login">
    <h1>Авторизация</h1>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" placeholder="Логин" required />
      <input type="password" v-model="password" placeholder="Пароль" required />
      <button type="submit">Войти</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.username, password: this.password }),
        });

        console.log('Ответ сервера авторизации:', response);

        const data = await response.json();
        console.log('Данные из ответа сервера:', data);

        if (!response.ok || !data.accessToken) {
          throw new Error(data.message || 'Ошибка авторизации');
        }

        console.log('Успешная авторизация, получен токен:', data.accessToken);
        localStorage.setItem('token', data.accessToken); // Сохраняем accessToken
        this.$router.push('/profile'); // Перенаправление на страницу профиля
      } catch (err) {
        console.error('Ошибка авторизации:', err.message);
        this.error = err.message;
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
