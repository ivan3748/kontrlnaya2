<template>
  <div class="profile">
    <h1>Профиль</h1>
    <div v-if="user">
      <img :src="user.image" alt="User" />
      <p><strong>{{ user.firstName }} {{ user.lastName }}</strong></p>
      <p>{{ user.email }}</p>
    </div>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
export default {
  data() {
    return { user: null };
  },
  async created() {
    try {
      const token = localStorage.getItem('token');
      console.log('Получен токен из localStorage:', token);

      if (!token) {
        console.log('Токен отсутствует. Перенаправление на страницу логина.');
        this.$router.push('/login');
        return;
      }

      // Использование прокси, заменив полный URL на относительный
      const response = await fetch('/auth/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',  // Если требуется отправка cookie
      });

      console.log('Ответ сервера профиля:', response);

      if (!response.ok) {
        console.error('Ошибка при получении данных профиля:', response.statusText);
        localStorage.removeItem('token'); // Удаляем некорректный токен
        this.$router.push('/login');
        return;
      }

      const userData = await response.json();
      console.log('Полученные данные пользователя:', userData);

      this.user = userData;
    } catch (error) {
      console.error('Ошибка в создании профиля:', error.message);
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>
.profile {
  text-align: center;
  padding: 20px;
}

img {
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
